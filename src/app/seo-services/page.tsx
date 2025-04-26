// app/seo-services/page.tsx
// import { Metadata } from 'next';
// import SEOServiceCard from '@/components/SEOServiceCard';

// export const metadata: Metadata = {
//   title: 'SEO Services | Rank Higher on Google',
//   description: 'Boost your website’s visibility with our expert SEO services, including audits, on-page SEO, and link building.',
// };

// const seoServices = [
//   {
//     title: 'SEO Audit',
//     description: 'Comprehensive website SEO audit to identify issues and improve rankings.',
//     slug: 'seo-audit',
//   },
//   {
//     title: 'On-Page SEO',
//     description: 'Optimize your content, meta tags, and structure for better visibility.',
//     slug: 'on-page-seo',
//   },
//   {
//     title: 'Off-Page SEO & Backlinks',
//     description: 'Build quality backlinks and improve your domain authority.',
//     slug: 'off-page-seo',
//   },
// ];

// export default function SEOServicesPage() {
//   return (
//     <section className="max-w-6xl mx-auto p-6">
//       <h1 className="text-4xl font-bold text-green-500 mb-6">Our SEO Services</h1>
//       <div className="grid md:grid-cols-3 gap-6">
//         {seoServices.map(service => (
//           <SEOServiceCard key={service.slug} {...service} />
//         ))}
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { FaSearch, FaGlobe, FaTools, FaChartLine } from 'react-icons/fa';
import Head from 'next/head';
import { motion } from 'framer-motion';

const seoServices = [
  {
    icon: FaSearch,
    title: 'On-Page SEO',
    desc: 'Optimize your website s content, headings, meta tags, and structure to rank higher in search engines and attract quality traffic.',
  },
  {
    icon: FaGlobe,
    title: 'Off-Page SEO',
    desc: 'Boost your site authority through quality backlinks, directory submissions, guest posts, and social signals to improve rankings.',
  },
  {
    icon: FaTools,
    title: 'Technical SEO',
    desc: 'Improve website speed, mobile performance, crawlability, schema markup, and fix indexing errors for better visibility.',
  },
  {
    icon: FaChartLine,
    title: 'SEO Audit & Strategy',
    desc: 'Comprehensive website SEO audit, competitor analysis, and personalized strategy to grow organic traffic.',
  },
];

const packages = [
  {
    name: 'Starter SEO',
    price: 'PKR 8,999 /mo',
    features: [
      '5 Keyword Optimization',
      'On-Page SEO Only',
      '1 SEO Report / Month',
      'Basic Audit & Suggestions',
    ],
  },
  {
    name: 'Business SEO',
    price: 'PKR 18,999 /mo',
    features: [
      '20 Keyword Optimization',
      'On & Off Page SEO',
      'Monthly SEO Reports',
      'Speed & Technical Optimization',
    ],
  },
  {
    name: 'Premium SEO',
    price: 'PKR 34,999 /mo',
    features: [
      '50+ Keyword Targeting',
      'Advanced Technical SEO',
      'Link Building & Guest Posting',
      'Dedicated SEO Consultant',
    ],
  },
];

export default function SeoServicesPage() {
  return (
    <>
      <Head>
        <title>SEO Services | Boost Google Rankings</title>
        <meta
          name="description"
          content="SEO services that help your business rank higher, attract more visitors, and increase conversions."
        />
      </Head>

      <section className="bg-gray-950 text-white px-6 py-20 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Best SEO Services in Pakistan
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Drive more traffic, increase conversions, and grow your brand visibility with our expert SEO strategies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {seoServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-indigo-600/40 transition"
            >
              <div className="text-4xl text-indigo-500 mb-4 flex justify-center">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-300 text-center text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our SEO */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our SEO Services?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            We go beyond basic SEO. Our approach is data-driven, scalable, and personalized to your brand. Whether you re a startup or enterprise, we deliver measurable results through ethical SEO practices that last.
          </p>
          <ul className="text-left text-gray-300 text-sm space-y-2 max-w-md mx-auto">
            <li>✔ 100% White Hat Techniques</li>
            <li>✔ Proven Track Record in Pakistan & Global Markets</li>
            <li>✔ Detailed Reporting & Transparent Work</li>
            <li>✔ Dedicated SEO Experts & Real Growth Strategy</li>
          </ul>
        </div>

        {/* Pricing Packages */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">SEO Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 transition flex flex-col h-full"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">{pkg.name}</h3>
                <p className="text-3xl font-bold text-white mb-4">{pkg.price}</p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6 flex-1">
                  {pkg.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>
                <button className="mt-auto bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-xl font-medium transition">
                  Start Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
