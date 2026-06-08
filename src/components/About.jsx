import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaQuoteLeft } from 'react-icons/fa'
import { aboutContent } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-main mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/WhatsApp Image 2026-06-05 at 1.46.01 PM.jpeg" 
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
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 glass bg-white/90 p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-rainbow-orange flex items-center justify-center text-white font-bold text-xl">
                  10+
                </div>
                <div>
                  <p className="font-bold text-slate-800">Years of</p>
                  <p className="text-sm text-slate-600">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
              About Our School
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Welcome to <span className="text-gradient">Rainbow School</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {aboutContent.intro}
            </p>

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
  )
}
