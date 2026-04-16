import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const envPath = path.join(rootDir, '.env')
const publicDir = path.join(rootDir, 'public')

function getEnvValue(key) {
  if (!fs.existsSync(envPath)) return ''

  const content = fs.readFileSync(envPath, 'utf8')
  const match = content.match(new RegExp(`^\\s*${key}\\s*=\\s*(.+)\\s*$`, 'm'))
  if (!match) return ''

  return match[1].trim().replace(/^['\"]|['\"]$/g, '')
}

const fallbackSiteUrl = 'https://example.com/'
const rawSiteUrl = getEnvValue('VITE_SITE_URL') || fallbackSiteUrl
const siteUrl = rawSiteUrl.endsWith('/') ? rawSiteUrl : `${rawSiteUrl}/`
const sitemapUrl = new URL('sitemap.xml', siteUrl).toString()

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`

const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8')

console.log(`[seo] Updated sitemap and robots for ${siteUrl}`)
