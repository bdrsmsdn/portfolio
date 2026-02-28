import profile from './data/profile'
import Header from './components/Header'
import About from './components/About'
import Objective from './components/Objective'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import FloatingOrbs from './components/FloatingOrbs'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#FAFAF8] text-[#3B2F2F] font-sans">
      <FloatingOrbs />
      <CursorGlow />
      <div className="relative z-[2] max-w-4xl mx-auto px-6 py-16">
        <Header
          name={profile.name}
          role={profile.role}
          location={profile.location}
        />
        <About text={profile.about} />
        <Objective text={profile.objective} />
        <Experience items={profile.experience} />
        <Education items={profile.education} />
        <Achievements items={profile.achievements} />
        <Skills items={profile.skills} />
        <Projects items={profile.projects} />
        <Contact
          phone={profile.contact.phone}
          email={profile.contact.email}
          github={profile.contact.github}
          linkedin={profile.contact.linkedin}
        />

        <footer className="text-center text-sm opacity-50 mt-32">
          Made with love by Badra 🤎
        </footer>
      </div>
      <ScrollToTop />
    </main>
  )
}
