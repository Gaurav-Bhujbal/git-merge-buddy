import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa'
import { events } from '../data/content'

const eventHeroImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1400&auto=format&fit=crop'
]

const upcomingEvents = [
  {
    date: '15 Aug 2025',
    title: 'Independence Day Celebration',
    time: '8:00 AM – 11:00 AM',
    venue: 'School Ground',
    color: 'from-orange-400 to-red-500',
  },
  {
    date: '05 Sep 2025',
    title: "Teachers' Day Special",
    time: '9:00 AM – 12:00 PM',
    venue: 'Main Auditorium',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    date: '14 Nov 2025',
    title: "Children's Day Carnival",
    time: 'All Day',
    venue: 'School Campus',
    color: 'from-pink-400 to-rose-500',
  },
  {
    date: '20 Dec 2025',
    title: 'Annual Gathering 2025',
    time: '5:00 PM – 9:00 PM',
    venue: 'Community Hall, Shivane',
    color: 'from-amber-400 to-orange-500',
  },
]

export default function EventsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % eventHeroImages.length)
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
            src={eventHeroImages[currentImageIndex]}
            alt="School Events"
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
              School Life
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300">
                Events
              </span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Celebrating milestones, learning through experience, and building memories
            </p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-main mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              2025–26 Calendar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {upcomingEvents.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`h-3 bg-gradient-to-r ${ev.color}`} />
                <div className="p-6">
                  <div className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${ev.color} text-white mb-4`}>
                    <FaCalendarAlt /> {ev.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary transition-colors">
                    {ev.title}
                  </h3>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-primary shrink-0" />
                      {ev.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-secondary shrink-0" />
                      {ev.venue}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4">
              Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Past <span className="text-gradient">Events</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group h-full"
              >
                <div className="h-full rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 glass bg-white/90 px-4 py-2 rounded-xl flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      <span className="text-sm font-bold text-slate-800">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-rainbow-purple">
        <div className="container-main mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to be Part of Our Events?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Enrol your child at Rainbow School and be part of a vibrant, joyful learning community.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-yellow-100 transition-all shadow-xl hover:-translate-y-1"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
