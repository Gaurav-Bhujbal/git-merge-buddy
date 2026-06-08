import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { events } from '../data/content'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Events() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4">
            Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Upcoming & <span className="text-gradient">Past Events</span>
          </h2>
        </motion.div>

        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
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
                      <div className="absolute top-4 left-4 glass bg-white/90 px-4 py-2 rounded-xl flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        <span className="text-sm font-bold text-slate-800">{event.date}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hidden md:flex">
            <FaArrowLeft />
          </button>
          <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hidden md:flex">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
