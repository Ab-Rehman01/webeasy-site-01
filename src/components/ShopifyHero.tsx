"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ShopifyHero = () => {
  return (
<section className="w-full bg-blue-500 dark:bg-blue-900 py-20 px-0">
<div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-12">

        {/* Left Content */}
        <motion.div
          className="w-full max-w-xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Build Your Dream  Shopify Website Design Services in Pakistan<br /> <span className="text-purple-600">Shopify Store</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Launch a stunning online shop with modern design, fast performance, and seamless checkout.
          </p>
          <Link href="#get-started" className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition">
            
              Get Started
            
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/Shopify-website-design-Choose-theme.webp" // Place an image in /public
            alt="Shopify Store Hero Image"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShopifyHero;
