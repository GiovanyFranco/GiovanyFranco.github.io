import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, ChevronDown, Briefcase, Award, TrendingUp, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

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
      href: '/CV-GiovanyFranco.pdf',
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

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Fondo dinámico mejorado */}
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
      <div className="container mx-auto px-4 pt-12 pb-24 relative z-10">
        <main className="flex flex-col items-center">
          {/* Encabezado principal con foto */}
          <AnimatePresence>
            {isVisible && (
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
                
                {/* Contenedor de la foto */}
                <motion.div
                  className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur opacity-75 animate-spin-slow"></div>
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1">
                    <div className="h-full w-full rounded-full overflow-hidden relative">
                      <img 
                        src="src/img/about.jpg" 
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
                    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-tight select-none">
                      Giovany Franco
                    </span>
                  </motion.h1>
                  
                  <motion.div
                    className="text-lg sm:text-xl mb-8 relative"
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
                
                {/* Descripción profesional */}
                <motion.p
                  className="text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Especialista en administración de procesos industriales con enfoque en
                  <span className="text-blue-400"> optimización</span> y
                  <span className="text-purple-400"> mejora de costos</span>.
                  Líder en implementación de <span className="italic">Lean Manufacturing</span>, 
                  <span className="italic"> Kaizen</span> y
                  <span className="italic"> TPM</span> para transformar operaciones.
                </motion.p>
              
                {/* Botones de contacto mejorados */}
                <motion.div
                  className="flex justify-center flex-wrap gap-4 mb-12 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {iconButtons.map(({ Icon, bg, hover, shadow, label, href, download }, index) => (
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
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Tarjetas de logros destacados */}
          <motion.section 
            className="w-full max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold text-center mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Comprobables</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index} 
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
          
          {/* Área de call-to-action */}
          <motion.div
            className="w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <div className="relative p-8 rounded-2xl overflow-hidden">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl"></div>
              
              <div className="relative z-10">
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
                  
                  <Link to="/about">
                    <motion.button 
                      className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Conocer Más
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Indicador de scroll */}
          <motion.div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
            animate={controls}
          >
            <ChevronDown size={28} className="text-gray-400" />
          </motion.div>
        </main>
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