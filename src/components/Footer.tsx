// src/components/Footer.tsx
import {
  Facebook,
  Github,
  Instagram,
  Linkedin
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">© 2025 Webeasy-Tech. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Linkedin className="w-5 h-5 inline-block mr-1" /> LinkedIn
          </a>
          <a href="https://github.com/Ab-Rehman01" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Github className="w-5 h-5 inline-block mr-1" /> GitHub
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Instagram className="w-5 h-5 inline-block mr-1" /> Instagram
          </a>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Facebook className="w-5 h-5 inline-block mr-1" /> Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
