// app/shopify-development/page.tsx
import Faq from '@/components/Faq';
import ShopifyHero from '@/components/ShopifyHero';
import Testimonials from '@/components/Testimonials';
import { Metadata } from 'next';
import Image from 'next/image';



export const metadata: Metadata = {
  title: 'Shopify Development Services | Launch Your Online Store',
  description: 'Custom Shopify stores with theme setup, product upload, and full eCommerce support.',
};

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <ShopifyHero />

      <section className="w-full px-4 sm:px-6 md:px-8 py-12">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center mb-4">

          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Shopify Store Development <br />Fully customise shopify website theme and shopify maintenance
            </h1>
            <p className="text-lg mb-6">
              Launch a stunning Shopify store with full customization and functionality. Whether you want to revamp your existing Shopify website or want to start from scratch, UMW Media has got your back. Our expertise is in customizing a Shopify Websites, integrating Shopify apps and SEO optimization. With the experts from diversified backgrounds and the experience with multiple clients, we assure the successful execution of your business.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Our Services</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Theme Customization &amp; Setup</li>
              <li>Product Upload &amp; SEO Optimization</li>
              <li>Payment Gateway Integration</li>
              <li>App Integration (Reviews, Shipping, etc.)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Mobile-Friendly Design</li>
              <li>Complete eCommerce Solution</li>
              <li>Training &amp; Support</li>
              <li>We&apos;ll handle the tech so you don&apos;t have to</li>
            </ul>
            <div className="py-10 bg-green-600 text-white text-center rounded-lg mx-4 mt-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Need Help Setting Up Your Store?</h2>
              <p className="text-lg mb-6">Let our Shopify experts build, optimize, and launch your store the right way.</p>
              <a
                href="https://wa.me/92XXXXXXXXXX"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Free Consultation on WhatsApp
              </a>
            </div>
          </div>
          {/* Right Side Video */}
          <div className="w-full max-w-sm aspect-[9/16] mx-auto rounded-xl overflow-hidden shadow-xl ">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[500px] h-auto object-cover rounded-xl shadow-xl"
            >
              <source src="/video/5585988-hd_1080_1920_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <section className="py-10 bg-white text-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Store Transformations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Image src="/images/before.png" alt="Before Shopify Design" width={500} height={300} className="rounded-lg shadow" />
                <p className="text-center mt-2 text-sm">Before</p>
              </div>
              <div>
                <Image src="/images/after.png" alt="After Shopify Redesign" width={500} height={300} className="rounded-lg shadow" />
                <p className="text-center mt-2 text-sm">After</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex gap-4 items-center justify-center py-4">
          <Image src="/images/shopify.svg" alt="Shopify Expert" width={100} height={40} />
          <Image src="/images/code.png" alt="Liquid Theme" width={80} height={40} />
          <Image src="/images/seo-tag.svg" alt="SEO Optimized" width={90} height={40} />
        </div>


        <div className="py-12 bg-green-900 text-white text-center rounded-lg mt-12">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
          <Testimonials/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-6">
          

            <div className="bg-gray-800 p-4 rounded-xl shadow">
              <p className="italic text-gray-300">“They built my Shopify store in record time and helped with SEO. Sales went up 3x within weeks!”</p>
              <span className="block mt-3 text-green-400 font-semibold">– Ali R., Lahore</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow">
              <p className="italic text-gray-300">“Professional service and quick turnaround. Highly recommend their Shopify team.”</p>
              <span className="block mt-3 text-green-400 font-semibold">– Sana M., Karachi</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow">
              <p className="italic text-gray-300">“They built my Shopify store in record time and helped with SEO. Sales went up 3x within weeks!”</p>
              <span className="block mt-3 text-green-400 font-semibold">– Ali R., Lahore</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow">
              <p className="italic text-gray-300">“Professional service and quick turnaround. Highly recommend their Shopify team.”</p>
              <span className="block mt-3 text-green-400 font-semibold">– Sana M., Karachi</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow">
              <p className="italic text-gray-300">“They built my Shopify store in record time and helped with SEO. Sales went up 3x within weeks!”</p>
              <span className="block mt-3 text-green-400 font-semibold">– Ali R., Lahore</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow">
              <p className="italic text-gray-300">“Professional service and quick turnaround. Highly recommend their Shopify team.”</p>
              <span className="block mt-3 text-green-400 font-semibold">– Sana M., Karachi</span>
            </div>
          </div>

         </div>
         <Faq />
        <div className="text-center mt-10">
          <a href="https://wa.me/923242822577" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Start Your Shopify Project Today
          </a>
        </div>


      </section>
    </>
  );
}
