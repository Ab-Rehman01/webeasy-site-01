// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import WhatsAppButton from '@/components/WhatsappButton'
import CustomChatBot from '@/components/CustomChatBot';


export const metadata = {
  title: 'Webeasy-Tech | Web Development, Shopify, SEO & Digital Marketing Services',
description: 'Launch your brand with expert web development, Shopify stores, SEO services, and custom digital solutions by Webeasy-Tech.',

};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
<link rel="manifest" href="/images/favicon/site.webmanifest" />

        {/* Social Meta Tags */}
        <meta property="og:title" content="Webeasy-Tech | Web Development & Marketing Services" />
        <meta property="og:description" content="Launch your digital brand with expert services by Webeasy-Tech." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://webeasy-tech.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Webeasy-Tech",
              url: "https://webeasy-tech.vercel.app",
              description: "Professional web development, Shopify, and digital marketing services.",
              sameAs: [
                "https://www.facebook.com/webeasytech",
                "https://www.linkedin.com/company/webeasytech"
              ]
            }),
          }}
        />
      </head>

      <body className="relative text-white bg-gray-900 min-h-screen">

        {/* Background Image with Overlay */}
        {/* <div className="fixed inset-0 z-[-1]">
          <div
            className="absolute bg-gray-900 inset-0 opacity-60"
            aria-hidden="true"
          ></div>
          
        </div> */}

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
