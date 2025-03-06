import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { 
  Briefcase, GraduationCap, Award, Book, ChevronDown, Calendar, MapPin, Target,
  ArrowRight, CheckCircle, BarChart2, TrendingUp, Zap, Users, BarChart, PieChart,
  LineChart, Database, Gauge
} from 'lucide-react';

const Resume = () => {
  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  
  // Datos estructurados para métricas clave - Actualizados con nuevos logros
  const keyMetrics = [
    { value: "+20%", label: "Mejora en eficiencia", icon: <BarChart2 className="w-6 h-6" />, color: "from-cyan-500 to-blue-500" },
    { value: "-18%", label: "Reducción de costos", icon: <TrendingUp className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { value: "0", label: "Accidentes (9 meses)", icon: <CheckCircle className="w-6 h-6" />, color: "from-emerald-500 to-teal-500" },
    { value: "+17pp", label: "Aumento del OEE", icon: <Target className="w-6 h-6" />, color: "from-amber-500 to-orange-500" }
  ];

  // Datos de experiencia laboral con estilo visual mejorado
  const workExperience = [
    {
      title: "Coordinador de Mantenimiento Productivo Total (TPM)",
      company: "RICH'S Colombia",
      logo: "https://placehold.co/100?text=RICH'S",
      location: "Colombia",
      period: "Enero 2025 - Actualidad",
      highlightColor: "border-green-500/30",
      glowColor: "shadow-green-500/10",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      skills: ["TPM", "Lean Manufacturing", "Power BI", "Excelencia Operacional"],
      achievements: [
        { text: "Impacto económico de 120 millones anuales en proyectos de ahorro", icon: <BarChart2 size={16} className="text-green-400" /> },
        { text: "Aumento del OEE en +5 puntos porcentuales", icon: <Gauge size={16} className="text-blue-400" /> },
        { text: "Reducción de pérdidas en Yield en más del 0.8%", icon: <TrendingUp size={16} className="text-purple-400" /> }
      ],
      responsibilities: [
        "Implementación de modelo integral de Excelencia Operacional",
        "Desarrollo de plan de gestión de pérdidas críticas",
        "Optimización de procesos de mantenimiento preventivo",
        "Implementación de herramientas de diagnóstico y control estadístico",
        "Identificación de desperdicios y oportunidades de mejora",
        "Desarrollo de cuadro de mando integral en Power BI",
        "Implementación de cultura de mejora continua"
      ]
    },
    {
      title: "Ingeniero de Producción – Mejora Continua",
      company: "Guirnaldas / Innovaflora",
      logo: "https://placehold.co/100?text=IF", // Usar placeholder en lugar de ruta local
      location: "Tocancipá, Cundinamarca",
      period: "2019 - 2024",
      highlightColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/10",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      skills: ["Lean Manufacturing", "Six Sigma", "Liderazgo"],
      achievements: [
        { text: "Mejora del 20% en eficiencia del proceso productivo", icon: <BarChart2 size={16} className="text-cyan-400" /> },
        { text: "Reducción del 10% en costos de producción", icon: <TrendingUp size={16} className="text-green-400" /> },
        { text: "Dirección de 6 supervisores", icon: <Users size={16} className="text-amber-400" /> }
      ],
      responsibilities: [
        "Liderazgo en administración y gestión de indicadores de producción",
        "Control de costos y eficiencia del proceso productivo",
        "Liderazgo de proyectos de mejora en diversas áreas"
      ]
    },
    {
      title: "Coordinador de Producción",
      company: "ETERNA S.A",
      logo: "https://placehold.co/100?text=ETERNA", // Usar placeholder en lugar de ruta local
      location: "Bogotá, Colombia",
      period: "2018 Mayo - 2019 Abril",
      highlightColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/10",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      skills: ["Productividad", "Calidad", "Lean"],
      achievements: [
        { text: "Reducción del 18% en costo de envase", icon: <TrendingUp size={16} className="text-green-400" /> },
        { text: "Reducción del 11% en desperdicio", icon: <TrendingUp size={16} className="text-green-400" /> },
        { text: "Aumento del OEE de 67% a 82% (+17pp)", icon: <BarChart2 size={16} className="text-cyan-400" /> }
      ],
      responsibilities: [
        "Liderazgo en mejora de productividad y calidad",
        "Implementación de Lean Manufacturing y herramientas operativas",
        "Coordinación de equipos multifuncionales para proyectos estratégicos"
      ]
    },
    {
      title: "Shift Process Leader",
      company: "British American Tobacco",
      logo: "https://placehold.co/100?text=BAT", // Usar placeholder en lugar de ruta local
      location: "Caracas, Venezuela",
      period: "2014 Junio - 2017 Diciembre",
      highlightColor: "border-amber-500/30",
      glowColor: "shadow-amber-500/10",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-400",
      skills: ["Gestión", "Lean", "Seguridad"],
      achievements: [
        { text: "Aumento de eficiencia de la fábrica en 4% anual", icon: <BarChart2 size={16} className="text-cyan-400" /> },
        { text: "Reducción de pérdidas de materiales en 2%", icon: <TrendingUp size={16} className="text-green-400" /> },
        { text: "Logro de '0' accidentes durante 9 meses", icon: <CheckCircle size={16} className="text-emerald-400" /> }
      ],
      responsibilities: [
        "Gestión de recursos y programación de planta",
        "Implementación de Lean Manufacturing y seguimiento de indicadores",
        "Mejora continua en procesos de producción"
      ]
    }
  ];

  // Datos de educación y certificaciones
  const education = [
    {
      degree: "Administración De Empresas",
      institution: "Universidad Nacional Experímental Símon Rodríguez",
      year: "2014",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Liderazgo & Trabajo en equipo en grupos de Mejora Continua",
      institution: "Universidad Politécnica de Valencia",
      year: "2019",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="cyber-grid"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10">
        {/* Header with visual enhancement */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="inline-block relative"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Experiencia Profesional
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Especialista en <span className="text-cyan-400">mejora continua</span> y{" "}
            <span className="text-purple-400">liderazgo estratégico</span> con historial 
            comprobado de resultados
          </motion.p>
          
          {/* Key metrics highlight section - Updated with new metrics */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="relative p-0.5 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="bg-gray-800/80 h-full rounded-xl p-4 flex flex-col items-center text-center relative">
                  <div className={`p-2 rounded-full bg-gradient-to-br ${metric.color} bg-opacity-20 mb-2`}>
                    {metric.icon}
                  </div>
                  <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.header>

        {/* Professional Summary - Enhanced with modern design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="p-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-xl overflow-hidden">
            <div className="bg-gray-900/95 p-6 sm:p-8 rounded-xl relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                <div className="p-3 bg-cyan-500/20 rounded-full">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Resumen Profesional
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Especialista en administración de procesos industriales con enfoque en producción, 
                calidad y planificación. Líder de proyectos estratégicos de mejoramiento en la cadena 
                de abastecimiento bajo las filosofías de <span className="text-cyan-400">Lean Manufacturing</span>, 
                <span className="text-purple-400"> Kaizen</span>, <span className="text-emerald-400">5s</span>, 
                y <span className="text-amber-400">TPM</span> (Gerencia Productiva Total) orientado a optimizar 
                procesos y mejorar el costo industrial.
              </p>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience - Modern Timeline */}
          <motion.section
            ref={experienceRef}
            className="lg:col-span-2 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Experience Header with visual line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Experiencia Laboral</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-purple-500/50 to-transparent"></div>
            </div>
            
            {/* Timeline with modern styling */}
            <div className="relative pl-8 border-l-2 border-gray-700">
              {workExperience.map((job, index) => {
                const isVisible = isExperienceInView;
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: isVisible ? 0.2 + (index * 0.1) : 0 
                    }}
                    className={`mb-12 relative border ${job.highlightColor} border-opacity-30 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 ${job.glowColor} hover:shadow-lg transition-all duration-300`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[41px] p-1.5 rounded-full border-4 border-gray-900 ${job.iconBg}`}>
                      <div className={`w-3 h-3 rounded-full ${job.iconColor.replace('text-', 'bg-')}`}></div>
                    </div>
                    
                    {/* Date bubble */}
                    <div className="absolute -top-3 -left-3 px-3 py-1 bg-gray-800 rounded-full border border-gray-700 flex items-center gap-1.5 text-sm shadow-lg">
                      <Calendar size={14} className={job.iconColor} />
                      <span className="text-gray-300">{job.period}</span>
                    </div>
                    
                    {/* Company Location */}
                    <div className="absolute -top-3 right-6 px-3 py-1 bg-gray-800 rounded-full border border-gray-700 flex items-center gap-1.5 text-sm">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-gray-300">{job.location}</span>
                    </div>
                    
                    {/* Job Content */}
                    <div className="mt-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <div className={`text-lg ${job.iconColor}`}>
                            {job.company}
                          </div>
                        </div>
                      </div>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {job.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2.5 py-1 rounded-full border ${job.highlightColor} ${job.iconBg} font-medium`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Key Achievements with visual badges */}
                      <div className="mb-5 bg-gray-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-sm uppercase tracking-wider mb-3 text-gray-400">Logros Destacados</h4>
                        <div className="space-y-3">
                          {job.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="p-1 rounded-full bg-gray-700/50">
                                {achievement.icon}
                              </div>
                              <span>{achievement.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Responsibilities with icons */}
                      <div>
                        <h4 className="font-medium text-sm uppercase tracking-wider mb-3 text-gray-400">Responsabilidades</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight size={16} className={`mt-1 ${job.iconColor}`} />
                              <span className="text-gray-300">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Education and Certifications - Modern Card Design */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            {/* Education Header with visual line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-cyan-500/20 rounded-full">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold">Educación</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            </div>
            
            {/* Education Cards with modern styling */}
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className={`relative p-0.5 rounded-xl overflow-hidden bg-gradient-to-r ${edu.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="bg-gray-800/90 p-5 rounded-[calc(0.75rem-1px)] h-full">
                    <div className="mb-1 text-gray-400 text-sm">{edu.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <div className="text-gray-300">{edu.institution}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-500/20 rounded-full">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold">Certificaciones</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-amber-500/50 to-transparent"></div>
            </div>
            
            {/* Certifications with enhanced visual style */}
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ul className="space-y-3">
                {[
                  "Yellow Belt Lean Six Sigma (2023)",
                  "Becoming a Six Sigma Black Belt (2020)",
                  "Excel Statistical Process Control (2019)",
                  "Project Online Profesional (2019)"
                ].map((cert, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="p-1.5 rounded-full bg-amber-500/20 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    </div>
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Other Courses Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-full">
                <Book className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Otros Cursos</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>
            
            {/* Courses with multicolumn layout */}
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "5's Mejora Continua",
                  "Mantenimiento Autónomo",
                  "Mantenimiento Planificado",
                  "Fundamentos de Six Sigma",
                  "Metodología Q2",
                  "Champions UPS",
                  "Presentaciones Efectivas",
                  "Diseño Instruccional",
                  "Prácticas de Empoderamiento",
                  "DDMRP"
                ].map((course, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                  >
                    <Zap size={14} className="text-emerald-400" />
                    <span className="text-sm text-gray-300">{course}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        </div>
        
        {/* Bottom Download Button for Resume */}
        <motion.div
          className="flex justify-center mb-10 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <a 
            href="/CV-GiovanyFranco.pdf" 
            download
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-sm group-hover:blur-md group-hover:opacity-90 transition-all duration-300"></div>
            <button className="relative bg-gray-900 text-white py-3 px-8 rounded-lg border border-gray-700/50 font-medium flex items-center gap-2">
              <Award size={18} />
              Descargar CV Completo
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </motion.div>
      </motion.div>
      
      {/* Global styles for visual effects */}
      {/* @ts-ignore */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(64, 64, 91, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(64, 64, 91, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
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
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
      `}</style>
    </div>
  );
};

export default Resume;