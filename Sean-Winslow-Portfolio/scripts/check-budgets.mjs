import { promises as fs } from 'fs';
import path from 'path';
import { gzipSync } from 'zlib';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const JS_BUDGET = 200 * 1024; // 200 KB gzip
const FONT_BUDGET = 120 * 1024; // 120 KB gzip

const walkFiles = async (dir, matcher) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walkFiles(absolute, matcher);
      }
      return matcher(absolute) ? [absolute] : [];
    }),
  );

  return files.flat();
};

const gzipSize = async (filePath) => {
  const content = await fs.readFile(filePath);
  return gzipSync(content).length;
};

const sumGzipSizes = async (filePaths) => {
  const sizes = await Promise.all(filePaths.map(gzipSize));
  return sizes.reduce((total, value) => total + value, 0);
};

const formatKb = (bytes) => `${(bytes / 1024).toFixed(2)} KB`;

const ensureDistExists = async () => {
  try {
    const stats = await fs.stat(DIST_DIR);
    if (!stats.isDirectory()) {
      throw new Error('dist path is not a directory');
    }
  } catch (error) {
    throw new Error('dist directory not found. Run `npm run build` first.');
  }
};

const main = async () => {
  await ensureDistExists();

  const jsFiles = await walkFiles(DIST_DIR, (filePath) => filePath.endsWith('.js'));
  const fontFiles = await walkFiles(DIST_DIR, (filePath) => /\.(woff2?|ttf|otf)$/i.test(filePath));

  const jsSize = await sumGzipSizes(jsFiles);
  const fontSize = await sumGzipSizes(fontFiles);

  console.log(`JS payload (gzip): ${formatKb(jsSize)} (${jsFiles.length} files)`);
  console.log(`Font payload (gzip): ${formatKb(fontSize)} (${fontFiles.length} files)`);

  const violations = [];
  if (jsSize > JS_BUDGET) {
    violations.push(`Initial JavaScript exceeds ${formatKb(JS_BUDGET)}.`);
  }
  if (fontSize > FONT_BUDGET) {
    violations.push(`Font assets exceed ${formatKb(FONT_BUDGET)}.`);
  }

  if (violations.length > 0) {
    console.error('Budget check failed:\n - ' + violations.join('\n - '));
    process.exit(1);
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
