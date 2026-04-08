import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Certifications from "../components/Certifications"
import Resume from "../components/Resume"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}
