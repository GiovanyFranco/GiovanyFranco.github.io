import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Optimización de Línea de Producción',
    description: 'Implementación de metodología Lean para aumentar la eficiencia en un 30%.',
    image: 'https://source.unsplash.com/random/800x600?factory',
    link: '#'
  },
  {
    title: 'Gestión de Cadena de Suministro',
    description: 'Desarrollo de un sistema de seguimiento en tiempo real para reducir costos logísticos.',
    image: 'https://source.unsplash.com/random/800x600?logistics',
    link: '#'
  },
  {
    title: 'Análisis de Datos de Calidad',
    description: 'Creación de un dashboard para monitorear y mejorar la calidad del producto.',
    image: 'https://source.unsplash.com/random/800x600?quality-control',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition">Ver más →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;