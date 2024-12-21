import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

