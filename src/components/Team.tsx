'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Ali Raza',
    role: 'Founder & CEO',
    image: '/team/ceo.jpg',
  },
  {
    name: 'Sara Khan',
    role: 'Digital Marketing Expert',
    image: '/team/marketer.jpg',
  },
  {
    name: 'Hamza Sheikh',
    role: 'Shopify Specialist',
    image: '/team/shopify.jpg',
  },
  {
    name: 'Hina Iqbal',
    role: 'UI/UX Designer',
    image: '/team/uiux.jpg',
  },
  {
    name: 'Faisal Malik',
    role: 'Web Developer',
    image: '/team/158171475.jpeg',
  },
  {
    name: 'Ayesha Noor',
    role: 'Support Manager',
    image: '/team/support.jpg',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:shadow-lg transition"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
