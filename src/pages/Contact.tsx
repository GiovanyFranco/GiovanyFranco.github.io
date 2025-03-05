import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] bg-repeat animate-slide" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl"
        >
          Contáctame
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gray-800/30 backdrop-blur-md p-8 rounded-xl shadow-2xl 
                     border border-transparent bg-gradient-to-br from-gray-800/50 to-gray-900/50
                     hover:border-blue-500/30 transition-all duration-500"
          >
            <h3 className="text-3xl font-semibold mb-10 text-white text-center 
                         bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Información de Contacto
            </h3>
            <div className="space-y-8">
              {[
                { Icon: Mail, text: 'giovany.franco.gf@gmail.com', href: 'mailto:giovany.franco.gf@gmail.com' },
                { Icon: Phone, text: '+57 322 4849 506', href: 'tel:+573224849506' },
                { Icon: MapPin, text: 'Chía, Cundinamarca, Colombia', href: 'https://goo.gl/maps/chia' },
              ].map(({ Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center group p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                  </div>
                  <span className="text-white text-lg ml-4 group-hover:translate-x-2 transition-transform duration-300">
                    {text}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-2xl font-semibold mb-8 text-white text-center 
                           bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Redes Sociales
              </h4>
              <div className="flex justify-center space-x-6">
                {[
                  { Icon: Linkedin, href: '#', color: 'hover:bg-blue-600/80' },
                ].map(({ Icon, href, color }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              backdrop-blur-sm border border-blue-500/30 ${color} 
                              hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300`}
                  >
                    <Icon size={24} className="text-blue-400 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gray-800/30 backdrop-blur-md p-8 rounded-xl shadow-2xl 
                     border border-transparent bg-gradient-to-br from-gray-800/50 to-gray-900/50
                     hover:border-purple-500/30 transition-all duration-500"
          >
            <h3 className="text-3xl font-semibold mb-8 text-white 
                         bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Envíame un mensaje
            </h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              {[
                { label: 'Nombre', type: 'text', name: 'name' },
                { label: 'Email', type: 'email', name: 'email' },
                { label: 'Asunto', type: 'text', name: 'subject' },
              ].map(({ label, type, name }) => (
                <div key={name} className="group">
                  <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             hover:border-blue-400 transition-all duration-300"
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           hover:border-blue-400 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 
                         hover:from-blue-600 hover:to-blue-700
                         text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 
                         shadow-lg hover:shadow-xl hover:shadow-blue-500/30
                         border border-transparent hover:border-blue-500/50"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;