import { motion } from 'framer-motion'
import { FaChalkboardTeacher, FaLaptop, FaDesktop, FaRunning, FaBook, FaBus } from 'react-icons/fa'

const cards = [
  { title: 'Qualified Teachers', desc: 'Experienced educators trained in modern techniques.', icon: FaChalkboardTeacher, color: 'bg-blue-500', shadow: 'shadow-blue-200', text: 'text-blue-600' },
  { title: 'Smart Classrooms', desc: 'Interactive digital learning environments.', icon: FaLaptop, color: 'bg-purple-500', shadow: 'shadow-purple-200', text: 'text-purple-600' },
  { title: 'Computer Labs', desc: 'Well-equipped labs for digital literacy.', icon: FaDesktop, color: 'bg-indigo-500', shadow: 'shadow-indigo-200', text: 'text-indigo-600' },
  { title: 'Sports Facilities', desc: 'Indoor & outdoor sports for physical fitness.', icon: FaRunning, color: 'bg-green-500', shadow: 'shadow-green-200', text: 'text-green-600' },
  { title: 'Library', desc: 'Rich collection fostering reading habits.', icon: FaBook, color: 'bg-orange-500', shadow: 'shadow-orange-200', text: 'text-orange-600' },
  { title: 'Safe Transportation', desc: 'GPS-enabled vans with trained staff.', icon: FaBus, color: 'bg-red-500', shadow: 'shadow-red-200', text: 'text-red-600' },
]

export default function WhyChoose() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-secondary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The <span className="text-gradient">Rainbow</span> Advantage
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${card.shadow}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
