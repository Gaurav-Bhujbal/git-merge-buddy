import { motion } from 'framer-motion'
import { FaFileAlt, FaClock } from 'react-icons/fa'

export default function NoticePage() {
  const notices = [
    {
      id: 1,
      title: "School Holiday Announcement",
      date: "June 8, 2024",
      content: "School will remain closed on June 15-16 for the annual festival. Classes will resume on June 17, 2024."
    },
    {
      id: 2,
      title: "Admission Open for 2024-2025",
      date: "June 1, 2024",
      content: "Admissions are now open for all classes. For more information and to apply, please visit our admission office or call +91 9011069127."
    },
    {
      id: 3,
      title: "Exam Schedule Released",
      date: "May 28, 2024",
      content: "Final exam schedule for all classes has been published. Download the schedule from the school portal or visit the office."
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Notice Board
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest <span className="text-gradient">Notices</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements and important notices from Rainbow School
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-amber-400"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 text-amber-600 text-xl">
                  <FaFileAlt />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {notice.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FaClock size={14} />
                    {notice.date}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {notice.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
