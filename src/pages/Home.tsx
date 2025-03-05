import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Linkedin, Mail, ChevronDown, Briefcase } from 'lucide-react';

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 1 },
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
      download: true // Añadir propiedad download
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center pt-10 sm:pt-8 p-2 sm:p-4 relative overflow-hidden">
      {/* Efecto de partículas mejorado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        {/* Nuevo efecto de líneas de grid */}
        <div className="cyber-grid"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 relative max-w-5xl w-full mx-auto pb-8 sm:pb-16 mt-6 sm:mt-8"
      >
        {/* Efecto de glow mejorado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-[100px] blur-[100px] opacity-50 animate-pulse" />
        
        <motion.div className="relative z-10 flex flex-col items-center">
          {/* Contenedor de imagen mejorado */}
          <motion.div
            className="mb-8 sm:mb-4 relative group" // Modificado: reducido el margen en pantallas más grandes
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Contenedor principal de la imagen */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 blur-sm group-hover:blur-md transition-all duration-300" />
              <motion.img
                src="src/img/about.jpg"
                alt="Giovany Franco"
                className="relative w-48 h-48 rounded-full object-cover border-2 border-white/10"
                style={{
                  boxShadow: '0 0 25px rgba(79, 209, 197, 0.3)',
                }}
              />
            </div>
          </motion.div>

          {/* Nombre con efecto futurista simplificado */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 relative cyberpunk-font"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 cyber-glitch-effect">
              Giovany Franco
            </span>
          </motion.h1>

          {/* Título profesional mejorado */}
          <motion.div
            className="relative mb-6 p-1.5 max-w-2xl w-full" // Reducido de max-w-3xl a max-w-2xl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-xl blur-xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl opacity-75 group-hover:opacity-100 blur animate-pulse" />
            
            <motion.div
              className="relative px-6 py-4 bg-gradient-to-r from-gray-900/95 to-black/95 rounded-xl border border-gray-700/50 backdrop-blur-md" // Reducido padding
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col items-center space-y-3"> {/* Reducido space-y */}
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="h-0.5 w-8 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" // Reducido tamaño
                    animate={{ scaleX: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.p
                    className="text-2xl sm:text-3xl font-semibold tracking-wider cyberpunk-font" // Reducido tamaño de fuente
                    animate={{ 
                      textShadow: [
                        "0 0 8px rgba(79, 209, 197, 0.5)",
                        "0 0 20px rgba(79, 209, 197, 0.5)",
                        "0 0 8px rgba(79, 209, 197, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                      Liderazgo Estratégico
                    </span>
                  </motion.p>
                  <motion.div
                    className="h-0.5 w-8 bg-gradient-to-l from-cyan-500 to-transparent rounded-full" // Reducido tamaño
                    animate={{ scaleX: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="w-full h-px"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3" // Reducido space-x
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.span
                    className="text-xl sm:text-2xl font-light tracking-wide" // Reducido tamaño de fuente
                    animate={{ 
                      color: ["#67e8f9", "#c084fc", "#67e8f9"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Especialista En
                  </motion.span>
                  <motion.span
                    className="text-xl sm:text-2xl font-medium cyberpunk-font" // Reducido tamaño de fuente
                    animate={{ 
                      textShadow: [
                        "0 0 8px rgba(147, 51, 234, 0.5)",
                        "0 0 20px rgba(147, 51, 234, 0.5)",
                        "0 0 8px rgba(147, 51, 234, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      Mejora Continua
                    </span>
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Botones de redes sociales */}
          <motion.div
            className="flex justify-center flex-wrap gap-4 mt-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {iconButtons.map(({ Icon, bg, hover, shadow, label, href, download }, index) => (
              <motion.a
                key={label}
                href={href}
                download={download} // Añadir atributo download
                target={!download ? "_blank" : undefined} // Abrir enlaces externos en nueva pestaña
                rel={!download ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`${bg} ${hover} p-4 rounded-xl transition-all duration-300 shadow-lg ${shadow} relative group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Icon size={28} className="transform group-hover:rotate-12 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Nueva flecha de scroll */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }}
            className="mb-2 -mt-4 cursor-pointer" // Cambiado de -mt-2 a -mt-4
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown 
              size={36} 
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            />
          </motion.div>

          {/* Reemplazar el botón de scroll con tarjetas de destacados */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl mt-6 sm:mt-8 px-2 sm:px-0"
          >
            {[
              {
                icon: "🎯",
                title: "Proyectos Exitosos",
                description: "+25 proyectos de mejora continua implementados",
                gradient: "from-green-500 to-emerald-700"
              },
              {
                icon: "💡",
                title: "Experto en Lean",
                description: "Certificado Black Belt en metodologías ágiles",
                gradient: "from-blue-500 to-indigo-700"
              },
              {
                icon: "📈",
                title: "Resultados",
                description: "Incremento promedio de 30% en eficiencia operativa",
                gradient: "from-purple-500 to-pink-700"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${card.gradient} p-0.5 rounded-xl hover:scale-105 transition-transform duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.2 }}
              >
                <div className="bg-gray-900 p-4 rounded-xl h-full">
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-300">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* @ts-ignore */}
      <style jsx global>{`
        .stars, .twinkling, .clouds {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .stars {
          background: #000 url('https://i.imgur.com/YKY28eT.png') repeat top center;
          z-index: 0;
        }

        .twinkling {
          background: transparent url('https://i.imgur.com/XYMF4ca.png') repeat top center;
          z-index: 1;
          animation: move-twink-back 200s linear infinite;
        }

        .clouds {
          background: transparent url('https://i.imgur.com/mHbScrQ.png') repeat top center;
          z-index: 2;
          opacity: 0.3;
          animation: move-clouds-back 200s linear infinite;
        }

        @keyframes move-twink-back {
          from {background-position: 0 0;}
          to {background-position: -10000px 5000px;}
        }

        @keyframes move-clouds-back {
          from {background-position: 0 0;}
          to {background-position: 10000px 0;}
        }

        .cyber-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: 
            linear-gradient(to right, rgba(43, 45, 66, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(43, 45, 66, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: rotate(-45deg);
          animation: grid-animation 20s linear infinite;
        }

        .cyber-glitch-effect {
          text-shadow: 
            0 0 20px rgba(79, 209, 197, 0.3),
            0 0 40px rgba(79, 209, 197, 0.1);
        }

        .cyberpunk-font {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @keyframes grid-animation {
          0% { transform: rotate(-45deg) translateY(0); }
          100% { transform: rotate(-45deg) translateY(-100px); }
        }

        @keyframes glitch {
          0% { text-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
          15% { text-shadow: 2px 2px 10px rgba(79, 209, 197, 0.5), -2px -2px 10px rgba(255, 0, 255, 0.5); }
          30% { text-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
          100% { text-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(79, 209, 197, 0.3); }
          50% { border-color: rgba(79, 209, 197, 0.8); }
        }
      `}</style>
    </div>
  );
};

export default Home;