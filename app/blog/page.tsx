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
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-emerald-500"></div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-24 transition-colors duration-300 sm:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tighter md:text-6xl text-emerald-500 dark:text-emerald-400">
            Blog
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Yazılım, tasarım ve teknoloji üzerine düşüncelerim, deneyimlerim ve öğrendiklerim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden transition-all duration-300 border shadow-lg group rounded-2xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <Link href={`/blog/${post.slug.current}`} className="relative block w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-400">Resim Yok</div>
                )}
              </Link>

              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <FiCalendar />
                  {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <Link href={`/blog/${post.slug.current}`}>
                  <h2 className="mb-3 text-2xl font-bold transition-colors text-gray-900 dark:text-white group-hover:text-emerald-500">
                    {post.title}
                  </h2>
                </Link>
                <p className="flex-grow mb-6 text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug.current}`} className="flex items-center gap-2 font-bold transition-colors text-emerald-500 hover:text-emerald-600">
                  Devamını Oku <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              Henüz hiç blog yazısı paylaşılmamış.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}