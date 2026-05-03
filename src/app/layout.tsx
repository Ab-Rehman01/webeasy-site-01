// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '@/components/WhatsappButton';
import CustomChatBot from '@/components/CustomChatBot';

export const metadata = {
  metadataBase: new URL("https://webezee-tech.vercel.app/"),

  title: 'WebEzee Tech | Web Development, Shopify, SEO & Digital Marketing in Pakistan',
  description:
    'WebEzee Tech offers expert web development, Shopify stores, SEO optimization, and digital marketing services in Pakistan. Build your brand with custom web solutions.',

  keywords: [
    'Web Development Pakistan',
    'Shopify Development Pakistan',
    'SEO Services Pakistan',
    'Digital Marketing Agency',
    'Next.js Development',
    'Custom Website Design',
    'E-commerce Solutions',
    'Responsive Web Design',
    'Branding & Marketing',
    'Webezee Tech',
    'Website Maintenance',
    'UI UX Design',
  ],

  authors: [{ name: 'WebEzee Tech', url: 'https://webezee-tech.vercel.app/' }],

  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon-32x32.png',
    apple: '/images/favicon/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/images/favicon/site.webmanifest',
    },
  },

  verification: {
    google: 'jCY_UMA1Bc0fTorzhjAj65dMcMPUsjhJzx2rUe9y8mA',
  },

  openGraph: {
    title: 'WebEzee Tech | Web Development, Shopify & SEO Services',
    description:
      'Launch your brand with WebEzee Tech. Professional web development, Shopify stores, SEO optimization, and digital marketing solutions.',
    url: 'https://webezee-tech.vercel.app/',
    siteName: 'WebEzee Tech',
    type: 'website',
    locale: 'en_PK',
    images: [
      {
        url: 'https://webezee-tech.vercel.app/og-image-v2.png',
        width: 1200,
        height: 630,
        alt: 'WebEzee Tech - Web Development & Marketing Services',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: {
  default: 'WebEzee Tech - Web Development & SEO Agency in Pakistan',
  template: '%s | WebEzee Tech'
},

description:
  'WebEzee Tech is a leading web development and digital marketing agency in Pakistan. We build fast websites, Shopify stores, and SEO strategies that grow your business.',

    creator: '@webezee_tech', // agar twitter handle hai to
    images: ['https://webezee-tech.vercel.app/og-image-v2.png'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  alternates: {
    canonical: 'https://webezee-tech.vercel.app/',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-white bg-gray-900 min-h-screen">
        <Navbar />
        <main className="px-0">{children}</main>
        <CustomChatBot />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}


// src/app/layout.tsx
// src/app/layout.tsx (or wherever your root layout lives)
// src/app/layout.tsx
// src/app/layout.tsx
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import './globals.css'
// import { ReactNode } from 'react'

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="relative">        {/* no overflow-hidden, no bg-… */}
          
//         {/* 1) Your animated glow stays fixed behind everything */}
//         <div
//           className="
//             fixed inset-0
//             bg-glow bg-[length:200%_200%]
//             opacity-20
//             animate-glowLine
//             z-0
//           "
//         />

//         {/* 2) All UI on top, transparent by default */}
//         <div className="relative z-10 flex flex-col min-h-screen text-white">
//           <Navbar />

//           <main className="flex-1">
//             {children}
//           </main>

//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }
