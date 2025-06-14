// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Webeasy-Tech',
  description: 'Professional digital services: websites, Shopify, marketing, and software.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-white">
        {/* Background Image with Overlay */}
        <div className="fixed inset-0 z-[-1]">
          <div
            className="absolute inset-0 opacity-60"
            aria-hidden="true"
          ></div>
          {/* <img
            src="/images/contact-bg.jpg"
            alt="background"
            className="w-full h-full object-cover"
          /> */}
        </div>

        <Navbar />
        <main className="px-0">{children}</main>
      

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
