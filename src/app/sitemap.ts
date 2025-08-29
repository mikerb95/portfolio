import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const routes = ['', '/proyectos', '/cv', '/sobre-mi']
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.6 }))
}
