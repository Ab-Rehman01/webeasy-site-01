'use client'
//components/About.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WebEzee Tech | Web Development & SEO Agency in Pakistan",
  description:
    "Learn about WebEzee Tech, a leading web development and digital marketing agency in Pakistan. We specialize in modern websites, Shopify stores, and SEO strategies that grow your business online.",
  alternates: {
    canonical: "https://webezee-tech.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto text-gray-300">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          About WebEzee Tech
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          WebEzee Tech is a results-driven web development and digital marketing agency in Pakistan, helping businesses build a powerful online presence through high-performance websites, Shopify stores, and advanced SEO strategies.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Who We Are
        </h2>
        <p className="leading-7">
          We are a team of passionate developers, designers, and digital marketers dedicated to delivering modern, fast, and scalable web solutions. Our goal is to help startups, small businesses, and enterprises grow in the digital world with innovative and conversion-focused strategies.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          What We Do
        </h2>
        <p className="leading-7 mb-4">
          At WebEzee Tech, we provide end-to-end digital solutions tailored to your business needs:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Custom Website Development (Next.js, React)</li>
          <li>Shopify Store Design & Development</li>
          <li>SEO Optimization & Google Ranking</li>
          <li>Digital Marketing & Lead Generation</li>
          <li>UI/UX Design & Branding</li>
        </ul>
      </section>

      {/* MISSION */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Our Mission
        </h2>
        <p className="leading-7">
          Our mission is to empower businesses in Pakistan and globally by providing cutting-edge web solutions that drive traffic, increase conversions, and build long-term brand value.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Why Choose WebEzee Tech
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>Fast, modern, and SEO-optimized websites</li>
          <li>Client-focused and result-driven approach</li>
          <li>Affordable solutions for startups and businesses</li>
          <li>Expertise in Shopify, SEO, and digital marketing</li>
          <li>Ongoing support and maintenance</li>
        </ul>
      </section>

    </main>
  );
}