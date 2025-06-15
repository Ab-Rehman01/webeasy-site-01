// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import WhatsAppButton from '@/components/WhatsappButton'
import CustomChatBot from '@/components/CustomChatBot';


export const metadata = {
  title: 'Webeasy-Tech',
  description: 'Professional digital services: websites, Shopify, marketing, and software.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"><head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
