import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Linkedin, Mail, ChevronDown, Briefcase, Award, TrendingUp, BarChart2, 
         Check, Users, Target, Zap, ChevronRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const controls = useAnimation();
  // Fix: Change from destructuring an array with one element to proper useState usage
  // Option 2: Keep only the setter if you're only setting but not reading
  const [, setIsVisible] = useState(false);
  
  // Referencias para animaciones basadas en scroll
  const heroRef = useRef(null);
  
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  
  const valueRef = useRef(null);
  const valueInView = useInView(valueRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsVisible(true);
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 1.5 },
    });
  }, [controls]);

  const iconButtons = [
    { 
      Icon: Linkedin, 
      bg: 'bg-gradient-to-r from-blue-600 to-blue-800', 
      hover: 'hover:from-blue-700 hover:to-blue-900', 
      shadow: 'hover:shadow-blue-500/50', 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/giovany-franco-palacio/' 
    },
    { 
      Icon: Mail, 
      bg: 'bg-gradient-to-r from-red-500 to-red-700', 
      hover: 'hover:from-red-600 hover:to-red-800', 
      shadow: 'hover:shadow-red-500/50', 
      label: 'Email', 
      href: 'mailto:giovany.franco.gf@gmail.com' 
    },
    { 
      Icon: Briefcase, 
      bg: 'bg-gradient-to-r from-purple-600 to-purple-800', 
      hover: 'hover:from-purple-700 hover:to-purple-900', 
      shadow: 'hover:shadow-purple-500/50', 
      label: 'Resume', 
      href: '/cv.pdf',
      download: true
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-10 h-10 text-amber-400" />,
      number: "20+",
      title: "Años de experiencia",
      description: "Trayectoria sólida en gestión industrial",
      color: "from-amber-600 to-amber-700",
      delay: 0.3
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-emerald-400" />,
      number: "30%",
      title: "Mejora en eficiencia",
      description: "Promedio en proyectos implementados",
      color: "from-emerald-600 to-emerald-700", 
      delay: 0.5
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
      number: "25+",
      title: "Proyectos exitosos",
      description: "De mejora continua implementados",
      color: "from-blue-600 to-blue-700",
      delay: 0.7
    }
  ];
  
  // Nuevas metodologías destacadas
  const methodologies = [
    { 
      name: "Lean Manufacturing", 
      icon: <Zap className="w-10 h-10" />, 
      color: "from-cyan-500 to-blue-600" 
    },
    { 
      name: "Kaizen", 
      icon: <TrendingUp className="w-10 h-10" />, 
      color: "from-blue-500 to-purple-600" 
    },
    { 
      name: "TPM", 
      icon: <Building className="w-10 h-10" />, 
      color: "from-purple-500 to-pink-600" 
    },
    { 
      name: "Six Sigma", 
      icon: <Target className="w-10 h-10" />, 
      color: "from-pink-500 to-red-600" 
    }
  ];
  
  // Propuesta de valor para organizaciones
  const valuePropositions = [
    {
      title: "Optimización de Procesos",
      description: "Implementación de metodologías de mejora continua para eliminar desperdicios y maximizar eficiencia operativa.",
      icon: <Zap className="w-8 h-8" />,
      color: "border-cyan-500/30 shadow-cyan-500/20",
      iconBg: "bg-cyan-500/20 text-cyan-400"
    },
    {
      title: "Reducción de Costos",
      description: "Identificación e implementación de estrategias para reducir costos operativos sin comprometer la calidad.",
      icon: <BarChart2 className="w-8 h-8" />,
      color: "border-purple-500/30 shadow-purple-500/20",
      iconBg: "bg-purple-500/20 text-purple-400"
    },
    {
      title: "Desarrollo de Equipos",
      description: "Capacitación y desarrollo de equipos para crear una cultura de mejora continua y alto desempeño.",
      icon: <Users className="w-8 h-8" />,
      color: "border-amber-500/30 shadow-amber-500/20",
      iconBg: "bg-amber-500/20 text-amber-400"
    }
  ];
  
  // Empresas destacadas con las que ha trabajado
  const featuredCompanies = [
    { name: "BAT", logo: "/./img/bat-logo.png" },
    { name: "Eterna", logo: "/./img/eterna-logo.jpg" },
    { name: "Innovaflora", logo: "/./img/innovaflora-logo.jpg" },
    { name: "Rich", logo: "/./img/rich-logo.png" }
  ];
  
  // Principales áreas de experiencia
  const expertiseAreas = [
    { 
      title: "Gestión de la Producción",
      icon: <Building className="w-7 h-7" />,
      skills: ["Direccíon de producción", "Control de procesos", "Gestión de calidad","Ciclo S&OP"],
      color: "from-blue-600 to-cyan-600"
    },
    { 
      title: "Mejora Continua",
      icon: <TrendingUp className="w-7 h-7" />,
      skills: ["Kaizen", "5S", "SMED", "Kanban"],
      color: "from-purple-600 to-pink-600" 
    },
    { 
      title: "Gestión de Equipos",
      icon: <Users className="w-7 h-7" />,
      skills: ["Liderazgo", "Capacitación", "Gestión del cambio"],
      color: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Fondo dinámico */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="cyber-grid"></div>
        
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section - Con mayor espacio superior */}
        <section 
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-12"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            {/* Efecto de luz detrás de la foto */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Contenedor de la foto - Tamaño reducido y mejor espaciado */}
            <motion.div
              className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-8 relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur opacity-75 animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1">
                <div className="h-full w-full rounded-full overflow-hidden relative">
                  <img 
                    src="./img/about.jpg" 
                    alt="Giovany Franco" 
                    className="h-full w-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Nombre y cargo con animaciones mejoradas */}
            <div className="relative">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-tight select-none">
                  Giovany Franco
                </span>
              </motion.h1>
              
              <motion.div
                className="text-lg sm:text-xl mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="inline-block relative">
                  <span className="relative z-10 font-light text-gray-200">Especialista en</span>{" "}
                  <motion.span
                    className="relative z-10 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    animate={{ 
                      textShadow: ["0 0 8px rgba(79, 209, 197, 0.3)", "0 0 12px rgba(79, 209, 197, 0.5)", "0 0 8px rgba(79, 209, 197, 0.3)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Mejora Continua
                  </motion.span>{" "}
                  <span className="relative z-10 font-light text-gray-200">y</span>{" "}
                  <motion.span
                    className="relative z-10 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                    animate={{ 
                      textShadow: ["0 0 8px rgba(147, 51, 234, 0.3)", "0 0 12px rgba(147, 51, 234, 0.5)", "0 0 8px rgba(147, 51, 234, 0.3)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    Liderazgo Estratégico
                  </motion.span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>
              </motion.div>
            </div>
            
            {/* Descripción profesional más impactante */}
            <motion.p
              className="text-gray-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="font-medium">Experto en transformación operativa industrial</span> con historial 
              comprobado de resultados. Especialista en administración de procesos con enfoque en
              <span className="text-blue-400"> optimización</span> y
              <span className="text-purple-400"> reducción de costos</span>.
              Líder en implementación de <span className="italic">Lean Manufacturing</span>, 
              <span className="italic"> Kaizen</span> y
              <span className="italic"> TPM</span> para transformar operaciones.
            </motion.p>
          
            {/* Botones de contacto */}
            <motion.div
              className="flex justify-center flex-wrap gap-4 mb-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {iconButtons.map(({ Icon, bg, hover, shadow, label, href, download }) => (
                <motion.a
                  key={label}
                  href={href}
                  download={download}
                  target={!download ? "_blank" : undefined}
                  rel={!download ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${bg} ${hover} py-3 px-5 rounded-xl transition-all duration-300 shadow-lg ${shadow} flex items-center gap-3 group`}
                >
                  <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">{label}</span>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Badge destacado - NUEVA CARACTERÍSTICA */}
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-full py-2 px-4 flex items-center gap-2">
              </div>
            </motion.div>
          </motion.div>
          
          {/* Indicador de scroll */}
          <motion.div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
            animate={controls}
          >
            <ChevronDown size={28} className="text-gray-400" />
          </motion.div>
        </section>
        
        {/* Áreas de Experiencia - NUEVA SECCIÓN */}
        <section className="py-16 mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Áreas de <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Experiencia</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r border border-gray-700/50 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-900 p-6 rounded-xl h-full">
                  {/* Icono con gradiente */}
                  <div className={`p-3 inline-block rounded-xl bg-gradient-to-r ${area.color} bg-opacity-20 mb-4`}>
                    <div className="text-white">{area.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={16} className="mt-1 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Botón de explorar más */}
          <div className="flex justify-center mt-8">
            <Link to="/resume">
              <motion.button
                className="group relative overflow-hidden px-6 py-3 rounded-lg border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="font-medium">Ver trayectoria completa</span>
                  <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </motion.button>
            </Link>
          </div>
        </section>
        
        {/* Metodologías Especializadas */}
        <section ref={techRef} className="py-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Metodologías <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Especializadas</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r border border-gray-700/50 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className={`relative bg-gray-900 p-8 rounded-xl flex flex-col items-center text-center`}>
                  {/* Icono con efecto de gradiente */}
                  <div className={`mb-6 p-4 rounded-full bg-gradient-to-r ${method.color} bg-opacity-10 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{method.name}</h3>
                  
                  {/* Barra decorativa en hover */}
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Logos de empresas */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
              Empresas donde he generado impacto
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {featuredCompanies.map((company) => (
                <motion.div
                  key={company.name}
                  className="w-32 h-32 p-4 bg-gray-800/40 backdrop-blur-sm rounded-full border border-gray-700/40 flex items-center justify-center hover:border-cyan-500/20 transition-all duration-500 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className={`max-h-20 max-w-20 object-contain ${company.name === "BAT" || company.name === "Rich" ? "max-h-24" : ""}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Tarjetas de logros destacados */}
        <motion.section 
          className="w-full max-w-5xl mx-auto mb-20 py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Comprobables</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <motion.div 
                key={item.title} 
                className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: item.delay }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-gray-900 h-full rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="mb-4 bg-gray-800/50 p-3 rounded-full">{item.icon}</div>
                  <div className="text-3xl font-bold mb-2">{item.number}</div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Propuesta de valor */}
        <section 
          ref={valueRef}
          className="py-16 mb-10"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            ¿Por qué <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Contratarme?</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-300 max-w-3xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Combino experiencia técnica con visión estratégica para transformar operaciones 
            y generar resultados medibles para su organización.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePropositions.map((value, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800/30 backdrop-blur-sm border ${value.color} rounded-xl p-6 relative overflow-hidden group hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={valueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
              >
                {/* Decorative light effect */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 group-hover:w-28 group-hover:h-28 transition-all duration-500"></div>
                
                <div className={`p-3 rounded-full ${value.iconBg} w-fit mb-5`}>
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                
                <p className="text-gray-300 text-justify">{value.description}</p>
                
                <div className="mt-4 pt-2 flex items-center text-cyan-400 font-medium">
                  <span className="mr-2">Saber más</span>
                  <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonios destacados - VERSION COMPACTA */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative p-8 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30 border border-gray-700/50">
              <div className="absolute -left-4 -top-4 text-8xl text-cyan-500/20 font-serif">"</div>
              <div className="absolute -right-4 -bottom-4 text-8xl text-purple-500/20 font-serif transform rotate-180">"</div>
              
              <blockquote className="relative">
                <p className="text-xl sm:text-2xl text-center font-light italic text-gray-300 mb-6 max-w-4xl mx-auto text-justify">
                  Con el liderazgo de Giovany logramos realizar proyectos Kaizen y SMED 
                  que nos permitieron <span className="text-cyan-400 not-italic font-medium">aumentar el OEE de la planta de 41% a 74%</span> incrementando 
                  significativamente la rentabilidad de la operación.
                </p>
                
                <footer className="text-center">
                  <div className="font-medium text-white">Juan Carlos Salazar</div>
                  <div className="text-gray-400">Gerente de Planta (Eterna)</div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </section>
        
        {/* Llamada a la acción mejorada */}
        <motion.div
          className="w-full max-w-4xl mx-auto mb-20 py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative p-8 sm:p-10 rounded-2xl overflow-hidden">
            {/* Fondo decorativo con gradiente y efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              {/* Efecto de luz */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Líneas de cuadrícula sutiles */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
                  Descubra cómo puedo ayudar a su organización
                </h3>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/resume">
                    <motion.button 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Briefcase size={18} />
                      Ver Experiencia
                    </motion.button>
                  </Link>
                  
                  <Link to="/sobre-mi">
                    <motion.button 
                      className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Conocer Más
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Estilos globales para los efectos visuales */}
      {/* @ts-ignore */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .stars {
          background: #000 url('https://i.imgur.com/YKY28eT.png') repeat top center;
          z-index: 0;
          opacity: 0.5;
        }

        .twinkling {
          background: transparent url('https://i.imgur.com/XYMF4ca.png') repeat top center;
          z-index: 1;
          opacity: 0.3;
          animation: move-twink-back 200s linear infinite;
        }

        @keyframes move-twink-back {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }

        .cyber-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(to right, rgba(64, 64, 91, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(64, 64, 91, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: center top;
          top: 0;
          left: -50%;
          opacity: 0.4;
          animation: grid-move 30s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
      `}</style>
    </div>
  );
};

export default Home;