import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-slate-900">Starlight College of Engineering</h4>
            <p className="text-sm text-slate-600">Department of Student Activities</p>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a aria-label="Twitter" href="#" className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"><Twitter className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500 text-center sm:text-left">© {new Date().getFullYear()} Starlight College. All rights reserved.</p>
      </div>
    </footer>
  )
}
