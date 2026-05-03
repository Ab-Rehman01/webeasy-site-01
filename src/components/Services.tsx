'use client'
import { motion } from 'framer-motion'
import {
  FaWordpress,
  FaShopify,
  FaBullhorn,
  FaShieldAlt,
  FaPaintBrush,
  FaServer,
  FaHandsHelping,
} from 'react-icons/fa'
import { PricingPackages } from './PricingPackages'
import WhatsAppSoftware from './Whatsappsoftware';
import { SiNextdotjs } from 'react-icons/si'; // import first
import Link from 'next/link';

const services = [

  {
    icon: SiNextdotjs,
    title: 'React / Next.js Development',
    desc: 'Modern web applications built with React and Next.js – optimized for performance, SEO, and scalability.',
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    desc: 'High-performance, SEO-optimized websites using the powerful WordPress CMS – fast, secure, and easy to manage.',
  },
  {
    icon: FaShopify,
    title: 'Shopify development',
    desc: 'Fully customized Shopify e-commerce stores built for conversions, mobile-responsiveness, and easy checkout.',
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing',
    desc: 'ROI-driven digital marketing strategies – including social media advertising, Google Ads, and powerful SEO.',
  },
  {
    icon: FaBullhorn,
    title: 'SEO Services',
    desc: 'Professional SEO services including technical audits, on-page optimization, and backlink strategies to improve your rankings.',
  },
  {
    icon: FaShieldAlt,
    title: 'Software & Licensing ',
    desc: 'Licensed software with installation, activation, and lifetime support – for Windows, Office, Antivirus & more.',
  },
  {
    icon: FaPaintBrush,
    title: 'Business Branding',
    desc: 'Complete visual identity packages – logos, business cards, social media kits, and branded stationery.',
  },
  {
    icon: FaServer,
    title: 'Domain & Hosting Services',
    desc: 'Complete setup of domains, secure hosting, and server configurations to get your business online smoothly.',
  },
  {
    icon: FaHandsHelping,
    title: 'Support & Consultation',
    desc: '24/7 expert consultation, technical support, and personalized solutions for your digital needs.',
  }
];
export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 bg-gray-900 text-white w-full overflow-x-hidden"
    >
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4"
        >
          Our Services
          <br>
          
          <h1 className="text-4xl font-bold">
        Best Web Development & SEO Agency in Pakistan
      </h1>

      <p>
        We build high-converting websites, Shopify stores, and SEO strategies.
      </p>
          </br>
        </motion.h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We offer a wide range of digital solutions tailored to help your business grow online — from sleek websites to
          expert marketing.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {services.map((service, i) => (
          <Link href="/services" key={i}>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-indigo-400 text-4xl">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed text-center">{service.desc}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* 👇 Pricing section niche */}
      <PricingPackages />
      <WhatsAppSoftware />

    </motion.section>
  )
}
