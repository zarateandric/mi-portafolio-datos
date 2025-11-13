import React, { useState, useEffect } from 'react';
import {
  Briefcase, Code, Database, /*TrendingUp*/ User, Mail, Smartphone,
  BarChart2, Zap, GitBranch, ArrowUp, X, Menu, HardDrive, /*Cpu*/ Layers,
  Handshake,
  House
} from 'lucide-react';

// --- Constantes de Contenido ---
const PHOTO_URL = "foto_andric.png";

const NAV_LINKS = [
  { id: 'inicio', label: 'Home', icon: House},
  { id: 'about', label: 'About me', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const ANALYST_SKILLS = [
  { category: 'Coding & Data Bases', items: ['Python (Pandas, NumPy)', 'SQL (MySQL)'], icon: Code },
  { category: 'Visualization & BI', items: [/*'Tableau',*/ 'Power BI', 'Matplotlib'], icon: BarChart2 },
  // { category: /*'Estadística & Machine Learning'*/'Soft skills', items: ['Regresión', 'Clustering (K-means)', 'Análisis de series de tiempo', 'Pruebas A/B'], icon: TrendingUp },
  {category: 'Soft-skills', items:['Teamwork', 'Adaptability', 'Self-management',  'Project Development and Support'], icon: Handshake},
  { category: 'Tools', items: ['Git/GitHub', 'Excel', 'Jupyter/Colab'], icon: HardDrive },
];

const DATA_PROJECTS = [ 
  {
    title: "Dashboard Restaurant Data Analysis with Power BI",
    description: "Creation of an interactive Dashboard for a restaurant, fully developed in Power BI. The main goal was to transform raw sales and operations data into actionable insights, utilizing key tools such as Power Query for data preparation and DAX formulas for creating advanced metrics.",
    tags: ["Power Query", "Power BI", "DAX", "Visualization"],
    link: "https://github.com/zarateandric/restaurant-dashboard" // Reemplaza con tu enlace de GitHub
  },
  {
     title: "End-to-End Analysis of Ecobici CDMX",
     description: "This project is a portfolio analysis that simulates a real business case. The objective was to build a complete data pipeline (ETL) and a Business Intelligence dashboard to analyze the behavior of users of the Ecobici system in Mexico City.",
     tags: ["Python", "MySQL", "Power BI", "DAX","Pandas","beautifulsoup4","Power Query"],
     link: "https://app.powerbi.com/view?r=eyJrIjoiZDVjZGZiMmQtYjk3Ni00YTU3LWFiMmQtMzlkMzUwODEwOTI5IiwidCI6IjVmMjgyOTEwLTE3NmYtNDU5ZC1hYjdkLWI3NDRhYTZlZmMwNyIsImMiOjR9"
   },
  // {
  //   title: "Dashboard Interactivo de Ventas Globales",
  //   description: "Diseño y construcción de un dashboard en Tableau para monitorear el rendimiento de ventas en tiempo real, segmentado por región y canal. (Enlace a Tableau Public).",
  //   tags: ["Tableau", "SQL", "KPIs", "Visualización"],
  //   link: "https://public.tableau.com/profile/tu_usuario/GlobalSalesDashboard" // Reemplaza con tu enlace de Tableau Public
  // },
];

// --- Componente Principal (App) ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Función para desplazamiento suave entre secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cierra el menú en móvil después de hacer clic
    }
  };

  // Efecto para mostrar el botón de "Scroll to Top"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-50 text-slate-800">

      {/* Navegación Fija (Desktop) y Botón de Menú (Mobile) */}
      <header className="fixed top-0 z-50 w-full shadow-lg bg-white/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
          <div className="text-2xl font-bold text-indigo-700">
            <Layers className="inline w-6 h-6 mr-1" />
            <span className="hidden sm:inline">Data Portfolio</span>
            <span className="sm:hidden">DP</span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden space-x-6 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center px-3 py-1 text-sm font-medium transition duration-300 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50"
              >
                <link.icon className="w-4 h-4 mr-1" />
                {link.label}
              </button>
            ))}
          </div>

          {/* Botón de Menú Móvil */}
          <button
            className="p-2 transition duration-300 rounded-lg md:hidden text-slate-600 hover:bg-indigo-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 p-4 transition duration-300 bg-white shadow-xl md:hidden">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center px-4 py-2 text-left transition duration-300 rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                <link.icon className="w-5 h-5 mr-3" />
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* Sección 1: Inicio (Hero) */}
        <section id="inicio" className="flex items-center justify-center min-h-screen pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
          <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl text-slate-900">
              Andric Zárate
            </h1>
            <p className="mt-4 text-2xl font-medium text-indigo-700 md:text-3xl">
              Aspiring Data Analyst & Data Scientist
            </p>
            <p className="mt-6 text-lg text-slate-600">
              Turning raw data into actionable insights. Currently training in technologies such as Python, SQL, and Power BI, eager to transition into a full-time Data Analyst or Data Science role.
            </p>
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 text-base font-semibold text-white transition duration-300 transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 shadow-indigo-500/50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 text-base font-semibold transition duration-300 transform bg-white border border-indigo-200 rounded-full text-indigo-600 hover:bg-indigo-50 hover:scale-105"
              >
                <Mail className="inline w-5 h-5 mr-2" />
                Contact me
              </button>
            </div>
          </div>
        </section>

        {/* Sección 2: About Me */}
        <Section id="about" title="About me" icon={User} bgColor="bg-white">
          <div className="text-center mb-10">
            <img
            src={PHOTO_URL}
            alt="Foto profesional"
            className="w-40 h-40 rounded-full object-cover mx-auto ring-4 ring-indigo-300 shadow-xl"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-4 text-lg text-slate-700 text-justify">
                I am an undergraduate student majoring in Business Administration at the Universidad Nacional Autónoma de México (UNAM), where I have built a solid foundation in management and organizational analysis. I currently complement my academic background with certifications and practical experience in data analysis and technology tools.
              </p>
              <p className="mb-4 text-lg text-slate-700 text-justify">
               I am constantly building proficiency in Python, SQL, MySQL, and data science tools, with the goal of dedicating my professional career to data analysis and data science. My prior experience in automation projects, process improvement, and information management has provided me with a deep understanding of how data can transform decision-making and generate tangible value within an organization.
              </p>
              <p className="mb-4 text-lg text-slate-700 text-justify">
               I am a disciplined, highly adaptable, and perseverant professional. I enjoy working collaboratively, embracing complex challenges, and seeking innovative solutions that contribute to the growth and success of my projects.
              </p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="mb-3 text-xl font-bold text-indigo-800 flex items-center"><Layers className="w-5 h-5 mr-2"/> </h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong className='text-slate-800'>Bachelor of Administration</strong><br/><span className='text-slate-600'>2022 - 2026 | UNAM</span></li>
                <li><strong className='text-slate-800'>Data Scientist Trainee Certification G9</strong><br/><span className='text-slate-600'> 2025 - 2026 | Oracle Next Education</span></li>
                <li><strong className='text-slate-800'>SQL for Data Analysis</strong><br/><span className='text-slate-600'>2025 | A2 Capacitación</span></li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Sección 3: Skills & Expertise */}
        <Section id="skills" title="Skills y Expertise" icon={Code} bgColor="bg-gray-100">
          <p className="mb-8 text-center text-lg text-slate-600">
            Tools Applied for Project Analysis and Development.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ANALYST_SKILLS.map((skill, index) => (
              <div key={index} className="p-6 bg-white transition duration-300 border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-indigo-300">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-7 h-7 p-1.5 text-white bg-indigo-500 rounded-lg mr-3" />
                  <h3 className="text-xl font-bold text-slate-800">{skill.category}</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Sección 4: Projects */}
        <Section id="projects" title="My Projects" icon={Briefcase} bgColor="bg-white">
          <p className="mb-8 text-center text-lg text-slate-600">
            Concrete examples showcasing my ability to solve business problems using data.
          </p>
          <div className="grid gap-8 lg:grid-cols-3">
            {DATA_PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/zarateandric?tab=repositories" // Reemplaza con tu GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-indigo-600 transition duration-300 border border-indigo-300 rounded-full hover:bg-indigo-50"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              View More Projects on GitHub
            </a>
          </div>
        </Section>

        {/* Sección 5: Contacto */}
        <Section id="contact" title="Contact" icon={Mail} bgColor="bg-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-8 text-lg text-slate-600">
              I am available to discuss collaboration opportunities, projects, or new challenges in data analysis.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <ContactInfo
                icon={Mail}
                label="Correo Electrónico"
                value="zarateandric@gmail.com" // Reemplaza
                href="mailto:zarateandric@gmail.com"
              />
              <ContactInfo
                icon={Smartphone}
                label="LinkedIn"
                value="Andric Zarate" // Reemplaza
                href="https://www.linkedin.com/in/zarateandric/"
              />
            </div>

            {/* Formulario (Mock-up) */}
            <form className="p-8 mt-12 space-y-4 text-left bg-white rounded-xl shadow-lg border border-indigo-100"
                  action="https://formspree.io/f/movknevg"
                  method="POST"
                  name="contact-form"
                  enctype="application/x-www-form-urlencoded">
              <h3 className="text-xl font-bold text-slate-800">Get in touch</h3>
              <input type="text" name="nombre" placeholder="Your name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
              <input type="email" name="_replyto" placeholder="Your email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
              <textarea placeholder="Your message..." name="mensaje" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
              <button type="submit" className="w-full px-4 py-3 text-base font-semibold text-white transition duration-300 rounded-lg bg-indigo-600 hover:bg-indigo-700">
                Submit
              </button>
            </form>
          </div>
        </Section>
      </main>

      {/* Botón de Volver Arriba */}
      {showScrollToTop && (
        <button
          onClick={() => scrollToSection('inicio')}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition duration-300 hover:bg-indigo-700 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="py-8 text-sm text-center bg-slate-900 text-slate-400">
        <div className="max-w-6xl px-4 mx-auto">
          <p>&copy; 2025 Andric Zarate.</p>
          <p className="mt-1">Built with React and a passion for data. Design focused on Analytical Clarity.</p>
        </div>
      </footer>
    </div>
  );
};

// --- Componentes Auxiliares ---

// Componente para la Tarjeta de Proyecto
const ProjectCard = ({ project }) => (
  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
    <h3 className="text-xl font-bold text-indigo-700 flex items-center mb-3">
      <Database className="w-5 h-5 mr-2" />
      {project.title}
    </h3>
    <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-slate-800 rounded-lg hover:bg-slate-900"
    >
      View Repository (GitHub/Power BI)
      <GitBranch className="w-4 h-4 ml-2" />
    </a>
  </div>
);

// Componente para la Información de Contacto
const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-4 transition duration-300 transform bg-white border border-indigo-200 rounded-xl hover:bg-indigo-50 hover:shadow-md md:flex-row md:space-x-3 md:w-1/2"
  >
    <Icon className="w-6 h-6 text-indigo-600 mb-2 md:mb-0" />
    <div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="text-base font-semibold text-slate-800 break-all">{value}</p>
    </div>
  </a>
);


// Componente para el Contenedor de Sección
const Section = ({ id, title, icon: Icon, children, bgColor }) => (
  <section id={id} className={`py-16 sm:py-24 ${bgColor}`}>
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center">
          <Icon className="w-8 h-8 mr-3 text-indigo-600" />
          {title}
        </h2>
        <div className="h-1 w-20 mx-auto mt-3 bg-indigo-500 rounded-full"></div>
      </div>
      {children}
    </div>
  </section>
);

export default App;
