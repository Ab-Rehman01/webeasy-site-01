import AboutSection from "@/components/About";
export const metadata = {

  title: 'About Us | Webezee-Tech',
  description: 'Learn about Webeasy-Tech — your trusted partner for web development, Shopify stores, and digital marketing solutions.',
  keywords: 'About Webezee-Tech, company info, digital services, web agency',
  openGraph: {
    title: 'About Us | Webezee-Tech',
    description: 'Meet the experts behind your brand’s digital success. Webezee-Tech delivers top-tier development and marketing services.',
    url: 'https://webezee-tech.vercel.app/about',
    type: 'website',
    images: ['https://webezee-tech.vercel.app/og-image-v2.png'],
  },
};

export default function AboutPage() {
  return  <AboutSection />;
   
  
}
