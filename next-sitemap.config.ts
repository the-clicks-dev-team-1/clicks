// next-sitemap.config.ts
/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://theclicks.ca', // Замените на ваш домен
    generateRobotsTxt: true, // (опционально) генерирует robots.txt
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
  };
  
  export default config;
  