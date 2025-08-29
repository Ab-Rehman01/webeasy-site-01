
// src/app/page.tsx
import Team from '@/components/Team';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export const metadata = {
  title: 'WebEzee Tech | Best Web Development & Digital Marketing Agency in Pakistan',
  description:
    'WebEzee Tech is a professional digital agency in Pakistan offering Web Development, Shopify, SEO, and Digital Marketing. Transform your business online today.',
  keywords: [
    'Web Development Agency Pakistan',
    'Shopify Store Development',
    'SEO Optimization Services',
    'Digital Marketing Experts',
    'Ecommerce Solutions',
    'Custom Website Design',
    'Next.js Development',
  ],
  alternates: {
    canonical: 'https://webezee-tech.vercel.app/',
  },
  openGraph: {
    title: 'WebEzee Tech | Web Development & Marketing Agency',
    description:
      'Build your brand with WebEzee Tech. We provide modern websites, Shopify stores, SEO, and digital marketing services.',
    url: 'https://webezee-tech.vercel.app/',
    images: [
      {
        url: 'https://webezee-tech.vercel.app/og-image-v2.png',
        width: 1200,
        height: 630,
        alt: 'WebEzee Tech - Web Development in Pakistan',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Testimonials />
    </>
  );
}
