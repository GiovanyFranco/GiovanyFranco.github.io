import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const useCountAnimation = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return count;
};

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "Con el acompañimiento de Giovany logramos realizar proyectos Kaizen y SMED que nos permitieron aumentar el OEE de la planta de 41% a 74% aumentando la rentabilidad de la operación.",
      author: "Juan Carlos Salazar",
      position: "Gerente de Planta(Eterna)",
      image: "https://source.unsplash.com/random/100x100?portrait=1"
    },
    {
      text: "Proyecto LEAN Six Sigma de nivel de servicio con un incremento del 70% al 87% y disminución de agotados en las principales regiones del pais",
      author: "Maycorth Zambrano",
      position: "Revenue Management Manager Nacional (Bavaria)",
      image: "https://source.unsplash.com/random/100x100?portrait=2"
    },
    {
      text: "Con su liderazgo durante la operación se logro la optimización de la cadena de suministro, disminución de costos aumento de nivel de servicio al cliente a tráves de producto Lean",
      author: "Dany Cegueri",
      position: "Warehouse Manager (BAT)",
      image: "https://source.unsplash.com/random/100x100?portrait=3"
    },
    {
      text: "Giovanny es un gran líder, enfocado en resultados, con una visión holística de los procesos, conectado con el negocio, con una gran capacidad de trabajo en equipo y dominio técnico tanto de la operación, como de la mejora continua. Todas estas habilidades permitieron que todos los proyectos e iniciativas se ejecutaran dentro de los tiempos y entregables esperados",
      author: "Dany Cegueri",
      position: "Warehouse Manager (BAT)",
      image: "https://source.unsplash.com/random/100x100?portrait=3"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-white">
            Sobre <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Mí</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-300 text-justify">
            Especialista en la administración de los procesos industriales, producción, calidad, planeación, planificación, control y seguridad industrial. Líder de proyectos estratégicos de mejoramiento en la cadena de abastecimiento bajo las filosofías de Lean Manufacturing, Kaizen, 5s, TPM (Gerencia Productiva Total) orientado a optimizar procesos y mejorar el costo industrial.
          </p>
        </motion.section>

        <motion.section className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
          <div className="lg:w-2/5">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/img/about.jpg" 
                alt="Giovany Franco" 
                className="rounded-lg w-full h-auto max-w-sm mx-auto object-cover border-2 border-cyan-500/30 shadow-[4px_4px_20px_2px_rgba(34,211,238,0.3),_0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[6px_6px_25px_3px_rgba(34,211,238,0.35),_0_0_25px_rgba(34,211,238,0.35)] transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-cyan-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
          <div className="lg:w-3/5 space-y-6">
            <h2 className="text-4xl font-bold text-white">Perfil <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Profesional</span></h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Mail, text: "Giovany.franco.gf@gmail.com" },
                { icon: MapPin, text: "Bogota, Colombia" },
                { icon: Briefcase, text: "20 años de experiencia" },
                { icon: Globe, text: "www.giovanyfranco.com" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center bg-gray-800/30 backdrop-blur-sm p-3 rounded-lg hover:bg-gray-700/40 border border-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <item.icon className="mr-3 text-cyan-400/80" size={20} />
                  <span className="text-base text-gray-300">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-gray-300">
              Soy un profesional especializado en mejora de procesos, mediante la aplicación de herramientas y puesta en práctica ayudo a las organizaciones a lograr sus objetivos, fortalecer su liderazgo en el sector, con el máximo aprovechamiento del recurso humano. Me considero un apasionado de la filosofía Lean, que busca de manera permanente en conjunto con las personas la mejora continua para lograr un valor perfecto con menor desperdicio.
            </p>
          </div>
        </motion.section>

        <motion.section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Mis <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Habilidades</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: 'Lean Manufacturing', level: 98 },
              { skill: 'Six Sigma', level: 95 },
              { skill: 'Gestión de Proyectos', level: 96 },
              { skill: 'Análisis de Datos', level: 92 },
              { skill: 'Optimización de Procesos', level: 98 },
              { skill: 'Cadena de Suministro', level: 95 },
              { skill: 'Control de Calidad', level: 94 },
              { skill: 'Liderazgo de Equipos', level: 97 }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl border border-gray-700/50 transition-all duration-300"
                whileHover={{ y: -5, backgroundColor: 'rgba(17, 24, 39, 0.4)' }}
              >
                <div className="text-cyan-400 font-bold mb-3 text-lg">{item.skill}</div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="h-2.5 rounded-full bg-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Logros <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Profesionales</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: 25, text: "Proyectos Realizados" },
              { number: 10, text: "Empresas Asesoradas" },
              { number: 5, text: "Reconocimientos" },
              { number: 3, text: "Certificaciones" }
            ].map((fact, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 text-center relative overflow-hidden border border-gray-700/50 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 0 25px rgba(34,211,238,0.7)'
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                <motion.div className="text-6xl font-bold text-white mb-4">
                  {useCountAnimation(fact.number)}
                  {fact.number > 10 ? '+' : ''}
                </motion.div>
                <div className="text-lg text-gray-300">{fact.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonios <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Destacados</span></h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-10 relative shadow-2xl border border-gray-700/50">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="flex-shrink-0">
                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].author} className="w-24 h-24 rounded-full object-cover border-4 border-teal-400 shadow-lg" />
              </div>
              <div>
                <p className="italic mb-4 text-xl text-gray-300">"{testimonials[currentTestimonial].text}"</p>
                <div className="font-semibold text-blue-400 text-lg">{testimonials[currentTestimonial].author}</div>
                <div className="text-sm text-gray-400">{testimonials[currentTestimonial].position}</div>
              </div>
            </motion.div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button onClick={prevTestimonial} className="text-blue-400 hover:text-teal-400 transition-colors">
                <ChevronLeft size={32} />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button onClick={nextTestimonial} className="text-blue-400 hover:text-teal-400 transition-colors">
                <ChevronRight size={32} />
              </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === idx ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;