import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Webezee-Tech',
  description: 'Get in touch with Webeasy-Tech for project consultations, support, or general inquiries.',
  keywords: 'Contact Webezee-Tech, support, consultation, web project quote',
  openGraph: {
    title: 'Contact Us | Webezee-Tech',
    description: 'Have a project or question? Reach out to Webeasy-Tech today.',
    url: 'https://webezee-tech.vercel.app/contact',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

