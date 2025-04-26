// app/shopify-development/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Development Services | Launch Your Online Store',
  description: 'Custom Shopify stores with theme setup, product upload, and full eCommerce support.',
};

export default function ShopifyDevelopmentPage() {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        Shopify Store Development
      </h1>
      <p className="text-lg mb-6">
        Launch a stunning Shopify store with full customization and functionality.
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
    </section>
  );
}
