"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "EN" | "ES"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  EN: {
    "nav.download": "Download PDF Resume",
    "hero.greeting": "I'm Luis Guillermo Gallegos Ortiz",
    "hero.role": "ICT Engineer",
    "hero.description": "I am a person passionate about technology and continuous learning. I consider myself self-taught and enjoy acquiring new knowledge in my free time, especially in areas related to technology. I am always motivated to grow both personally and professionally. In addition, I enjoy practicing sports and exercising, which helps me maintain a healthy balance between mind and body",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "about.title": "About Me",
    "about.exp": "Years of experience",
    "about.clients": "Happy Clients",
    "about.projects": "Project Completed",
    "about.lang": "Language",
    "about.lang.en": "English",
    "about.lang.es": "Spanish (Native)",
    "about.desc": "Systems Developer driven by technological progress with solid experience in migrating legacy systems to web environments and restructuring databases. ICT Engineer focused on continuous improvement and adopting the latest tools to solve complex technological challenges. Committed to continuous learning to implement efficient technological solutions that add value.",
    "experience.title": "Experience",
    "experience.type.part-time": "part-time",
    "experience.type.fulltime": "fulltime",
    "education.title": "Education",
    "skills.title": "Skills",
    "exp.1.title": "IT Intern (Systems Department)",
    "exp.1.desc": "Developed web applications using Full-Stack methodologies with PHP, Bootstrap, CSS, JavaScript, and MySQL.\n• Assisted in server administration, backup management, and Active Directory configuration.\n• Provided technical support for computer equipment and institutional networks (PC assembly and UTP cable crimping).",
    "exp.2.title": "Solutions Architect",
    "exp.2.desc": "• Led the development and support of web applications (PHP, JavaScript, Bootstrap, MySQL) focused on new product innovation.\n• Developed and integrated the distributor website and an internal CRM, connecting them to Microsoft Dynamics Navision using SQL Server and Power BI for dynamic reporting and queries.\n• Optimized the corporate website in WordPress and PHP, improving SEO positioning, loading speed, and overall functionality.\n• Managed servers, backup policies, and Active Directory, in addition to providing IT technical support",
    "exp.3.desc": "Maintain and optimize legacy systems in Delphi 5 and 7. Perform analysis, monitoring, and refactoring of the current structure to guarantee the institution's operational continuity.\n• Analyze and debug data using Firebird (IBExpert) to detect discrepancies and optimize internal processes.\n• Implement Python (Pandas, NumPy, Matplotlib) to improve and automate data analysis and visualization.\n• Lead the migration of the legacy system (Delphi) to a modern web architecture using Next.js and TypeScript.\n• Implement development best practices, integrating version control (Git/GitHub), containerization (Docker), and API testing (Postman)",
    "exp.4.title": "Team Lead Designer",
    "exp.4.desc": "Release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software",
    "edu.1.title": "Conalep III Aguascalientes",
    "edu.1.desc": "Electromechanical Technician.",
    "edu.2.title": "Instituto Tecnológico de Aguascalientes - 2015-2015",
    "edu.2.desc": "B.S. in Information and Communication Technologies Engineering.",
    "edu.3.title": "udemy - 2020 +",
    "edu.3.desc": "Full-Stack with Python and Django, React & TypeScript, Next.js, Python for AI Development",
  },
  ES: {
    "nav.download": "Descargar CV en PDF",
    "hero.greeting": "Soy Luis Guillermo Gallegos Ortiz",
    "hero.role": "Ingeniero en TIC",
    "hero.description": "Soy una persona apasionada por la tecnología y el aprendizaje continuo. Me considero autodidacta y disfruto adquirir nuevos conocimientos en mi tiempo libre, especialmente en temas relacionados con la tecnología. Me gusta mantenerme en constante desarrollo personal y profesional. Además, disfruto practicar deportes y realizar ejercicio, lo que me ayuda a mantener un equilibrio entre la mente y el cuerpo.",
    "contact.email": "Correo",
    "contact.phone": "Teléfono",
    "about.title": "Sobre Mí",
    "about.exp": "Años de experiencia",
    "about.clients": "Clientes Felices",
    "about.projects": "Proyectos Completados",
    "about.lang": "Idiomas",
    "about.lang.en": "Inglés",
    "about.lang.es": "Español (Nativo)",
    "about.desc": "Desarrollador de Sistemas orientado al progreso tecnológico con experiencia sólida en migración de sistemas heredados a entornos web y reestructuración de bases de datos. Ingeniero en TIC enfocado en la mejora continua y en adoptar las herramientas más actuales para resolver desafíos tecnológicos complejos. Comprometido con el aprendizaje continuo para implementar soluciones tecnológicas eficientes que aporten valor.",
    "experience.title": "Experiencia",
    "experience.type.part-time": "Medio Tiempo",
    "experience.type.fulltime": "Tiempo Completo",
    "education.title": "Educación",
    "skills.title": "Habilidades",
    "exp.1.title": "Becario (Residencias - Área de Sistemas) ",
    "exp.1.desc": "• Desarrollé aplicaciones web utilizando metodologías Full-Stack con PHP, Bootstrap, CSS, JavaScript y MySQL.\n• Apoyé en la administración de servidores, gestión de respaldos y configuración del Directorio Activo.\n• Brindé soporte técnico a equipos de cómputo y redes institucionales (armado de equipos y ponchado de cable UTP).",
    "exp.2.title": "Arquitecto de Soluciones ",
    "exp.2.desc": "• Lideré el desarrollo y soporte de aplicaciones web (PHP, JavaScript, Bootstrap, MySQL) orientadas a la innovación de nuevos productos.\n• Desarrollé e integré el sitio web para distribuidores y un CRM interno, conectándolos a Microsoft Dynamics Navisión mediante SQL Server y Power BI para la generación de reportes y consultas dinámicas.\n• Optimicé el sitio web corporativo en WordPress y PHP, mejorando el posicionamiento SEO, la velocidad de carga y la funcionalidad general.\n• Administré servidores, políticas de respaldos y el Directorio Activo, además de brindar soporte técnico a equipos de cómputo.",
    "exp.3.title": "Desarrollador de Sistemas y Analista de Datos",
    "exp.3.desc": "• Mantenimiento y optimización de sistemas heredados (legacy) en Delphi 5 y 7. Realizo análisis, monitoreo y refactorización de la estructura actual para garantizar la continuidad operativa de la institución.\n• Análisis y depuración de datos utilizando Firebird (IBExpert) para detectar discrepancies y optimizar procesos internos.\n• Implementé el uso de Python (Pandas, NumPy, Matplotlib) para mejorar y automatizar el análisis y la visualización de la información.\n• Lidero la migración del sistema legacy (Delphi) hacia una arquitectura web moderna utilizando Next.js y TypeScript.\n• Implemento buenas prácticas de desarrollo integrando control de versiones (Git/GitHub), contenerización (Docker) y pruebas de API (Postman).",
    "exp.4.title": "Diseñadora Líder de Equipo",
    "exp.4.desc": "Lanzamiento de hojas de Letraset que contienen pasajes de Lorem Ipsum y, más recientemente, con software de autoedición",
    "edu.1.title": "Conalep III Aguascalientes 2009-2013",
    "edu.1.desc": "Tecnico Electromecanico.",
    "edu.2.title": "Instituto Tecnológico de Aguascalientes - 2015-2020",
    "edu.2.desc": "Ingeniero en tecnologias de la comunicación e información.",
    "edu.3.title": "Udemy - 2020+",
    "edu.3.desc": "Full-Stack con Python y Django, React y TypeScript, Next.js, Python para Desarrollo IA.",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")

  const t = (key: string) => {
    return (translations[language] as any)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
