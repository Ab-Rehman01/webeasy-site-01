// 'use client'
// import { FaCheckCircle } from 'react-icons/fa'
// import { motion } from 'framer-motion'

// const services = [
//   {
//     title: 'Web Development',
//     details: 'Responsive, high-performance websites using Next.js, React, and Tailwind CSS for modern brands.',
//   },
//   {
//     title: 'Shopify Store Setup',
//     details: 'From design to launch – we build Shopify stores that sell and scale.',
//   },
//   {
//     title: 'Digital Marketing',
//     details: 'SEO, Google Ads, Meta Ads, content strategy – all designed to grow your online presence.',
//   },
//   {
//     title: 'Software & Licensing',
//     details: 'Premium tools, software installation, and support for businesses and individuals.',
//   },
//   {
//     title: 'Business Branding',
//     details: 'Logos, banners, flyers, business cards – creative assets that define your brand.',
//   },
//   {
//     title: 'Support & Consultation',
//     details: 'Free 1-on-1 guidance, 24/7 tech support, and expert advice to level up your business.',
//   },
// ]

// export default function ServicesPage() {
//   return (
//     <section className="min-h-screen py-20 px-6 bg-gray-950 text-white">
//       <div className="max-w-5xl mx-auto text-center mb-14">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h1>
//         <p className="text-gray-400 text-lg">Complete digital services to build, scale, and support your business online.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1, duration: 0.5 }}
//             viewport={{ once: true }}
//             className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-lg transition"
//           >
//             <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-indigo-400">
//               <FaCheckCircle className="text-green-500" /> {service.title}
//             </h3>
//             <p className="text-gray-300">{service.details}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

'use client'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

import ServiceHero from '@/components/ServiceHero'

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    details:
      'Responsive, high-performance websites using Next.js, React, and Tailwind CSS for modern brands.',
    features: ['Custom Design', 'SEO Optimized', 'Fast Load Speed', 'Mobile Responsive'],
  },
  {
    title: 'Shopify Store Setup',
    slug: 'shopify-store-setup',
    details: 'From design to launch – we build Shopify stores that sell and scale.',
    features: ['Theme Customization', 'Payment Integration', 'Product Setup', 'Apps & Plugins'],
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    details:
      'SEO, Google Ads, Meta Ads, content strategy – all designed to grow your online presence.',
    features: ['Social Media Ads', 'Google Ads', 'SEO Optimization', 'Content Strategy'],
  },
  {
    title: 'SEO Services',
    slug: 'seo-services',
    details:
      'Boost your visibility on Google with on-page, off-page, and technical SEO strategies tailored for results.',
    features: ['On-Page SEO', 'Technical SEO', 'Backlink Building', 'SEO Audits'],
  },
  {
    title: 'Software & Licensing',
    slug: 'software-licensing',
    details: 'Premium tools, software installation, and support for businesses and individuals.',
    features: ['Windows, Office, Adobe', 'Lifetime Keys', 'Installation Support'],
  },
  {
    title: 'Business Branding',
    slug: 'business-branding',
    details:
      'Logos, banners, flyers, business cards – creative assets that define your brand.',
    features: ['Logo Design', 'Business Cards', 'Flyers & Posters', 'Brand Kits'],
  },
  {
    title: 'Support & Consultation',
    slug: 'support-consultation',
    details:
      'Free 1-on-1 guidance, 24/7 tech support, and expert advice to level up your business.',
    features: ['Tech Support', 'Business Advice', 'Free Initial Consult', '24/7 Support'],
  },
]

const packages = [
  {
    name: 'Starter',
    price: 'PKR 9,999',
    features: ['1 Page Website', 'Basic Branding', '1 Revision', 'Free Consultation'],
  },
  {
    name: 'Business',
    price: 'PKR 19,999',
    features: ['Up to 5 Pages', 'Standard Branding Kit', '3 Revisions', 'SEO Setup'],
  },
  {
    name: 'Premium',
    price: 'PKR 34,999',
    features: ['Unlimited Pages', 'Advanced Branding', 'Full Marketing Setup', 'Priority Support'],
  },
]

export default function ServicesPage() {
  return (

    
    <section className="min-h-screen py-20 px-6 bg-gray-950 text-white">
    
     <ServiceHero />

      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h1>
        <p className="text-gray-400 text-lg text=black">
          Complete digital services to build, scale, and support your business online.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
        {services.map((service, i) => (
          <Link key={service.slug} href={`/${service.slug}`} className="group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-lg transition cursor-pointer flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-indigo-400">
                <FaCheckCircle className="text-green-500" />
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-1">{service.details}</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                {pkg.name} Package
              </h3>
              <p className="text-3xl font-bold text-white mb-4">{pkg.price}</p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6 flex-1">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-auto bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-xl font-medium transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
