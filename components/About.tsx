'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Me",
      description: "I am a passionate software developer with a keen eye for creating innovative and efficient digital solutions. With expertise in both front-end and back-end technologies, I specialize in building robust, scalable applications that meet the evolving needs of modern businesses. My approach combines creative problem-solving with a deep understanding of software architecture, ensuring that each project I undertake is not just functional, but also forward-thinking and user-centric. I thrive on challenges and continuously expand my skill set to stay at the forefront of technological advancements in the ever-changing landscape of software development."
    },
    es: {
      title: "Sobre Mí",
      description: "Soy un desarrollador de software apasionado con un ojo agudo para crear soluciones digitales innovadoras y eficientes. Con experiencia tanto en tecnologías front-end como back-end, me especializo en construir aplicaciones robustas y escalables que satisfacen las necesidades evolutivas de las empresas modernas. Mi enfoque combina la resolución creativa de problemas con una comprensión profunda de la arquitectura de software, asegurando que cada proyecto que emprendo no solo sea funcional, sino también visionario y centrado en el usuario. Prospero con los desafíos y continuamente expando mi conjunto de habilidades para mantenerme a la vanguardia de los avances tecnológicos en el panorama siempre cambiante del desarrollo de software."
    }
  }

  return (
    <section id="sobre-mi" className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--color-accent)]"
        >
          {content[language].title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-[var(--color-text)] text-center max-w-3xl mx-auto leading-relaxed"
        >
          {content[language].description}
        </motion.p>
      </div>
    </section>
  )
}

export default About

