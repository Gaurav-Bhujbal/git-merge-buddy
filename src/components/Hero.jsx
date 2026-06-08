import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowRight, FaGraduationCap } from 'react-icons/fa'

const STUDENT_IMAGE = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden bg-[#1B5E7E]">
      {/* Decorative doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stars */}
        <svg className="absolute top-8 right-12 w-12 h-12 text-white/80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"/>
        </svg>
        <svg className="absolute top-20 right-32 w-8 h-8 text-white/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"/>
        </svg>
        {/* Hearts */}
        <svg className="absolute top-32 right-16 w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="absolute bottom-40 right-24 w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="absolute bottom-20 right-8 w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        {/* Bird doodle */}
        <svg className="absolute bottom-32 right-4 w-16 h-16 text-white/40" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M10 30 Q25 10 40 30 Q55 50 70 30 Q85 10 95 20" />
          <path d="M40 30 L45 45 L50 30" />
        </svg>
        {/* Dots */}
        <div className="absolute top-16 right-48 w-3 h-3 rounded-full bg-white/50" />
        <div className="absolute top-24 right-40 w-2 h-2 rounded-full bg-white/40" />
        <div className="absolute bottom-48 right-12 w-2 h-2 rounded-full bg-white/30" />
      </div>

      <div className="relative z-10 h-full min-h-screen flex items-center container-main mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto">
          
          {/* Left Side - Student Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-[3rem] overflow-hidden bg-white/10 shadow-2xl">
                <img
                  src={STUDENT_IMAGE}
                  alt="Students"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -inset-3 rounded-[3.5rem] border-2 border-white/20 -z-10" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* School Header */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-[#1B5E7E]" />
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">Borcelle School</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-2 tracking-tight">
              OPEN
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-8 tracking-tight">
              ADMISSION
            </h1>

            {/* Academic Year */}
            <p className="text-white/90 text-lg sm:text-xl mb-10 font-medium">
              Academic Year 2024/2025
            </p>

            {/* CTA Button */}
            <motion.a
              href="#admission"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#1B5E7E] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-[#1B5E7E] flex items-center justify-center">
                <FaArrowRight className="text-white text-sm" />
              </span>
              REGISTER NOW
            </motion.a>

            {/* Website */}
            <p className="text-white/60 text-sm mt-6">
              www.reallygreatsite.com
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  )
}