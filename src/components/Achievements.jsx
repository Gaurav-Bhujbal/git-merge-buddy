import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa'
import { achievements } from '../data/content'

const icons = [FaTrophy, FaMedal, FaStar, FaAward]
const colors = ['text-yellow-500', 'text-blue-500', 'text-green-500', 'text-purple-500']
const bgColors = ['bg-yellow-50', 'bg-blue-50', 'bg-green-50', 'bg-purple-50']

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-slate-50">
      <div className="container-main mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our <span className="text-gradient">Pride</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rainbow-red via-rainbow-blue to-rainbow-purple md:-translate-x-px" />

          <div className="space-y-12">
            {achievements.map((item, idx) => {
              const Icon = icons[idx % icons.length]
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgColors[idx % bgColors.length]} ${colors[idx % colors.length]} text-sm font-bold mb-3`}>
                      <Icon /> {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-lg md:-translate-x-1/2 z-10" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
