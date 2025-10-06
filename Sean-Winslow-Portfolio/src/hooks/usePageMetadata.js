import { useEffect } from 'react';

const DEFAULT_IMAGE = 'https://www.seanwinslow.com/og-image.svg';
const WEBSITE_ID = 'https://www.seanwinslow.com/#website';

const isBrowser = typeof document !== 'undefined';

const ensureHeadElement = (selector, create) => {
  if (!isBrowser) {
    return null;
  }

  let element = document.head.querySelector(selector);
  if (!element && create) {
    element = create();
    if (element) {
      document.head.appendChild(element);
    }
  }

  return element;
};

const updateMetaTag = ({ name, property, value }) => {
  if (!isBrowser || value === undefined || value === null) {
    return;
  }

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  const meta = ensureHeadElement(selector, () => {
    const element = document.createElement('meta');
    if (name) {
      element.setAttribute('name', name);
    } else if (property) {
      element.setAttribute('property', property);
    }
    return element;
  });

  if (meta) {
    meta.setAttribute('content', value);
  }
};

const updateLinkTag = ({ rel, href }) => {
  if (!isBrowser || href === undefined || href === null) {
    return;
  }

  const link = ensureHeadElement(`link[rel="${rel}"]`, () => {
    const element = document.createElement('link');
    element.setAttribute('rel', rel);
    return element;
  });

  if (link) {
    link.setAttribute('href', href);
  }
};

const stripHash = (value = '') => {
  const [base] = value.split('#');
  return base || value;
};

const ensureWebPageGraph = (graph, url, title, description) => {
  if (!Array.isArray(graph)) {
    return;
  }

  const canonicalUrl = stripHash(url);
  const pageId = `${canonicalUrl}#webpage`;

  let webPageNode = graph.find((node) => {
    if (node['@type'] !== 'WebPage') {
      return false;
    }

    const nodeId = node['@id'];
    const nodeUrl = typeof node.url === 'string' ? stripHash(node.url) : null;

    return nodeId === pageId || nodeUrl === canonicalUrl;
  });

  if (!webPageNode) {
    webPageNode = {
      '@type': 'WebPage',
      '@id': pageId,
      url: canonicalUrl,
      isPartOf: { '@id': WEBSITE_ID },
    };
    graph.push(webPageNode);
  }

  webPageNode['@id'] = pageId;
  webPageNode.url = canonicalUrl;

  if (title) {
    webPageNode.name = title;
  }
  if (description) {
    webPageNode.description = description;
  }

  if (!webPageNode.isPartOf || typeof webPageNode.isPartOf !== 'object') {
    webPageNode.isPartOf = { '@id': WEBSITE_ID };
  } else {
    webPageNode.isPartOf['@id'] = WEBSITE_ID;
  }

  if (!webPageNode.mainEntityOfPage || typeof webPageNode.mainEntityOfPage !== 'object') {
    webPageNode.mainEntityOfPage = { '@id': pageId };
  } else if (!webPageNode.mainEntityOfPage['@id']) {
    webPageNode.mainEntityOfPage['@id'] = pageId;
  }
};

const parseStructuredData = (textContent) => {
  if (!textContent) {
    return null;
  }

  try {
    return JSON.parse(textContent);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Structured data parse failed:', error);
    return null;
  }
};

const findStructuredDataScript = () => {
  if (!isBrowser) {
    return null;
  }

  const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');

  for (const script of scripts) {
    const data = parseStructuredData(script.textContent);

    if (!data || !Array.isArray(data['@graph'])) {
      continue;
    }

    const hasWebsiteNode = data['@graph'].some(
      (node) => node['@id'] === WEBSITE_ID || node['@type'] === 'WebSite',
    );

    if (hasWebsiteNode) {
      return { script, data };
    }
  }

  return null;
};

const updateStructuredData = (url, title, description) => {
  if (!isBrowser) {
    return;
  }

  const entry = findStructuredDataScript();

  if (!entry) {
    return;
  }

  try {
    const { script, data } = entry;
    ensureWebPageGraph(data['@graph'], url, title, description);
    script.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Structured data update skipped:', error);
  }
};

const usePageMetadata = ({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  type = 'website',
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const resolvedUrl = url || window.location.href;
    const canonicalUrl = stripHash(resolvedUrl);

    if (title && isBrowser) {
      document.title = title;
    }

    updateMetaTag({ name: 'description', value: description || '' });
    updateMetaTag({ property: 'og:title', value: title || '' });
    updateMetaTag({ property: 'og:description', value: description || '' });
    updateMetaTag({ property: 'og:type', value: type });
    updateMetaTag({ property: 'og:url', value: canonicalUrl });
    updateMetaTag({ property: 'og:image', value: image });
    updateMetaTag({ name: 'twitter:title', value: title || '' });
    updateMetaTag({ name: 'twitter:description', value: description || '' });
    updateMetaTag({ name: 'twitter:image', value: image });
    updateLinkTag({ rel: 'canonical', href: canonicalUrl });

    updateStructuredData(canonicalUrl, title, description);

    return undefined;
  }, [title, description, url, image, type]);
};

export default usePageMetadata;
