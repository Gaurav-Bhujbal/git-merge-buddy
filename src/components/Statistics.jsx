import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { FaUserGraduate, FaChalkboardTeacher, FaDoorOpen, FaTrophy } from 'react-icons/fa'
import { stats } from '../data/content'

const icons = [FaUserGraduate, FaChalkboardTeacher, FaDoorOpen, FaTrophy]

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (isInView) setStartCount(true)
  }, [isInView])

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-700 to-rainbow-purple" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div ref={ref} className="container-main mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl text-white mb-4">
                  <Icon />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {startCount ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
