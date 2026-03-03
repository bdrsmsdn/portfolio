import profile from './data/profile'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import FloatingOrbs from './components/FloatingOrbs'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#050B18] text-[#CCD6F6] font-sans">
      {/* Background layers */}
      <div className="fixed inset-0 bg-grid-dots pointer-events-none" style={{ zIndex: 0 }} />
      <FloatingOrbs />
      <CursorGlow />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto px-6">
        <Header name={profile.name} location={profile.location} />

        <About text={profile.about} tagline={profile.tagline} />

        <Skills items={profile.skills} />

        <Projects items={profile.projects} />

        <Experience items={profile.experience} />

        <Education items={profile.education} />

        <Achievements items={profile.achievements} />

        <Contact email={profile.contact.email} />

        <footer className="text-center font-mono text-xs text-[#8892B0]/40 mt-10 pb-10">
          Designed &amp; Built by Badra Samsudin
        </footer>
      </div>

      <ScrollToTop />
    </main>
  )
}
