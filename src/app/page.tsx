// src/app/page.tsx
import Team from '@/components/Team'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ChatBot from '../components/ChatBot'
import WhatsAppButton from '@/components/WhatsappButton'
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <ChatBot />
      <WhatsAppButton />
    </>
  )
}
