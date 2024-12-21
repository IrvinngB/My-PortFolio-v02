'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { language } = useLanguage()
  return (
    <section id="contacto" className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {language === 'en' ? 'Contact' : 'Contacto'}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <motion.a
            href="https://www.linkedin.com/in/irvin-benitez-11313231b/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300"
          >
            <FaLinkedin size={24} className="mr-2" />
            {language === 'en' ? 'LinkedIn' : 'LinkedIn'}
          </motion.a>
          <motion.a
            href="https://github.com/IrvinngB"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300"
          >
            <FaGithub size={24} className="mr-2" />
            {language === 'en' ? 'GitHub' : 'GitHub'}
          </motion.a>
          <motion.a
            href="mailto:Irvin.Benitezs.26@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-[var(--color-text)] hover:text-[var(--color-accent)] transition duration-300"
          >
            <FaEnvelope size={24} className="mr-2" />
            {language === 'en' ? 'Email' : 'Correo'}
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact

