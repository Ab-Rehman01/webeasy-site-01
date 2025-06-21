import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Webeasy-Tech',
  description: 'Get in touch with Webeasy-Tech for project consultations, support, or general inquiries.',
  keywords: 'Contact Webeasy-Tech, support, consultation, web project quote',
  openGraph: {
    title: 'Contact Us | Webeasy-Tech',
    description: 'Have a project or question? Reach out to Webeasy-Tech today.',
    url: 'https://webeasy-tech.vercel.app/contact',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

