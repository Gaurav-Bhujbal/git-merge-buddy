import { motion } from 'framer-motion'
import { FaShapes, FaPencilAlt, FaGraduationCap, FaRocket } from 'react-icons/fa'

const levels = [
  { title: 'Pre Primary', subtitle: 'Play Group & Nursery', desc: 'Activity-based learning focusing on motor skills, social development, and basic literacy through play.', icon: FaShapes, gradient: 'from-red-500 to-orange-500', border: 'group-hover:border-red-400' },
  { title: 'Primary', subtitle: 'Junior KG & Senior KG', desc: 'Structured curriculum blending academics with co-curricular activities, phonics, and abacus training.', icon: FaPencilAlt, gradient: 'from-yellow-500 to-green-500', border: 'group-hover:border-yellow-400' },
  { title: 'Secondary', subtitle: '1st Standard', desc: 'Comprehensive CBSE pattern education with emphasis on conceptual clarity and holistic growth.', icon: FaGraduationCap, gradient: 'from-blue-500 to-indigo-500', border: 'group-hover:border-blue-400' },
  { title: 'Higher Secondary', subtitle: 'Future Expansion', desc: 'Planning continuous growth up to higher secondary with specialized streams and career guidance.', icon: FaRocket, gradient: 'from-purple-500 to-pink-500', border: 'group-hover:border-purple-400' },
]

export default function Academics() {
  return (
    <section id="academics" className="section-padding bg-slate-50">
      <div className="container-main mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Academics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Academic <span className="text-gradient">Programs</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, idx) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`group relative p-8 rounded-3xl bg-white border-2 border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 ${level.border}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.gradient} text-white flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <level.icon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{level.title}</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4">{level.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{level.desc}</p>
              <button className="text-sm font-bold text-primary hover:text-secondary transition-colors flex items-center gap-2">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
