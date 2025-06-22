// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */


module.exports = {
  siteUrl: 'https://webezee-tech.vercel.app/', // ← Apni domain daalein
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  generateRobotsTxt: true, // ✅ this line enables robots.txt
};