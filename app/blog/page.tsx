'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-12-01',
  useCdn: true,
});

const urlFor = (source: any) => imageUrlBuilder(client).image(source);

// TypeScript tipi
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: any;
}
// ---------------------------------------------------

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = '*[_type == "post"] | order(publishedAt desc)';
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Blog yazıları çekilemedi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
        <div className="w-12 h-12 border-4 border-t-emerald-500 border-emerald-500/20 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">Yazılar Yükleniyor...</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
      
      {/* Arka Plan Soft Glow Efektleri */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40 -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-emerald-500 blur-[160px] rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-blue-500 blur-[140px] rounded-full mix-blend-multiply opacity-20"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
        
        {/* --- BAŞLIK BÖLÜMÜ --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20 text-center">
          <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-8xl text-gray-900 dark:text-white">
            Geliştirici <span className="text-emerald-500">Günlüğü</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
            Yazılım, tasarım ve teknoloji üzerine derinlemesine düşüncelerim, karşılaştığım problemler ve çözüm yollarım.
          </p>
        </motion.div>

        {/* --- BLOG KARTLARI (BENTO GRID) --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden transition-all duration-300 border shadow-lg group rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border-gray-100 dark:border-white/5 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:border-emerald-500/30"
            >
              {/* Görsel Alanı */}
              <Link href={`/blog/${post.slug.current}`} className="relative block w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-400">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM7 9l4 5 7-10v8h2V3h-8v6z"/></svg>
                  </div>
                )}
              </Link>

              {/* İçerik Alanı */}
              <div className="flex flex-col flex-grow p-6">
                {/* Tarih */}
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <FiCalendar />
                  {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>

                {/* Başlık */}
                <Link href={`/blog/${post.slug.current}`}>
                  <h2 className="mb-3 text-2xl font-black tracking-tight transition-colors text-gray-900 dark:text-white group-hover:text-emerald-500 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                {/* Özet */}
                <p className="flex-grow mb-6 text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Okuma Linki */}
                <Link href={`/blog/${post.slug.current}`} className="inline-flex items-center gap-2 font-bold transition-colors text-emerald-500 hover:text-emerald-600 w-fit">
                  Yazıyı Oku <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}

          {posts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400">
                <FiCalendar size={32} />
              </div>
              <p className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Henüz Yazı Yok</p>
              <p className="mt-2 text-gray-500">Çok yakında yeni içeriklerle burada olacağım.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}