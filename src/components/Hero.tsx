'use client'

// src/components/Hero.tsx
// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-r from-blue-700 to-purple-800 p-12 rounded-3xl text-center my-10">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">Digital Solutions by Webeasy-Tech</h1>
//       <p className="text-lg md:text-xl mb-6">
//         Get websites, Shopify stores, marketing & software – All in one place.
//       </p>
//       <a
//         href="https://wa.me/+923242822577"
//         target="_blank"
//         className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
//       >
//         Join Our WhatsApp Community
//       </a>
//     </section>
//   )
// }


// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-r from-blue-700 to-purple-800 p-6 sm:p-10 md:p-16 rounded-3xl text-center my-10 mx-4 sm:mx-6 md:mx-10">
//       <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
//         Digital Solutions by Webeasy-Tech
//       </h1>
//       <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
//         Get websites, Shopify stores, marketing & software – All in one place.
//       </p>
//       <a
//         href="https://wa.me/+923242822577"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300"
//       >
//         Join Our WhatsApp Community
//       </a>
//     </section>
//   )
// }

// 'use client'
// import { motion } from 'framer-motion'

// export default function Hero() {
//   return (
//     <motion.section
//       initial={{ scale: 0.95, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.8, ease: 'easeOut' }}
//       className="bg-gradient-to-r from-blue-700 to-purple-800 min-h-[70vh] flex flex-col justify-center items-center p-6 sm:p-10 md:p-16 rounded-3xl text-center my-10 mx-4 sm:mx-6 md:mx-10"
//     >
//       <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
//         Digital Solutions by Webeasy-Tech
//       </h1>
//       <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
//         Get websites, Shopify stores, marketing & software – All in one place.
//       </p>
//       <a
//         href="https://wa.me/+923242822577"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300"
//       >
//         Join Our WhatsApp Community
//       </a>
//     </motion.section>
//   )
// }


// import { motion } from 'framer-motion'
// import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/852421-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Centered Text Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Websites, Stores & Digital Growth
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Launch your brand with custom websites, eCommerce stores, and powerful digital marketing — all with Webeasy-Tech.
        </p>
        <a
          href="https://wa.me/+923242822577"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300"
        >
          Get Free Consultation
        </a>
      </div>
    </section>
  );
}

      {/* Text Content */}
      {/* <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Websites, Stores & Digital Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-6">
          Launch your brand with custom websites, eCommerce stores, and powerful digital marketing — all with Webeasy-Tech.
        </p>
        <a
          href="https://wa.me/+923242822577"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300"
        >
          Get Free Consultation
        </a> */}
      {/* </div> */}

      {/* Image Section */}
      {/* <div className="w-full max-w-[900px]"> */}
  
  {/* <video autoPlay loop muted playsInline className="w-full h-screen object-cover">
  <source src="/video/852421-hd_1920_1080_30fps.mp4" type="video/mp4" />
</video> */}

  {/* <Image
    src="/programming-background-collage (3).jpg"
    alt="Web development illustration"
    width={900}
    height={600}
    className="w-full h-auto rounded-xl shadow-2xl"
  /> */}
{/* </div> */}
//   )
// }
