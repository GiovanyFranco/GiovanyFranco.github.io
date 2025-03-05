import React from 'react'
import { Code, Database, Globe } from 'lucide-react'

const skills = [
  { name: 'Frontend', icon: Globe, items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'] },
  { name: 'Backend', icon: Code, items: ['Node.js', 'Express', 'Python', 'Django', 'PHP'] },
  { name: 'Bases de Datos', icon: Database, items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'] }
]

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Mis Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <skill.icon size={24} className="text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills