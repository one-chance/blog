import { MetadataRoute } from 'next';
import { getPosts } from '@/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const postsSitemap: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://one-chance.dev/post/${post.url}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
  }));

  return [
    {
      url: 'https://one-chance.dev',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://one-chance.dev/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://one-chance.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...postsSitemap,
  ];
}
