import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import { schoolInfo } from '../data/content'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Notice', href: '/notice' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3"
    >
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shadow-md">
            <img src="/images/image.png" alt="Rainbow School Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold leading-tight text-primary">
              RAINBOW
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-wider text-secondary">
              SCHOOL
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-primary bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:text-primary hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:+91${schoolInfo.phone[0]}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <FaPhone className="text-secondary" />
            +91 {schoolInfo.phone[0]}
          </a>
          <Link to="/contact" className="btn-primary text-sm">
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-primary"
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      active
                        ? 'text-primary bg-blue-50 font-semibold'
                        : 'text-slate-700 hover:text-primary hover:bg-blue-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full btn-primary text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
