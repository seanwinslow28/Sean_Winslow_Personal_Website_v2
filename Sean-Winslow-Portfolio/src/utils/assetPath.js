// Utility function to get the correct asset path for both dev and production
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as-is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base URL
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export default getAssetPath; 