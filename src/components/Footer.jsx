import { Link } from 'react-router-dom'
import { HeartPulse, MapPin, Phone, Mail, Globe, MessageCircle, AtSign } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500"><HeartPulse size={24} /></span>
            <span className="font-heading text-xl font-bold">MediCare<span className="text-primary-300">+</span></span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-primary-100/70">Compassionate care, modern medicine, and a healthier tomorrow for every family.</p>
          <div className="mt-6 flex gap-3">
            {[Globe, MessageCircle, AtSign].map((Icon, index) => <a key={index} href="#social" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-800 text-primary-200 transition hover:border-primary-400 hover:bg-primary-800"><Icon size={16} /></a>)}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold">Quick Links</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-primary-100/70">
            <Link className="transition hover:text-white" to="/about">About Us</Link><Link className="transition hover:text-white" to="/services">Our Services</Link><Link className="transition hover:text-white" to="/doctors">Meet Our Doctors</Link><Link className="transition hover:text-white" to="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold">Our Services</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-primary-100/70"><span>General Medicine</span><span>Cardiology</span><span>Pediatrics</span><span>Dental Care</span></div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold">Contact Us</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm text-primary-100/70"><span className="flex gap-3"><MapPin className="shrink-0 text-primary-300" size={18} /> 123 Healthcare Ave, New York</span><span className="flex gap-3"><Phone className="shrink-0 text-primary-300" size={18} /> +1 (800) 555-0123</span><span className="flex gap-3"><Mail className="shrink-0 text-primary-300" size={18} /> hello@medicareplus.com</span></div>
        </div>
      </div>
      <div className="border-t border-primary-900"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-primary-100/50 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2024 MediCare+. All rights reserved.</span><span>Privacy Policy &nbsp; · &nbsp; Terms of Service</span></div></div>
    </footer>
  )
}

export default Footer
