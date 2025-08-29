import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL}`
    : 'https://example.com'
  const routes = ['', '/proyectos', '/cv', '/sobre-mi']
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.7 }))
}
