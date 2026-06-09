import { motion } from 'framer-motion'
import { FaArrowRight, FaStar, FaHeart } from 'react-icons/fa'

const STUDENT_IMAGE = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop'

const programs = [
  { name: 'Play Group', emoji: '🧸', color: 'from-rose-400 to-pink-500', age: '1.5–2.5 yrs' },
  { name: 'Nursery',    emoji: '🎨', color: 'from-orange-400 to-amber-500', age: '2.5–3.5 yrs' },
  { name: 'Jr. KG',     emoji: '🚂', color: 'from-emerald-400 to-teal-500', age: '3.5–4.5 yrs' },
  { name: 'Sr. KG',     emoji: '🚀', color: 'from-sky-400 to-indigo-500', age: '4.5–5.5 yrs' },
]

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-24 pb-32">
      {/* Sky gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-200 via-pink-100 to-yellow-100" />

      {/* Big arched rainbow behind hero */}
      <svg
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1400px] max-w-none opacity-70 pointer-events-none"
        viewBox="0 0 800 400" fill="none"
      >
        {['#EF4444','#F97316','#FACC15','#22C55E','#3B82F6','#A855F7','#EC4899'].map((c,i)=>(
          <path key={c} d={`M ${60+i*14} 380 A ${340-i*14} ${340-i*14} 0 0 1 ${740-i*14} 380`} stroke={c} strokeWidth="14" strokeLinecap="round" />
        ))}
      </svg>

      {/* Floating clouds */}
      <motion.div animate={{ x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-16 left-6 sm:left-16 text-6xl select-none">☁️</motion.div>
      <motion.div animate={{ x: [0, -25, 0] }} transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-24 right-10 text-5xl select-none">☁️</motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-1/3 text-5xl select-none">☀️</motion.div>

      {/* Floating doodles */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-32 left-8 text-5xl">🎈</motion.div>
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-40 right-12 text-5xl">🎈</motion.div>
      <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-1/4 text-4xl">🌈</motion.div>

      <div className="relative z-10 container-main mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border-2 border-white shadow text-sm font-bold text-purple-700">
              <FaStar className="text-yellow-400" /> Admissions Open 2025–26
            </span>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              <span className="block text-slate-800">Where Little</span>
              <span className="block text-gradient">Rainbows</span>
              <span className="block text-slate-800">Begin to Shine</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 max-w-xl mx-auto lg:mx-0 font-medium">
              A happy, colorful world of learning for <b>Play Group</b>, <b>Nursery</b>,
              <b> Jr. KG</b> and <b>Sr. KG</b> — full of stories, songs, art and giggles 🌈✨
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a href="#admission" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="btn-rainbow inline-flex items-center gap-3">
                Register Now
                <span className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
                  <FaArrowRight className="text-white text-xs" />
                </span>
              </motion.a>
              <a href="#about" className="px-7 py-3.5 rounded-full bg-white border-2 border-purple-300 text-purple-700 font-bold shadow hover:shadow-lg transition">
                Take a Tour
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['#EF4444','#F97316','#FACC15','#22C55E','#3B82F6'].map(c => (
                  <span key={c} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-lg" style={{ background: c }}>
                    <FaHeart className="text-xs" />
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-700">Loved by 500+ happy families</p>
            </div>
          </motion.div>

          {/* Right image with rainbow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full rainbow-gradient blur-md opacity-70 animate-spin-slow" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src={STUDENT_IMAGE} alt="Happy kindergarten students" className="w-full h-full object-cover" />
              </div>
              {/* Floating badges */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-yellow-300">
                <div className="text-2xl">🎨</div>
                <p className="text-xs font-bold text-slate-700">Art & Craft</p>
              </motion.div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-pink-300">
                <div className="text-2xl">🎵</div>
                <p className="text-xs font-bold text-slate-700">Music & Dance</p>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-10 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-emerald-300">
                <div className="text-2xl">📚</div>
                <p className="text-xs font-bold text-slate-700">Story Time</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Program cards */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: -2 }}
              className={`relative rounded-3xl p-5 sm:p-6 text-white shadow-xl bg-gradient-to-br ${p.color} overflow-hidden`}
            >
              <div className="absolute -top-3 -right-3 text-6xl opacity-30">{p.emoji}</div>
              <div className="text-4xl mb-2">{p.emoji}</div>
              <h3 className="text-xl sm:text-2xl font-extrabold">{p.name}</h3>
              <p className="text-white/90 text-sm font-semibold">{p.age}</p>
              <div className="mt-3 h-1.5 w-12 rounded-full bg-white/60" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rainbow stripe divider */}
      <div className="absolute bottom-0 left-0 right-0 rainbow-bar" />
    </section>
  )
}
