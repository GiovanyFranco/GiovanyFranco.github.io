import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formValues, setFormValues] = useState({ name: '', email: '', subject: '', message: '' });
  
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulación de envío - Reemplazar con tu lógica real de envío de formulario
    setTimeout(() => {
      setFormStatus('success');
      setFormValues({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Elementos decorativos del fondo */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="cyber-grid"></div>
        
        {/* Efectos de círculos difuminados */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        {/* Encabezado con animación */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold relative inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Contáctame
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ¿Interesado en optimizar la eficiencia operativa de su organización? 
            Estoy aquí para ayudarle a implementar soluciones efectivas de mejora continua.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Tarjeta de información de contacto */}
          <motion.div 
            className="lg:col-span-5 relative p-0.5 rounded-2xl overflow-hidden"
            ref={infoRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInfoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-transparent rounded-2xl blur-sm"></div>
            
            <div className="relative h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 overflow-hidden">
              {/* Patrón de fondo */}
              <div className="absolute inset-0 opacity-10">
                <div className="contact-circuit-pattern"></div>
              </div>
              
              {/* Contenido */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInfoInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  {[
                    { 
                      icon: Mail, 
                      label: "Email", 
                      value: "giovany.franco.gf@gmail.com", 
                      href: "mailto:giovany.franco.gf@gmail.com", 
                      gradient: "from-cyan-500 to-blue-500" 
                    },
                    { 
                      icon: Phone, 
                      label: "Teléfono", 
                      value: "+57 322 4849 506", 
                      href: "tel:+573224849506",
                      gradient: "from-purple-500 to-pink-500" 
                    },
                    { 
                      icon: MapPin, 
                      label: "Ubicación", 
                      value: "Bogotá, Colombia", 
                      href: "https://maps.google.com/?q=Bogotá,Colombia", 
                      gradient: "from-amber-500 to-orange-500" 
                    }
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 transition-all duration-300 group relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + (index * 0.15), duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Efecto hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.gradient} bg-opacity-20 mr-4`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                        <div className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {item.value}
                        </div>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Redes sociales */}
                <div className="mt-12">
                  <h3 className="text-lg font-medium mb-6 text-gray-300">Sígueme en:</h3>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/giovany-franco-palacio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-3 bg-gray-900 rounded-lg border border-gray-700/50 group-hover:border-blue-500/50 transition-colors duration-300">
                        <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div 
            className="lg:col-span-7 relative"
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="p-0.5 bg-gradient-to-br from-cyan-500/50 to-purple-500/50 rounded-2xl overflow-hidden h-full">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full relative">
                {/* Efecto de líneas */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="contact-line-pattern"></div>
                </div>
                
                <h2 className="text-2xl font-bold mb-8 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Envíame un Mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formValues.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                          placeholder="Tu nombre"
                          disabled={formStatus === 'sending' || formStatus === 'success'}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                          placeholder="tu@email.com"
                          disabled={formStatus === 'sending' || formStatus === 'success'}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Asunto */}
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Asunto</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                        placeholder="Asunto de tu mensaje"
                        disabled={formStatus === 'sending' || formStatus === 'success'}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Mensaje */}
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 resize-none"
                        placeholder="¿En qué puedo ayudarte?"
                        disabled={formStatus === 'sending' || formStatus === 'success'}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Botón de envío */}
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className="relative group w-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                      <div className={`relative flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gray-900 text-white font-medium ${
                        formStatus === 'success' ? 'bg-green-900/80' : 
                        formStatus === 'error' ? 'bg-red-900/80' : ''
                      }`}>
                        {formStatus === 'idle' && (
                          <>
                            <span>Enviar Mensaje</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                        
                        {formStatus === 'sending' && (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Enviando...</span>
                          </>
                        )}
                        
                        {formStatus === 'success' && (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>¡Mensaje enviado!</span>
                          </>
                        )}
                        
                        {formStatus === 'error' && (
                          <>
                            <span>Error al enviar</span>
                            <span className="ml-2">Intentar de nuevo</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Mapa o ubicación */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="p-0.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl">
            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-300">
                Mi Ubicación
              </h3>
              
              <div className="w-full h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280726978!2d-74.17402466853913!3d4.648625940356264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1654526235154!5m2!1ses-419!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Giovany Franco"
                  className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Estilos CSS para efectos visuales */}
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
        
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
        
        /* Patrón de circuitos para el fondo de la tarjeta de contacto */
        .contact-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h50v50H0z' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M50 0h50v50H50z' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M0 50h50v50H0z' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M50 50h50v50H50z' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M25 0v100' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M50 0v100' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M75 0v100' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M0 25h100' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M0 50h100' stroke='%23334155' stroke-width='0.5'/%3E%3Cpath d='M0 75h100' stroke='%23334155' stroke-width='0.5'/%3E%3Ccircle cx='25' cy='25' r='5' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3Ccircle cx='75' cy='75' r='5' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3C/svg%3E");
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }
        
        /* Patrón de líneas para el fondo del formulario */
        .contact-line-pattern {
          background: linear-gradient(-45deg, rgba(79, 70, 229, 0.05) 25%, transparent 25%, transparent 50%, rgba(79, 70, 229, 0.05) 50%, rgba(79, 70, 229, 0.05) 75%, transparent 75%, transparent);
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
          opacity: 0.3;
          animation: bg-slide 15s linear infinite;
        }
        
        @keyframes bg-slide {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100px 100px;
          }
        }
        
        /* Mejoras en campos de formulario */
        input:focus, textarea:focus {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Contact;