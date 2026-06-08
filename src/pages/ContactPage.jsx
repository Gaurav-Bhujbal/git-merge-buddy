import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import { schoolInfo } from '../data/content'

const contactHeroImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop'
]

const faqs = [
  { q: 'What age groups do you admit?', a: 'We admit children from Play Group (age 2+) through 1st Standard (age 6–7).' },
  { q: 'What are the school timings?', a: 'School operates Monday to Friday, 8:00 AM to 1:00 PM for junior classes and up to 2:30 PM for senior classes.' },
  { q: 'Is school bus facility available?', a: 'Yes, we provide safe and GPS-tracked school bus services covering Shivane and nearby areas.' },
  { q: 'How can I apply for admission?', a: 'You can visit the school in person or fill the enquiry form below. Our admissions team will get back to you within 24 hours.' },
  { q: 'Do you offer any scholarships?', a: 'Yes, merit-based fee concessions are available for deserving students. Contact our office for details.' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % contactHeroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Hero */}
      <div className="relative h-96 md:h-[500px] lg:h-[550px] overflow-hidden bg-slate-900">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={contactHeroImages[currentImageIndex]}
            alt="Contact Rainbow School"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur text-sm font-semibold mb-4">
              Reach Out
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-green-300 to-yellow-300">
                Touch
              </span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              We'd love to hear from you. Reach us by phone, email, or stop by for a visit.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-main mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: FaMapMarkerAlt, color: 'from-blue-500 to-indigo-600', label: 'Address', value: schoolInfo.address },
              { icon: FaPhone, color: 'from-green-500 to-teal-600', label: 'Phone', value: schoolInfo.phone.map(p => `+91 ${p}`).join('\n') },
              { icon: FaEnvelope, color: 'from-purple-500 to-pink-600', label: 'Email', value: schoolInfo.email },
              { icon: FaClock, color: 'from-amber-400 to-orange-500', label: 'Timings', value: schoolInfo.timings },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white text-xl mx-auto mb-4`}>
                  <card.icon />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{card.label}</h3>
                <p className="text-slate-500 text-sm whitespace-pre-line leading-relaxed">{card.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
                <p className="text-slate-500 mb-8">Have a question or want to schedule a visit? We'll respond within 24 hours.</p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 font-semibold text-center">
                    ✅ Message sent! We'll get back to you soon.
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  <textarea
                    rows={5}
                    placeholder="Your Message *"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 justify-center">
                  <a
                    href={`https://wa.me/91${schoolInfo.phone[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors shadow-lg"
                  >
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </a>
                  <a
                    href={`tel:+91${schoolInfo.phone[0]}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-blue-800 transition-colors shadow-lg"
                  >
                    <FaPhone /> Call Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map + Social */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg h-80 bg-slate-200">
                <iframe
                  title="Rainbow School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Social */}
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                    <FaFacebook size={18} /> Facebook
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity">
                    <FaInstagram size={18} /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-slate-800 hover:text-primary transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className={`text-2xl font-light transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
