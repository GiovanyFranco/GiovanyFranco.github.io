import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Book, ChevronDown } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Giovany Franco
          </h1>
          <motion.div 
            className="text-2xl text-gray-300 mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Liderazgo Estratégico y Especialista En Mejora Continua
          </motion.div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Briefcase className="mr-2 text-blue-400" /> Resumen Profesional
          </h2>
          <p className="text-lg mb-8 bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto leading-relaxed">
            Especialista en la administración de los procesos industriales, producción, calidad, planeación, planificación, control y seguridad industrial. Líder de proyectos estratégicos de mejoramiento en la cadena de abastecimiento bajo las filosofías de Lean Manufacturing, Kaizen, 5s, TPM (Gerencia Productiva Total) orientado a optimizar procesos y mejorar el costo industrial.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <Briefcase className="mr-2 text-blue-400" /> Experiencia Laboral
            </h3>
            <div className="space-y-8">
              {[
                {
                  title: "Ingeniero de Producción – Mejora Continua",
                  company: "Guirnaldas / Innovaflora",
                  location: "Tocancipá, Cundinamarca",
                  period: "2019 - Presente",
                  responsibilities: [
                    "Liderazgo en administración y gestión de indicadores de producción.",
                    "Control de costos de producción y eficiencia del proceso productivo.",
                    "Dirección de 6 supervisores y cumplimiento de objetivos de producción.",
                    "Liderazgo de proyectos de mejora en diversas áreas de la empresa.",
                    "Mejora del 20% en eficiencia del proceso productivo.",
                    "Reducción del 10% en costos de producción."
                  ]
                },
                {
                  title: "Coordinador de Producción",
                  company: "ETERNA S.A",
                  location: "Bogotá, Colombia",
                  period: "2018 Mayo - 2019 Abril",
                  responsibilities: [
                    "Liderazgo en mejora de productividad y calidad de productos.",
                    "Implementación de Lean Manufacturing y herramientas operativas.",
                    "Coordinación de equipos multifuncionales para proyectos estratégicos.",
                    "Reducción del 18% en costo de envase y 11% en desperdicio.",
                    "Aumento del OEE de 67% a 82% (+17pp)."
                  ]
                },
                {
                  title: "Shift Process Leader",
                  company: "British American Tobacco",
                  location: "Caracas, Venezuela",
                  period: "2014 Junio - 2017 Diciembre",
                  responsibilities: [
                    "Gestión de recursos y programación de planta.",
                    "Implementación de Lean Manufacturing y seguimiento de indicadores.",
                    "Aumento de eficiencia de la fábrica en 4% anual.",
                    "Reducción de pérdidas de materiales productivos en 2%.",
                    "Logro de '0' accidentes durante 9 meses."
                  ]
                }
              ].map((job, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-6 shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                  <div className="text-blue-400 mb-1">{job.company}</div>
                  <div className="text-sm text-gray-400 mb-2">{job.location}</div>
                  <div className="text-sm text-gray-400 mb-4">{job.period}</div>
                  <ul className="list-disc list-inside space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.05) }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <GraduationCap className="mr-2 text-blue-400" /> Educación y Certificaciones
            </h3>
            <div className="space-y-8">
              <motion.div 
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold mb-2">Administración De Empresas</h4>
                <div className="text-blue-400 mb-2">Universidad Nacional Experímental Símon Rodríguez</div>
                <div className="text-gray-400">2014</div>
              </motion.div>
              <motion.div 
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold mb-2">Liderazgo & Trabajo en equipo en grupos de Mejora Continua</h4>
                <div className="text-blue-400 mb-2">Universidad Politécnica de Valencia</div>
                <div className="text-gray-400">2019</div>
              </motion.div>
              <motion.div 
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold mb-2 flex items-center">
                  <Award className="mr-2 text-blue-400" /> Certificaciones
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {[
                    "Yellow Belt Lean Six Sigma (2023)",
                    "Becoming a Six Sigma Black Belt (2020)",
                    "Excel Statistical Process Control (2019)",
                    "Project Online Profesional (2019)"
                  ].map((cert, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    >
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold mb-2 flex items-center">
                  <Book className="mr-2 text-blue-400" /> Otros Cursos
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {[
                    "5's Mejora Continua",
                    "Mantenimiento Autónomo",
                    "Mantenimiento Planificado",
                    "Fundamentos de Six sigma",
                    "Metodología estadística de muestreo de calidad Q2",
                    "Champions en Solución de Problemas UPS",
                    "ABC de Presentaciones Efectivas",
                    "Diseño Instruccional Rol Facilitador",
                    "Prácticas de Empoderamiento",
                    "DDMRP"
                  ].map((course, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                    >
                      {course}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
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
          <ChevronDown size={32} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;