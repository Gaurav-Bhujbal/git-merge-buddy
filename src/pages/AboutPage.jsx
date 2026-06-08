import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBullseye, FaEye, FaQuoteLeft, FaGraduationCap, FaHeart, FaStar, FaUsers } from 'react-icons/fa'
import { aboutContent, stats } from '../data/content'

const aboutHeroImages = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1400&auto=format&fit=crop'
]

const values = [
  { icon: FaGraduationCap, color: 'from-blue-500 to-indigo-600', label: 'Academic Excellence', desc: 'Rigorous curriculum designed to challenge and inspire every learner.' },
  { icon: FaHeart, color: 'from-pink-500 to-rose-600', label: 'Care & Nurture', desc: 'Every child is treated with warmth, respect, and individual attention.' },
  { icon: FaStar, color: 'from-amber-400 to-orange-500', label: 'Holistic Growth', desc: 'Sports, arts, and culture alongside academics for all-round development.' },
  { icon: FaUsers, color: 'from-green-500 to-teal-600', label: 'Community Spirit', desc: 'Building strong bonds between students, teachers, and families.' },
]

const timeline = [
  { year: '2010', title: 'School Founded', desc: 'Rainbow School was established under Atharva Social & Education Society in Shivane, Pune.' },
  { year: '2013', title: 'CBSE Affiliation', desc: 'Received recognition for following CBSE pattern curriculum for early childhood education.' },
  { year: '2017', title: 'New Campus Wing', desc: 'Expanded with smart classrooms, a science lab, and a dedicated activity hall.' },
  { year: '2020', title: 'Digital Classrooms', desc: 'Launched fully equipped digital smart boards across all classrooms.' },
  { year: '2024', title: 'Best Pre-School Award', desc: 'Honoured by Pune Education Society for excellence in early childhood education.' },
]

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutHeroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Hero */}
      <div className="relative h-96 md:h-[500px] lg:h-[550px] overflow-hidden bg-slate-900">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={aboutHeroImages[currentImageIndex]}
            alt="About Rainbow School"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur text-sm font-semibold mb-4">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">Rainbow School</span></h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">Nurturing young minds since 2010 in Shivane, Pune</p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-md">
        <div className="container-main mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-3xl font-bold text-primary">{s.value}{s.suffix}</p>
              <p className="text-sm text-slate-500 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/WhatsApp Image 2026-06-08 at 10.16.14 AM.jpeg"
                  alt="Rainbow School Campus"
                  className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:bottom-8 md:right-8 bg-white p-5 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-rainbow-orange flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Years of</p>
                    <p className="text-sm text-slate-600">Academic Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Welcome to <span className="text-gradient">Rainbow School</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">{aboutContent.intro}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-white shadow-lg border-l-4 border-rainbow-green">
                  <FaBullseye className="text-2xl text-rainbow-green mb-3" />
                  <h3 className="font-bold text-slate-800 mb-2">Our Mission</h3>
                  <p className="text-sm text-slate-600">{aboutContent.mission}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white shadow-lg border-l-4 border-rainbow-blue">
                  <FaEye className="text-2xl text-rainbow-blue mb-3" />
                  <h3 className="font-bold text-slate-800 mb-2">Our Vision</h3>
                  <p className="text-sm text-slate-600">{aboutContent.vision}</p>
                </div>
              </div>

              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-rainbow-purple/5 border border-primary/10">
                <FaQuoteLeft className="text-3xl text-primary/20 mb-2" />
                <p className="text-slate-700 italic mb-4">{aboutContent.principalMessage}</p>
                <div className="flex items-center gap-3">
                  <img src="/images/WhatsApp Image 2026-06-08 at 10.16.06 AM (1).jpeg" alt="Principal" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-900">Principal</p>
                    <p className="text-sm text-slate-500">Rainbow School, Shivane</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core <span className="text-gradient">Values</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 text-center border border-slate-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-2xl mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{v.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-main mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">Our History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our <span className="text-gradient">Journey</span></h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-rainbow-green hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all inline-block w-full">
                      <span className="text-xs font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">{item.year}</span>
                      <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs shrink-0 z-10 shadow-lg">
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Life at <span className="text-gradient">Rainbow School</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/WhatsApp Image 2026-06-08 at 10.16.14 AM.jpeg',
              '/images/WhatsApp Image 2026-06-08 at 10.16.05 AM.jpeg',
              '/images/WhatsApp Image 2026-06-08 at 10.16.06 AM (2).jpeg',
              '/images/WhatsApp Image 2026-06-08 at 10.16.07 AM (1).jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-md h-48 md:h-64"
              >
                <img src={src} alt={`School life ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
