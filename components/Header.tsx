'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaLanguage } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = {
    en: [
      { href: '#inicio', text: 'Home' },
      { href: '#sobre-mi', text: 'About Me' },
      { href: '#tecnologias', text: 'Technologies' },
      { href: '#proyectos', text: 'Projects' },
      { href: '#contacto', text: 'Contact' },
    ],
    es: [
      { href: '#inicio', text: 'Inicio' },
      { href: '#sobre-mi', text: 'Sobre Mí' },
      { href: '#tecnologias', text: 'Tecnologías' },
      { href: '#proyectos', text: 'Proyectos' },
      { href: '#contacto', text: 'Contacto' },
    ],
  }

  return (
    <header className="bg-[var(--color-bg)] shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-bold text-[var(--color-accent)]">IB</a>
          </motion.div>
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems[language].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.text}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleLanguage}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLanguage size={24} />
            </motion.button>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleLanguage}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300 mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLanguage size={24} />
            </motion.button>
            <button onClick={toggleMenu} className="text-[var(--color-text)] hover:text-[var(--color-accent)]">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            {menuItems[language].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300"
                onClick={toggleMenu}
              >
                {item.text}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header

