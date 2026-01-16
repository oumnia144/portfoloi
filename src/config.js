// src/config.js
export const getProjectPath = (fileName) => {
  // إذا كان على GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    return `/portfolio-oumnia/${fileName}`;
  }
  // إذا كان على التطوير المحلي
  return `/${fileName}`;
};