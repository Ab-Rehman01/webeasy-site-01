'use client'
import { motion } from 'framer-motion'

const pricing = [
    {
      name: 'Basic',
      price: 'Rs. 9,999',
      features: [
        '1 Page Professional Design',
        'Basic SEO Optimization',
        'Mobile-Responsive Layout',
        'Free SSL Setup',
        'Delivery: 3 Days',
      ],
      note: 'Ideal for landing pages or personal profiles.',
    },
    {
      name: 'Standard',
      price: 'Rs. 19,999',
      features: [
        'Up to 5 Pages (Home, About, Services, Contact, etc.)',
        'Advanced SEO Setup',
        'Custom Contact Form',
        '1 Year Free Domain & Hosting',
        'WhatsApp Integration',
        'Delivery: 5 Days',
      ],
      note: 'Best for startups, portfolios, or small businesses.',
    },
    {
      name: 'Premium',
      price: 'Rs. 34,999',
      features: [
        'Unlimited Pages',
        'Complete Brand Integration (Logos, Colors)',
        'Full E-Commerce Functionality (Cart, Checkout)',
        '1 Year Domain + Premium Hosting',
        'Payment Gateway Integration (COD / Online)',
        'Delivery: 7 Days',
      ],
      note: 'Perfect for full-scale business websites or online stores.',
    },
  ];
export function PricingPackages() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-20 max-w-6xl mx-auto"
>
  <h3 className="text-3xl font-bold text-center mb-12 text-white">Choose Your Plan</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {pricing.map((pkg, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="bg-gray-800 p-8 rounded-2xl text-center border border-gray-700 shadow-md hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition flex flex-col"
      >
        <h4 className="text-2xl font-semibold text-indigo-400 mb-2">{pkg.name}</h4>
        <div className="text-3xl font-bold mb-4 text-white">{pkg.price}</div>

        {/* Feature List with fixed height */}
        <ul className="text-gray-300 text-sm mb-6 space-y-2 min-h-[160px]">
          {pkg.features.map((f, idx) => (
            <li key={idx}>✔️ {f}</li>
          ))}
        </ul>

        {/* Note below feature list (optional) */}
        <p className="text-xs text-gray-400 italic mb-4">{pkg.note}</p>

        {/* Stick button to bottom */}
        <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-xl">
          Get Started
        </button>
      </motion.div>
    ))}
  </div>
</motion.div>

  )
}
