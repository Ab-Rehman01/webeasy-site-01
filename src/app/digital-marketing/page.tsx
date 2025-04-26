// app/digital-marketing/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, Ads & Social Growth',
  description: 'Grow your business online with SEO, Google Ads, WhatsApp Campaigns, and Social Media Marketing.',
};

export default function DigitalMarketingPage() {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Digital Marketing Services</h1>
      <p className="text-lg mb-6">
        We help your brand grow through powerful digital marketing strategies and campaigns.
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Marketing Services</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Search Engine Optimization (SEO)</li>
            <li>Google Ads & Remarketing</li>
            <li>WhatsApp Bulk Campaigns</li>
            <li>Social Media Management</li>
            <li>Content Strategy & Posting</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Why Work With Us?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>ROI-Focused Strategies</li>
            <li>Real Engagement</li>
            <li>Proven Results</li>
          </ul>

          <a
            href="https://wa.me/923242822577"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Start Marketing Today – Chat on WhatsApp
          </a>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-full flex justify-center items-center">
          <Link href="/your-internal-page" className="block">
          
          <Image
            src="/images/WhatsApp Image.jpg" // replace with actual path
            alt="Web Template Preview"
            width={350}
            height={150}
            className="rounded-xl shadow-lg"
          />
          </Link>
        </div>
      </div>
    </section>
  );
}
