import React from 'react'

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    image: 'https://source.unsplash.com/random/800x600?tech',
    link: '#'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    image: 'https://source.unsplash.com/random/800x600?coding',
    link: '#'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    image: 'https://source.unsplash.com/random/800x600?website',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition">Ver más →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects