import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClubGrid from './components/ClubGrid'
import EventsPreview from './components/EventsPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-inter text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <ClubGrid />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">About the Platform</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                The College Club Information System is your gateway to campus communities. Browse clubs, explore events, and apply for membership — all in one place.
              </p>
            </div>
          </div>
        </section>
        <EventsPreview />
        <section id="login" className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold">Admin & Member Access</h3>
                <p className="mt-3 text-slate-600">Sign in to manage clubs, events, leaders, and announcements or to apply for memberships and track your participation.</p>
              </div>
              <div className="rounded-2xl backdrop-blur bg-white/60 border border-blue-100 p-6 shadow-lg">
                <form className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white px-3 py-2" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Password</label>
                    <input type="password" className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white px-3 py-2" placeholder="••••••••" />
                  </div>
                  <button type="button" className="mt-2 inline-flex justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-white font-semibold shadow-sm hover:bg-blue-700">Sign In</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
