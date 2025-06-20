'use client'

import { useState } from 'react'
import Image from 'next/image'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 shadow-md py-2 px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo + Phone */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/420193098_122110677836242846_4605351335286497655_n.jpg"
            alt="WebEasy Logo"
            width={120}
            height={35} // instead of 50
            className="h-[35px] w-auto object-contain"
          />
          <h1 className="text-2xl font-bold text-white">Webeasy-Tech</h1>
          <a
            href="tel:+923242822577"
            className="hidden md:flex items-center text-sm text-green-400 hover:text-green-300"
          >
            <span className="mr-1">📞</span> +92 324 2822577
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-sm font-medium items-center">
          <li><a href="/">Home</a></li>
          <li className="relative group">
            <a href="/services" className="cursor-pointer">Services</a>
            <ul className="absolute left-0 top-full bg-gray-800 text-white mt-1 rounded shadow-lg min-w-[160px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-50">
              <li>
                <a href="/web-development" className="block px-4 py-2 hover:bg-gray-700">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/digital-marketing" className="block px-4 py-2 hover:bg-gray-700">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/seo-services" className="block px-4 py-2 hover:bg-gray-700">
                  SEO Services
                </a>
              </li>
            </ul>
          </li>

          <li><a href="/testimonials">Testimonials</a></li>
          <li>
            <a href="https://wa.me/923242822577" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-white text-sm font-medium px-4">
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li>
            <details className="group">
              <summary className="cursor-pointer">Services</summary>
              <ul className="ml-4 mt-2 space-y-1 text-gray-300">
                <li><a href="/web-development" onClick={() => setMenuOpen(false)}>Web Development</a></li>
                <li><a href="/digital-marketing" onClick={() => setMenuOpen(false)}>Digital Marketing</a></li>
                <li><a href="/seo-services" onClick={() => setMenuOpen(false)}>SEO Services</a></li>
              </ul>
            </details>
          </li>
          <li><a href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="https://wa.me/923242822577" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      )}
    </nav>
  )
}
