import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-03-10',
  useCdn: true, // Hızlı yükleme için CDN kullan
});

// Sanity'den gelen resim objelerini gerçek URL'lere dönüştüren yardımcı fonksiyon
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}