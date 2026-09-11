import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeartPulse, Menu, X, CalendarDays, ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/20">
            <HeartPulse size={24} strokeWidth={2.4} />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-primary-950">MediCare<span className="text-primary-600">+</span></span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/appointment" className="flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
            <CalendarDays size={17} /> Book Appointment <ArrowRight size={16} />
          </Link>
        </div>

        <button type="button" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden">
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-3 text-sm font-semibold ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/appointment" onClick={() => setIsOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white">
            <CalendarDays size={17} /> Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
