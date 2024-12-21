'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const projects = {
  en: [
    {
      title: 'WhatsApp Chat Bot',
      description: 'I developed a custom WhatsApp bot with the ability to provide intelligent responses using the Gemini AI API.',
      link: 'https://github.com/IrvinngB/Bot-WhatsApp',
    },
    {
      title: 'Registration Form',
      description: 'I developed a payroll management form using a local database for data entry, updating, deletion, and querying.',
      link: 'https://github.com/IrvinngB/DS-Project1',
    },
    {
      title: 'Landing Webpage',
      description: 'Developed a clean and modern landing page, focusing on user engagement and responsive design.',
      link: 'https://irvinngb.github.io/Pagina-Aterrizaje/',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Focused on the creation of APIs, as well as the improvement and correction of existing ones, ensuring the security of the platform.',
      link: 'https://proyecto-ds-5.vercel.app/',
    },
    {
      title: 'Logo Design',
      description: 'I designed a professional logo for a small enterprise using Adobe Illustrator, ensuring high-quality visuals and brand consistency.',
      link: 'https://1drv.ms/i/s!AgN8o_IyATYClSIdFLCbUohwfi_f?e=6TXtO3',
    },
    {
      title: 'Banner Design',
      description: 'I designed a professional banner for a small enterprise using Adobe Photoshop, ensuring high-quality visuals and brand consistency.',
      link: 'https://1drv.ms/i/s!AgN8o_IyATYClSVKWRYP-BzbX1Ec?e=RCjO8k',
    },
    {
      title: 'Advertising Spot',
      description: 'I created a short but concise advertising spot, ensuring clear and effective communication of the brand\'s message.',
      link: 'https://1drv.ms/u/s!AgN8o_IyATYClSPJywRJp_V4M3eH?e=RJjG11',
    },
    {
      title: 'Statistics Project',
      description: 'Developed a comprehensive web page for statistical analysis using Jupyter Notebook, Python, HTML, and CSS. This project enhances data visualization and provides insightful analysis.',
      link: 'https://examen-estadistica.vercel.app/',
    },
  ],
  es: [
    {
      title: 'Bot de WhatsApp',
      description: 'Desarrollé un bot personalizado de WhatsApp con la capacidad de proporcionar respuestas inteligentes utilizando la API de Gemini AI.',
      link: 'https://github.com/IrvinngB/Bot-WhatsApp',
    },
    {
      title: 'Formulario de Registro',
      description: 'Desarrollé un formulario de gestión de nóminas utilizando una base de datos local para la entrada, actualización, eliminación y consulta de datos.',
      link: 'https://github.com/IrvinngB/DS-Project1',
    },
    {
      title: 'Página de Aterrizaje',
      description: 'Desarrollé una página de aterrizaje limpia y moderna, centrándome en la participación del usuario y el diseño responsivo.',
      link: 'https://irvinngb.github.io/Pagina-Aterrizaje/',
    },
    {
      title: 'Plataforma de Comercio Electrónico',
      description: 'Me enfoqué en la creación de APIs, así como en la mejora y corrección de las existentes, garantizando la seguridad de la plataforma.',
      link: 'https://proyecto-ds-5.vercel.app/',
    },
    {
      title: 'Diseño de Logo',
      description: 'Diseñé un logo profesional para una pequeña empresa utilizando Adobe Illustrator, asegurando visuales de alta calidad y consistencia de marca.',
      link: 'https://1drv.ms/i/s!AgN8o_IyATYClSIdFLCbUohwfi_f?e=6TXtO3',
    },
    {
      title: 'Diseño de Banner',
      description: 'Diseñé un banner profesional para una pequeña empresa utilizando Adobe Photoshop, asegurando visuales de alta calidad y consistencia de marca.',
      link: 'https://1drv.ms/i/s!AgN8o_IyATYClSVKWRYP-BzbX1Ec?e=RCjO8k',
    },
    {
      title: 'Spot Publicitario',
      description: 'Creé un spot publicitario corto pero conciso, asegurando una comunicación clara y efectiva del mensaje de la marca.',
      link: 'https://1drv.ms/u/s!AgN8o_IyATYClSPJywRJp_V4M3eH?e=RJjG11',
    },
    {
      title: 'Proyecto de Estadísticas',
      description: 'Desarrollé una página web integral para análisis estadístico utilizando Jupyter Notebook, Python, HTML y CSS. Este proyecto mejora la visualización de datos y proporciona un análisis perspicaz.',
      link: 'https://examen-estadistica.vercel.app/',
    },
  ],
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[language].length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects[language].length) % projects[language].length)
  }

  return (
    <section id="proyectos" className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-accent)]"
        >
          {language === 'en' ? 'Projects' : 'Proyectos'}
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--color-card-bg)] rounded-lg p-8 h-64 flex flex-col justify-between shadow-lg border border-[var(--color-accent)]"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">{projects[language][currentIndex].title}</h3>
                <p className="text-[var(--color-text)] mb-4">{projects[language][currentIndex].description}</p>
              </div>
              <motion.a
                href={projects[language][currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--color-accent)] text-[var(--color-text)] px-6 py-2 rounded hover:bg-[var(--color-tertiary)] transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'View Project' : 'Ver Proyecto'}
              </motion.a>
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevProject}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-text)] p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-text)] p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Projects

