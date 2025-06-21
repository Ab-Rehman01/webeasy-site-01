import AboutSection from "@/components/About";
export const metadata = {

  title: 'About Us | Webeasy-Tech',
  description: 'Learn about Webeasy-Tech — your trusted partner for web development, Shopify stores, and digital marketing solutions.',
  keywords: 'About Webeasy-Tech, company info, digital services, web agency',
  openGraph: {
    title: 'About Us | Webeasy-Tech',
    description: 'Meet the experts behind your brand’s digital success. Webeasy-Tech delivers top-tier development and marketing services.',
    url: 'https://webeasy-tech.vercel.app/about',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function AboutPage() {
  return  <AboutSection />;
   
  
}
