import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jhurgreens.com'
  
  // Main routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/products'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Product pages could be added dynamically here if needed
  // const products = await getProducts()
  // const productUrls = products.map((product) => ({
  //   url: `${baseUrl}/products/${product.slug}`,
  //   lastModified: new Date(product.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [...routes]
}