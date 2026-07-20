import profile from './data/profile'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <main className="min-h-screen bg-ink text-paper font-body">
      <Navbar />

      <Header profile={profile} />

      <Marquee items={profile.skills} />

      <About profile={profile} />
      <Skills items={profile.skills} />
      <Projects items={profile.projects} />
      <Experience items={profile.experience} />
      <Education items={profile.education} />
      <Achievements items={profile.achievements} />

      <Contact email={profile.contact.email} phone={profile.contact.phone} />
      <Footer contact={profile.contact} />

      <ScrollToTop />
    </main>
  )
}
