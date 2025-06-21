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



import ServiceSection from '@/components/Service';

export const metadata = {
  title: 'Our Services | Webeasy-Tech',
  description: 'Explore our wide range of services — web development, SEO, Shopify, and digital marketing tailored for your business.',
  keywords: 'Web development, SEO, digital marketing, Shopify, online services',
  openGraph: {
    title: 'Our Services | Webeasy-Tech',
    description: 'Grow your business online with custom digital services from Webeasy-Tech.',
    url: 'https://webeasy-tech.vercel.app/services',
    type: 'website',
    images: ['/og-image.png'],
  },
};
 export default function ServicePage() {
   return <ServiceSection />
  ;
 }
 