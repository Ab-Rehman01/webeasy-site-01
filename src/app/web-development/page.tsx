// app/web-development/page.tsx

import TemplateCategories from '@/components/TemplateCategories';
import WebTemplatesShowcase from '@/components/WebTemplatesShowcase';
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Development Services | Custom Websites for Businesses',
  description: 'We create fast, secure, SEO-optimized websites using Next.js, React, WordPress & more.',
};

export default function WebDevelopmentPage() {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center md:text-left">
        Professional Web Development
      </h1>
      <p className="text-lg mb-8 text-center md:text-left text-black">
        Custom-built websites tailored to your business needs. Fast, responsive, and SEO-friendly.
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-start">
          <ScrollFadeIn direction="left">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-black">Our Services</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1 text-black">
            <li>Next.js / React Web Apps</li>
            <li>WordPress Development</li>
            <li>Landing Pages & Portfolios</li>
            <li>Responsive & Mobile-Friendly Design</li>
            <li>Performance Optimization</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1 text-black">
            <li>Clean and Scalable Code</li>
            <li>SEO-Optimized Builds</li>
            <li>Quick Turnaround Time</li>
            <li>Free Consultation</li>
          </ul>

          <a
            href="https://wa.me/923242822577"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Chat on WhatsApp Now
          </a>
        </div>
        </ScrollFadeIn>

        {/* Right Side Image */}
        <div className="flex justify-center items-center">
        
          <Image
            src="/image
            s/Web_design_Star_IT_Euro.png.webp"
            alt="Web Development Preview"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
        
      </div>

      {/* Templates Section */}
     <div className="mt-16">
  <ScrollFadeIn direction="left">
    <TemplateCategories />
  </ScrollFadeIn>

  <div className="mt-12">
    <ScrollFadeIn direction="right">
      <WebTemplatesShowcase />
    </ScrollFadeIn>
  </div>
</div>
    </section>
  );
}
