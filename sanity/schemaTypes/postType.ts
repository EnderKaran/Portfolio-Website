import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().error('Başlık zorunludur!'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Uzantısı (Slug)',
      description: 'Örn: benim-ilk-yazim (Generate butonuna basarak otomatikleştirebilirsin)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Kapak Resmi',
      type: 'image',
      options: {
        hotspot: true, // Resmin neresinin odak noktası olacağını seçmeni sağlar
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin (SEO için resmi açıklayın)',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayınlanma Tarihi',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kısa Özet',
      description: 'Blog listesi sayfasında görünecek kısa açıklama (1-2 cümle)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Yazı İçeriği',
      type: 'blockContent', // Zengin metin editörü (Kalın, italik, link, resim eklenebilir)
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
  },
})