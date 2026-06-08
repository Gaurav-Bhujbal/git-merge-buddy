import { useState } from 'react'
import { motion } from 'framer-motion'
import { facilities } from '../data/content'

export default function Facilities() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            World-Class <span className="text-gradient">Infrastructure</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${hovered === idx ? 'scale-110' : 'scale-100'}`}
                  loading="lazy"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hovered === idx ? 'opacity-100' : 'opacity-70'}`} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{facility.name}</h3>
                <p className={`text-white/80 text-sm transition-all duration-300 ${hovered === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  State-of-the-art {facility.name.toLowerCase()} for enhanced learning experiences.
                </p>
              </div>
              <div className={`absolute inset-0 border-4 border-white/0 rounded-3xl transition-all duration-300 ${hovered === idx ? 'border-white/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]' : ''}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
