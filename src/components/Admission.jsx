import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaComment, FaPaperPlane } from 'react-icons/fa'

export default function Admission() {
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    class: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.studentName.trim()) newErrors.studentName = 'Student name is required'
    if (!form.parentName.trim()) newErrors.parentName = 'Parent name is required'
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'Valid 10-digit mobile required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required'
    if (!form.class) newErrors.class = 'Please select a class'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setForm({ studentName: '', parentName: '', mobile: '', email: '', class: '', message: '' })
    }
  }

  const inputClass = (field) => `w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border ${errors[field] ? 'border-red-400' : 'border-white/30'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-500`

  return (
    <section id="admission" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-rainbow-purple" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

      <div className="container-main mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Apply for <span className="text-secondary">Admission</span>
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Give your child the gift of quality education. Admissions are now open for Play Group, Nursery, Junior KG, Senior KG, and 1st Standard. Limited seats available!
            </p>
            <div className="space-y-4">
              <div className="glass bg-white/10 p-4 rounded-xl flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-white/70">Call Us</p>
                  <p className="font-bold">+91 90110 69127</p>
                </div>
              </div>
              <div className="glass bg-white/10 p-4 rounded-xl flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-rainbow-green flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email Us</p>
                  <p className="font-bold">info@rainbowschoolpune.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass bg-white/95 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl space-y-5">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Form</h3>
              <p className="text-slate-500 text-sm mb-6">Fill in the details and our team will contact you shortly.</p>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Student Name" value={form.studentName} onChange={e => setForm({...form, studentName: e.target.value})} className={inputClass('studentName')} />
                {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
              </div>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Parent Name" value={form.parentName} onChange={e => setForm({...form, parentName: e.target.value})} className={inputClass('parentName')} />
                {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="tel" placeholder="Mobile Number" value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} className={inputClass('mobile')} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass('email')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="relative">
                <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select value={form.class} onChange={e => setForm({...form, class: e.target.value})} className={inputClass('class') + ' appearance-none'}>
                  <option value="">Select Class Applying For</option>
                  <option value="Play Group">Play Group</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Junior KG">Junior KG</option>
                  <option value="Senior KG">Senior KG</option>
                  <option value="1st Standard">1st Standard</option>
                </select>
                {errors.class && <p className="text-red-500 text-xs mt-1">{errors.class}</p>}
              </div>

              <div className="relative">
                <FaComment className="absolute left-4 top-4 text-slate-400" />
                <textarea placeholder="Message (Optional)" rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={inputClass('message') + ' pl-12 pt-3'} />
              </div>

              <button type="submit" className="w-full btn-secondary flex items-center justify-center gap-2 text-lg">
                <FaPaperPlane /> Submit Application
              </button>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-green-100 text-green-700 text-center font-semibold">
                  Application submitted successfully! We will contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
