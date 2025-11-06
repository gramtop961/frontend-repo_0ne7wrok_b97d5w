import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const events = [
  { title: 'Hackathon 2025', date: 'Dec 12, 2025', desc: '24-hour coding challenge hosted by Tech Innovators.' },
  { title: 'Cultural Night', date: 'Jan 10, 2026', desc: 'Dance, music, and drama performances by Cultural Club.' },
  { title: 'Sports Meet', date: 'Feb 05, 2026', desc: 'Inter-department tournaments and athletics.' }
]

export default function EventsPreview() {
  return (
    <section id="events" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Upcoming Events</h2>
            <p className="text-slate-600 mt-2">Don’t miss what’s happening around campus</p>
          </div>
          <a href="#events" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-blue-700">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <motion.div key={e.title} whileHover={{ y: -4 }} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-lg hover:shadow-blue-200/40 transition-all">
              <div className="flex items-center gap-2 text-blue-700">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-semibold">{e.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{e.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{e.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <a href="#events" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-blue-700">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
