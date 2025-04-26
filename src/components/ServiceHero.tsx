'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceHero() {
  return (
    <section className="relative h-[80vh] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/istockphot.jpg"
          alt="Services background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your Brand with Confidence
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Websites, stores, ads & support – everything you need under one roof.
        </p>
        <Link href="/contact">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-xl text-lg font-medium transition">
            Book a Free Consultation
          </button>
        </Link>
      </div>
    </section>
  )
}
