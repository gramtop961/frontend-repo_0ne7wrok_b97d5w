import { motion } from 'framer-motion'

const clubs = [
  {
    name: 'Cultural Club',
    category: 'Cultural',
    coordinator: 'Dr. A. Sharma',
    description: 'Celebrating diversity through dance, music, art, and festivals.',
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop'
  },
  {
    name: 'Tech Innovators',
    category: 'Technical',
    coordinator: 'Prof. R. Nair',
    description: 'Coding, hackathons, robotics, and cutting-edge projects.',
    logo: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1470&auto=format&fit=crop'
  },
  {
    name: 'Sports Society',
    category: 'Sports',
    coordinator: 'Coach S. Verma',
    description: 'From football to badminton — build fitness and team spirit.',
    logo: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1470&auto=format&fit=crop'
  },
  {
    name: 'Literary League',
    category: 'Literary',
    coordinator: 'Dr. P. Banerjee',
    description: 'Debates, poetry slams, book clubs, and creative writing.',
    logo: 'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1470&auto=format&fit=crop'
  }
]

function ClubCard({ club }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-blue-100 bg-white p-4 shadow-sm hover:shadow-lg hover:shadow-blue-200/40 transition-all"
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img src={club.logo} alt={club.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">{club.name}</h3>
          <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{club.category}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{club.description}</p>
        <p className="mt-3 text-xs text-slate-500">Coordinator: {club.coordinator}</p>
        <div className="mt-4">
          <a href="#clubs" className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-sm shadow-blue-500/30 hover:bg-blue-700">View More</a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ClubGrid() {
  return (
    <section id="clubs" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Clubs</h2>
            <p className="text-slate-600 mt-2">A glimpse of vibrant communities you can be part of</p>
          </div>
          <a href="#clubs" className="hidden sm:inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100">Browse all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubs.map((c) => (
            <ClubCard key={c.name} club={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
