// app/shopify-development/page.tsx
import ShopifyHero from '@/components/ShopifyHero';
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
   
    <section className="p-6 max-w-6xl mx-auto">
       <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left Content */}
        <div>
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        Shopify Store Development <br/>Fully customise shopify website theme and shopify maintenance
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

      <a
        href="https://wa.me/92XXXXXXXXXX"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Let&apos;s Build Your Store – WhatsApp Us
      </a>
      </div>
       <div className="w-full h-full flex justify-center items-center">
                <Image
                  src="/images/Web_design_Star_IT_Euro.png.webp" // replace this with your image path
                  alt="Web Template Preview"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              </div>
                  </section>
    </>
  );
}
