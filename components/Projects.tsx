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
    {
      title: "Financial Control Project",
      description: "I developed a financial control web application using React, Supabase, and Next.js. The app allows users to manage their personal finances and includes a login and registration system that secures all user information. It also features interactive charts and various functionalities for efficient financial management.",
      link: "https://finance.irvin-benitez.software/"
    }
    ,
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
    {
      title: "Proyecto de Control Financiero",
      description: "Desarrollé una aplicación web de control financiero utilizando React, Supabase y Next.js. La aplicación permite gestionar finanzas personales e incluye un sistema de inicio de sesión y registro que protege toda la información de los usuarios. Además, cuenta con gráficos interactivos y diversas funcionalidades para un manejo eficiente de las finanzas.",
      link: "https://finance.irvin-benitez.software/"
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
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--color-card-bg)] rounded-lg p-8 min-h-[300px] flex flex-col justify-between shadow-lg border border-[var(--color-accent)]"
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
          </div>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-4">
            <motion.button
              onClick={prevProject}
              className="bg-[var(--color-accent)] text-[var(--color-text)] p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={language === 'en' ? 'Previous project' : 'Proyecto anterior'}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              onClick={nextProject}
              className="bg-[var(--color-accent)] text-[var(--color-text)] p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={language === 'en' ? 'Next project' : 'Siguiente proyecto'}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

