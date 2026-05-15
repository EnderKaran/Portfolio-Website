import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectStats',
  title: 'Proje İstatistikleri',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      description: 'Sadece referans amaçlı (Örn: Ana İstatistikler)',
      initialValue: 'Ana İstatistikler',
    }),
    defineField({
      name: 'waypointCount',
      title: 'Waypoint Proje Sayısı',
      type: 'number',
      description: 'Waypoint projelerinin güncel sayısı (Sadece rakam girin, örn: 14)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'frontendMentorCount',
      title: 'Frontend Mentor Proje Sayısı',
      type: 'number',
      description: 'Frontend Mentor projelerinin güncel sayısı (Sadece rakam girin, örn: 125)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'interfaceFoundryText',
      title: 'Interface Foundry Durumu',
      type: 'string',
      description: 'Interface Foundry için görünecek sabit metin (Örn: 50+ Components)',
      initialValue: '50+ Components',
    }),
  ],
})