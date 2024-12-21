'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      greeting: "Hi, my name is",
      role: "Software Developer",
      description: "I build exceptional digital experiences on the web",
      cta: "View My Work"
    },
    es: {
      greeting: "Hola, mi nombre es",
      role: "Desarrollador de Software",
      description: "Construyo experiencias digitales excepcionales en la web",
      cta: "Ver Mi Trabajo"
    }
  }

  return (
    <section id="inicio" className="hero h-screen flex flex-col justify-center items-center bg-[var(--color-bg)] text-[var(--color-text)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle text-[var(--color-accent)] mb-2"
        >
          {content[language].greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title text-5xl md:text-7xl font-bold mb-4 glitch"
        >
          Irvin Benitez
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-description text-3xl md:text-4xl mb-4 text-[var(--color-secondary)]"
        >
          {content[language].role}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-text text-xl mb-8"
        >
          {content[language].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-cta"
        >
          <motion.a
            href="#proyectos"
            className="cta-button bg-[var(--color-accent)] text-[var(--color-text)] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[var(--color-tertiary)] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content[language].cta}
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="scroll-down absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--color-text)] float"
        aria-label="Scroll to About Me section"
      >
        <FaChevronDown size={32} />
      </motion.a>
    </section>
  )
}

export default Hero

