import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Briefcase } from 'lucide-react';

const skills = [
  { 
    name: 'Optimización de Procesos', 
    icon: TrendingUp, 
    items: ['Lean Manufacturing', 'Six Sigma', 'Kaizen', 'Análisis de Valor'] 
  },
  { 
    name: 'Análisis de Datos', 
    icon: BarChart2, 
    items: ['Excel Avanzado', 'Power BI', 'Minitab', 'Python para análisis'] 
  },
  { 
    name: 'Gestión de Proyectos', 
    icon: Briefcase, 
    items: ['PMBOK', 'Agile', 'MS Project', 'Gestión de Riesgos'] 
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Mis Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon size={24} className="text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;