// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://theclicks.ca',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
};

module.exports = config;
