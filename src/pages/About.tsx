import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Briefcase, Globe, ChevronLeft, ChevronRight, Award, LineChart, 
         Users, Target, Shield, Clock, Zap, TrendingUp, CheckCircle, Star } from 'lucide-react';

// Definimos tipos para el retorno del hook
interface CountAnimationResult {
  count: number;
  ref: React.RefObject<any>;
}

// Hook mejorado con tipado adecuado
const useCountAnimation = (end: number, duration: number = 2000, delay: number = 0): CountAnimationResult => {
  const [count, setCount] = useState(0);
  const countRef = useRef({ hasAnimated: false });
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && !countRef.current.hasAnimated) {
      countRef.current.hasAnimated = true;
      
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        
        if (elapsed < delay) {
          requestAnimationFrame(step);
          return;
        }
        
        const progress = Math.min((elapsed - delay) / duration, 1);
        setCount(Math.floor(end * progress));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, end, duration, delay]);
  
  return { count, ref: inViewRef };
};

// Componente con tipado adecuado
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ children, delay = 0, className = "" }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "Con el acompañimiento de Giovany logramos realizar proyectos Kaizen y SMED que nos permitieron aumentar el OEE de la planta de 41% a 74% aumentando la rentabilidad de la operación.",
      author: "Juan Carlos Salazar",
      position: "Gerente de Planta (Eterna)",
      image: "./img/juan.jpg"
    },
    {
      text: "Proyecto LEAN Six Sigma de nivel de servicio con un incremento del 70% al 87% y disminución de agotados en las principales regiones del país.",
      author: "Maycorth Zambrano",
      position: "Revenue Management Manager Nacional (Bavaria)",
      image: "./img/may.jpg"
    },
    {
      text: "Con su liderazgo durante la operación se logró la optimización de la cadena de suministro, disminución de costos y aumento de nivel de servicio al cliente a través de productos Lean.",
      author: "Dany Cegueri",
      position: "Warehouse Manager (BAT)",
      image: "./img/dany.jpg"
    },
    {
      text: "Giovany es un gran líder, enfocado en resultados, con una visión holística de los procesos, conectado con el negocio, con una gran capacidad de trabajo en equipo y dominio técnico tanto de la operación, como de la mejora continua.",
      author: "Jorge Paredes",
      position: "Gerente QA (Innovaflora)",
      image: "./img/jorge.jpg"
    }
  ];

  // Referencia para la sección de habilidades
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  // Auto-avance de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const professionalSkills = [
    { 
      skill: 'Lean Manufacturing', 
      level: 98,
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      description: "Experto en implementación de sistemas Lean"
    },
    { 
      skill: 'Six Sigma', 
      level: 95,
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      description: "Metodología DMAIC para reducción de variación"
    },
    { 
      skill: 'Gestión de Proyectos', 
      level: 96,
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      description: "Planificación y ejecución de proyectos complejos"
    },
    { 
      skill: 'Análisis de Datos', 
      level: 92,
      icon: <LineChart className="w-5 h-5 text-cyan-400" />,
      description: "Interpretación de KPIs y métricas operativas"
    },
    { 
      skill: 'Optimización de Procesos', 
      level: 98,
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      description: "Reducción de desperdicios y aumento de eficiencia"
    },
    { 
      skill: 'Cadena de Suministro', 
      level: 95,
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      description: "Optimización de flujos de valor end-to-end"
    },
    { 
      skill: 'Control de Calidad', 
      level: 94,
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      description: "Sistemas de aseguramiento y mejora de calidad"
    },
    { 
      skill: 'Liderazgo de Equipos', 
      level: 97,
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      description: "Desarrollo y dirección de equipos de alto rendimiento"
    }
  ];

  const achievements = [
    { 
      number: 42, 
      text: "Proyectos de Mejora", 
      icon: <Target className="w-8 h-8" />,
      decorativeIcon: <TrendingUp className="w-16 h-16 opacity-10 absolute top-1/2 right-4 transform -translate-y-1/2" />,
      color: "from-cyan-500 to-blue-500",
      hoverColor: "group-hover:text-cyan-400"
    },
    { 
      number: 10, 
      text: "Empresas Asesoradas", 
      icon: <Briefcase className="w-8 h-8" />,
      decorativeIcon: <Users className="w-16 h-16 opacity-10 absolute top-1/2 right-4 transform -translate-y-1/2" />,
      color: "from-purple-500 to-pink-500",
      hoverColor: "group-hover:text-purple-400"
    },
    { 
      number: 5, 
      text: "Reconocimientos", 
      icon: <Award className="w-8 h-8" />,
      decorativeIcon: <Star className="w-16 h-16 opacity-10 absolute top-1/2 right-4 transform -translate-y-1/2" />,
      color: "from-amber-500 to-orange-500",
      hoverColor: "group-hover:text-amber-400"
    },
    { 
      number: 3, 
      text: "Certificaciones", 
      icon: <Shield className="w-8 h-8" />,
      decorativeIcon: <CheckCircle className="w-16 h-16 opacity-10 absolute top-1/2 right-4 transform -translate-y-1/2" />,
      color: "from-emerald-500 to-teal-500",
      hoverColor: "group-hover:text-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Elementos decorativos */}
      <div className="fixed inset-0 -z-10">
        <div className="cyber-grid"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div 
            className="inline-block relative mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-30"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="text-5xl sm:text-6xl font-bold text-white relative">
              Sobre <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Mí</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubra cómo mi experiencia en mejora continua y liderazgo estratégico 
            puede transformar la eficiencia operativa de su organización.
          </motion.p>
        </motion.header>

        {/* Perfil profesional con foto */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                className="relative group h-full flex items-center"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-50 transform -rotate-2 group-hover:opacity-70 transition-opacity"></div>
                <img 
                  src="./img/about.jpg" 
                  alt="Giovany Franco" 
                  className="relative w-full h-auto object-cover rounded-xl border border-gray-700/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-shadow duration-300"
                />
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Perfil <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Profesional</span>
              </motion.h2>
              
              <motion.p
                className="text-gray-300 mb-8 text-lg leading-relaxed text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Especialista en la administración de procesos industriales, producción, calidad y planificación. 
                Líder de proyectos estratégicos de mejoramiento en la cadena de abastecimiento bajo las filosofías 
                de <span className="text-cyan-400">Lean Manufacturing</span>, <span className="text-cyan-400">Kaizen</span>, 
                <span className="text-cyan-400"> 5s</span> y <span className="text-cyan-400">TPM</span> (Gerencia Productiva Total) 
                orientado a optimizar procesos y mejorar el costo industrial.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Mail, text: "giovany.franco.gf@gmail.com" },
                  { icon: MapPin, text: "Bogotá, Colombia" },
                  { icon: Briefcase, text: "20+ años de experiencia" },
                  { icon: Globe, text: "Disponibilidad para viajar" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center p-3 bg-gradient-to-r from-gray-800/70 to-gray-900/70 rounded-lg border border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ 
                      backgroundColor: "rgba(20, 20, 30, 0.7)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <item.icon className="text-cyan-400/90" size={18} />
                    </div>
                    <span className="ml-3 text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                className="text-gray-300 leading-relaxed text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Soy un profesional apasionado por la mejora continua y la optimización de procesos. 
                Mi objetivo es ayudar a las organizaciones a alcanzar la excelencia operativa mediante 
                la implementación de metodologías ágiles y el desarrollo de capacidades en los equipos de trabajo.
              </motion.p>
            </div>
          </div>
        </AnimatedSection>

        {/* Filosofía y enfoque profesional */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="p-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-xl">
            <div className="bg-gray-900/95 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Mi <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Enfoque</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Target className="w-10 h-10 text-cyan-400" />,
                    title: "Visión estratégica",
                    description: "Identifico oportunidades de mejora que se alinean con los objetivos estratégicos de la empresa."
                  },
                  {
                    icon: <Users className="w-10 h-10 text-purple-400" />,
                    title: "Desarrollo de personas",
                    description: "Creo que el cambio sostenible solo es posible cuando las personas están capacitadas y comprometidas."
                  },
                  {
                    icon: <LineChart className="w-10 h-10 text-blue-400" />,
                    title: "Resultados medibles",
                    description: "Me enfoco en generar impactos cuantificables y sostenibles en los indicadores de negocio."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-800/80 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-justify">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Logros profesionales con contador - Estética mejorada */}
        <AnimatedSection delay={0.4} className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Logros <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Profesionales</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((fact, index) => {
              const { count, ref } = useCountAnimation(fact.number, 1500, index * 200);
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className={`relative overflow-hidden bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 group transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 0 25px rgba(34,211,238,0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Barra decorativa en la parte superior */}
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${fact.color}`}></div>
                  
                  {/* Efecto de brillo en hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    initial={{ background: "radial-gradient(circle at center, transparent 0%, transparent 100%)" }}
                    whileHover={{ 
                      background: `radial-gradient(circle at center, ${fact.color.includes('cyan') ? 'cyan' : fact.color.includes('purple') ? 'purple' : fact.color.includes('amber') ? 'amber' : 'emerald'} 0%, transparent 70%)`
                    }}
                  ></motion.div>
                  
                  {/* Fondo decorativo con patrón */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  </div>
                  
                  {/* Icono decorativo de fondo */}
                  <div className={`transition-all duration-500 transform ${fact.hoverColor}`}>
                    {fact.decorativeIcon}
                  </div>
                  
                  <div className="p-6 text-center relative z-10">
                    {/* Icono principal */}
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        className={`p-4 bg-gray-800/80 rounded-full text-white shadow-lg relative group-hover:shadow-${fact.color.split('-')[1]}/20`}
                        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Efecto de halo alrededor del icono */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${fact.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}></div>
                        
                        {fact.icon}
                      </motion.div>
                    </div>
                    
                    {/* Contador */}
                    <motion.div 
                      className={`text-5xl font-bold mb-2 relative text-transparent bg-clip-text bg-gradient-to-r ${fact.color}`}
                      animate={{ scale: count === fact.number ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {count}
                      {fact.number >= 10 ? '+' : ''}
                    </motion.div>
                    
                    {/* Título del logro */}
                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {fact.text}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Habilidades profesionales */}
        <AnimatedSection delay={0.6} className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center" ref={skillsRef}>
            Mis <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Habilidades</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {professionalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="flex justify-between mb-2 items-center">
                  <div className="flex items-center">
                    {skill.icon}
                    <span className="ml-2 font-medium">{skill.skill}</span>
                  </div>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  ></motion.div>
                </div>
                <p className="text-gray-400 text-sm mt-1 text-justify">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonios */}
        <AnimatedSection delay={0.8} className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Lo que Dicen de <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Mi Trabajo</span>
          </h2>
          
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg">
            {/* Comillas decorativas */}
            <div className="absolute -top-6 -left-3 text-7xl text-cyan-500 opacity-20 font-serif">"</div>
            <div className="absolute -bottom-14 -right-3 text-7xl text-purple-500 opacity-20 font-serif rotate-180">"</div>
            
            <div className="relative">
              <div className="overflow-hidden">
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-8 ${currentTestimonial === idx ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-70 blur-sm"></div>
                        <div className="relative rounded-full overflow-hidden w-24 h-24">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl italic mb-6 text-gray-300 text-justify">"{testimonial.text}"</p>
                      <div>
                        <div className="font-semibold text-lg text-cyan-400">{testimonial.author}</div>
                        <div className="text-gray-400">{testimonial.position}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Controles de navegación */}
              <div className="flex justify-between items-center mt-8">
                <button 
                  onClick={prevTestimonial} 
                  className="p-2 rounded-full bg-gray-800/70 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentTestimonial === idx 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 w-8' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Ir al testimonio ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial} 
                  className="p-2 rounded-full bg-gray-800/70 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* CTA final */}
      </div>
      
      {/* Estilos globales para efectos visuales */}
      {/* @ts-ignore */}
      <style jsx global>{`
        .cyber-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(to right, rgba(64, 64, 91, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(64, 64, 91, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: center top;
          top: 0;
          left: -50%;
          opacity: 0.4;
          animation: grid-move 30s linear infinite;
          z-index: -1;
        }

        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }

        /* Patrón de fondo para las tarjetas de logros */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 14px 14px;
        }
      `}</style>
    </div>
  );
};

export default About;