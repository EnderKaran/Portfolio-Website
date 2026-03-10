'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { PortableText } from '@portabletext/react';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const urlFor = (source: any) => imageUrlBuilder({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '' }).image(source);

// PortableText (Zengin Metin) CSS Ayarları
const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-auto my-8 overflow-hidden rounded-xl">
          <Image
            src={urlFor(value).width(1000).url()}
            alt={value.alt || 'Blog görseli'}
            width={1000}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="mt-12 mb-6 text-4xl font-bold text-gray-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="mt-10 mb-5 text-3xl font-bold text-gray-900 dark:text-white">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-8 mb-4 text-2xl font-bold text-gray-900 dark:text-white">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="py-2 pl-4 my-6 italic border-l-4 text-gray-600 border-emerald-500 bg-gray-50 dark:bg-gray-900 dark:text-gray-400 rounded-r-lg">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mb-6 ml-6 space-y-2 list-disc text-gray-700 dark:text-gray-300">{children}</ul>,
    number: ({ children }: any) => <ol className="mb-6 ml-6 space-y-2 list-decimal text-gray-700 dark:text-gray-300">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>,
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} className="font-semibold underline transition-colors text-emerald-500 hover:text-emerald-600 decoration-2 underline-offset-2">
          {children}
        </a>
      );
    },
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Belirli bir slug değerine sahip olan ilk yazıyı getir
        const query = '*[_type == "post" && slug.current == $slug][0]';
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Yazı çekilemedi:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-emerald-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white dark:bg-black text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold">Yazı bulunamadı.</h1>
        <Link href="/blog" className="px-6 py-2 text-white transition-colors rounded-full bg-emerald-500 hover:bg-emerald-600">Bloga Dön</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-24 transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="container px-4 mx-auto max-w-[800px]">
        
        <Link href="/blog" className="inline-flex items-center gap-2 mb-8 text-sm font-semibold transition-colors text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400">
          <FiArrowLeft /> Blog Listesine Dön
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-6 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <FiCalendar />
            {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>

          <h1 className="mb-8 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {post.mainImage && (
            <div className="relative w-full h-[300px] md:h-[450px] mb-12 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(800).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose-emerald">
            {/* Zengin Metni Özel Bileşenlerle Ekrana Basıyoruz */}
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </motion.div>

      </div>
    </article>
  );
}