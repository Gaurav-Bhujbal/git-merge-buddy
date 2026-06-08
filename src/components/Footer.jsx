import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { schoolInfo } from '../data/content'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="h-2 w-full rainbow-gradient" />

      <div className="container-main mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/image.png" alt="Logo" className="w-12 h-12 rounded-full bg-white" />
              <div>
                <h3 className="text-xl font-bold">RAINBOW</h3>
                <p className="text-secondary text-sm font-semibold">SCHOOL</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering young minds with quality education and holistic development since 2010. A CBSE pattern school in Shivane, Pune.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Academics</h4>
            <ul className="space-y-3">
              {['Play Group', 'Nursery', 'Junior KG', 'Senior KG', '1st Standard'].map(item => (
                <li key={item}>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rainbow-green" /> {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <FaMapMarkerAlt className="text-secondary shrink-0 mt-1" />
                {schoolInfo.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <FaPhone className="text-secondary shrink-0" />
                <a href={`tel:+91${schoolInfo.phone[0]}`} className="hover:text-white transition-colors">
                  +91 {schoolInfo.phone[0]}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <FaEnvelope className="text-secondary shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition-colors">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Rainbow School. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
