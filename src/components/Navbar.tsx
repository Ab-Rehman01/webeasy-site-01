'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">

{/* Main Navbar */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="WebEzee Tech Logo"
              width={120}
              height={40}
              className="w-auto h-10 object-contain"
            />

            <div>
              <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
                WebEzee Tech
              </h1>
              <p className="text-xs text-gray-400 hidden md:block">
                Web Development & SEO Agency
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

            <li>
              <Link href="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                Services
                <ChevronDown size={16} />
              </button>
 {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">

                  <Link
                    href="/web-development"
                    className="block px-5 py-3 hover:bg-white/5 transition"
                  >
                    Web Development
                  </Link>

                  <Link
                    href="/shopify-store-setup"
                    className="block px-5 py-3 hover:bg-white/5 transition"
                  >
                    Shopify Store Setup
                  </Link>

                  <Link
                    href="/seo-services"
                    className="block px-5 py-3 hover:bg-white/5 transition"
                  >
                    SEO Services
                  </Link>

                  <Link
                    href="/digital-marketing"
                    className="block px-5 py-3 hover:bg-white/5 transition"
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/about" className="hover:text-green-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>

            <li>
              <a
                href="https://wa.me/923242822577"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            {/* Phone */}
            <a
              href="tel:+923242822577"
                className="text-sm text-green-400 hover:text-green-300 transition"
            >
              +92 324 2822577
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="rounded-xl bg-green-500 px-5 py-2 text-sm font-semibold text-black hover:bg-green-400 hover:scale-105 transition duration-300"
            >
              Get Quote
            </Link>
          </div>
 {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-6 space-y-4 text-gray-300">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-green-400"
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-green-400"
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-green-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-green-400"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/923242822577"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-400"
          >
            WhatsApp
          </a>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl bg-green-500 px-4 py-3 text-center font-semibold text-black"
          >
            Get Quote
            </Link>
        </div>
      )}
    </nav>
  )
}
 









































// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/ shadow-lg text-white border-b border-white/10">
//       <div className="flex items-center justify-between container mx-auto px-4 py-3">

//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <Image
//             src="/images/logo.jpg"
//             alt="WebEzee Tech Logo"
//             width={110}
//             height={35}
//             className="h-[35px] w-auto object-contain"
//           />

//           <h1 className="text-lg font-bold">
//             WebEzee Tech
//           </h1>

//           <a
//             href="tel:+923242822577"
//             className="hidden md:flex items-center text-sm text-green-400 hover:text-green-300"
//           >
//             📞 +92 324 2822577
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">

//           <li>
//             <Link href="/" className="hover:text-green-400">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link href="/services" className="hover:text-green-400">
//               Services
//             </Link>
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-green-400">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/contact" className="hover:text-green-400">
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="bg-green-500 px-3 py-1 rounded text-black font-medium hover:bg-green-400 transition"
//             >
//               Get Quote
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="https://wa.me/923242822577"
//               target="_blank"
//               className="text-green-400 hover:text-green-300"
//             >
//               WhatsApp
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? '✖' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/90 px-4 py-4 space-y-3 text-sm">

//           <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

//           <a
//             href="https://wa.me/923242822577"
//             className="block text-green-400"
//           >
//             WhatsApp
//           </a>
//         </div>
//       )}
//     </nav>
//   )
// }


// import { useState } from 'react'
// import Image from 'next/image'
// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="bg-gray-900 shadow-md py-2 px-6 sticky top-0 z-50">
//       <div className="flex items-center justify-between container mx-auto">
{/* Logo + Phone */ }
// <div className="flex items-center space-x-4">
//   <Image
//     src="/images/420193098_122110677836242846_4605351335286497655_n.jpg"
//     alt="WebEasy Logo"
//     width={120}
//     height={35} // instead of 50
//     className="h-[35px] w-auto object-contain"
//   />
//   <h1 className="text-2xl font-bold text-white">Webeasy-Tech</h1>
//   <a
//     href="tel:+923242822577"
//     className="hidden md:flex items-center text-sm text-green-400 hover:text-green-300"
//   >
//     <span className="mr-1">📞</span> +92 324 2822577
//   </a>
// </div>
{/* Desktop Menu */ }
// <ul className="hidden md:flex space-x-6 text-white text-sm font-medium items-center">
//   <li><a href="/">Home</a></li>
//   <li className="relative group">
//     <a href="/services" className="cursor-pointer">Services</a>
//     <ul className="absolute left-0 top-full bg-gray-800 text-white mt-1 rounded shadow-lg min-w-[160px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-50">
//       <li>
//         <a href="/web-development" className="block px-4 py-2 hover:bg-gray-700">
//           Web Development
//         </a>
//       </li>
//       <li>
//         <a href="/digital-marketing" className="block px-4 py-2 hover:bg-gray-700">
//           Digital Marketing
//         </a>
//       </li>
//       <li>
//         <a href="/seo-services" className="block px-4 py-2 hover:bg-gray-700">
//           SEO Services
//         </a>
//       </li>
//     </ul>
//   </li>

//   <li><a href="/testimonials">Testimonials</a></li>
//   <li>
//     <a href="https://wa.me/923242822577" target="_blank" rel="noopener noreferrer">WhatsApp</a>
//   </li>
//   <li><a href="/contact">Contact Us</a></li>
// </ul>

{/* Mobile Menu Button */ }
//   <button
//     className="md:hidden text-white focus:outline-none"
//     onClick={() => setMenuOpen(!menuOpen)}
//   >
//     {menuOpen ? '✖️' : '☰'}
//   </button>
// </div>

{/* Mobile Menu */ }
//       {menuOpen && (
//         <ul className="md:hidden mt-4 space-y-3 text-white text-sm font-medium px-4">
//           <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
//           <li>
//             <details className="group">
//               <summary className="cursor-pointer">Services</summary>
//               <ul className="ml-4 mt-2 space-y-1 text-gray-300">
//                 <li><a href="/web-development" onClick={() => setMenuOpen(false)}>Web Development</a></li>
//                 <li><a href="/digital-marketing" onClick={() => setMenuOpen(false)}>Digital Marketing</a></li>
//                 <li><a href="/seo-services" onClick={() => setMenuOpen(false)}>SEO Services</a></li>
//               </ul>
//             </details>
//           </li>
//           <li><a href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
//           <li><a href="https://wa.me/923242822577" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
//           <li><a href="/contact">Contact Us</a></li>
//         </ul>
//       )}
//     </nav>
//   )
// }
