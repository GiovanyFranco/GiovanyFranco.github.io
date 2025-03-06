import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Hola, soy <span className="text-blue-400">Tu Nombre</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
          Desarrollador Web Full Stack
        </p>
        <div className="flex justify-center space-x-4 mb-8 animate-fade-in-delay-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="mailto:tu@email.com" className="text-white hover:text-blue-400 transition">
            <Mail size={24} />
          </a>
        </div>
        <a href="#proyectos" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition animate-bounce">
          Ver mis proyectos
        </a>
      </div>
    </section>
  )
}

export default Hero