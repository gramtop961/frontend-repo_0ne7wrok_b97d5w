import { LogIn, Calendar, Home, Users } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-blue-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold">CC</div>
          <span className="font-semibold tracking-tight text-slate-800">College Club</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <li>
            <a href="#home" className="hover:text-blue-700 transition-colors inline-flex items-center gap-2">
              <Home className="h-4 w-4" /> Home
            </a>
          </li>
          <li>
            <a href="#clubs" className="hover:text-blue-700 transition-colors inline-flex items-center gap-2">
              <Users className="h-4 w-4" /> Clubs
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-blue-700 transition-colors inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Events
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
          </li>
        </ul>
        <a href="#login" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-sm shadow-blue-500/30 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <LogIn className="h-4 w-4" /> Login
        </a>
      </nav>
    </header>
  )
}
