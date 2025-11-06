import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-16 h-72 w-72 bg-gradient-to-br from-blue-300/40 to-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 bg-gradient-to-br from-blue-200/50 to-blue-400/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Explore, Connect, and Lead with College Clubs
          </h1>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-xl">
            Discover communities that match your interests. Join cultural, technical, sports, and literary clubs. Grow your skills and make lasting friendships.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#clubs" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm shadow-blue-500/30 hover:bg-blue-700 transition-colors">
              Explore Clubs
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-blue-100 shadow-xl shadow-blue-200/40 bg-white">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1470&auto=format&fit=crop"
              alt="Campus life"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
