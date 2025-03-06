import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Listener para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil cuando se cambia de página
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Items de navegación con iconos y rutas
  const navItems = [
    { name: 'Inicio', path: '/', icon: <Home size={18} /> },
    { name: 'Sobre Mi', path: '/sobre-mi', icon: <User size={18} /> },
    { name: 'Resumen', path: '/resume', icon: <FileText size={18} /> },
    { name: 'Contacto', path: '/contact', icon: <Mail size={18} /> }
  ];

  // Verificar si una ruta está activa
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      {/* Fondo con efecto de cristal */}
      <div 
        className={`absolute inset-0 backdrop-blur-md transition-all duration-500 ${
          scrolled ? 'bg-gray-900/85 shadow-lg' : 'bg-transparent'
        }`}
      />
      
      {/* Borde inferior con gradiente */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Logo text */}
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 relative">
                Giovany Franco
              </span>
            </motion.div>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:block relative">
            <motion.ul 
              className="flex space-x-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navItems.map((item, idx) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (idx * 0.1) }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg flex items-center gap-1.5 overflow-hidden group`}
                  >
                    {/* Background when active */}
                    {isActive(item.path) && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                        layoutId="navBackground"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <span className={`transition-colors duration-300 ${
                      isActive(item.path) ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {item.icon}
                    </span>
                    
                    {/* Text */}
                    <span className={`font-medium transition-colors duration-300 ${
                      isActive(item.path) ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Bottom bar indicator */}
                    {isActive(item.path) && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                        layoutId="navIndicator"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          
          {/* Menu toggle - Mobile */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-2 rounded-lg bg-gray-800/80 border border-gray-700/50 transition-colors group-hover:border-cyan-500/30">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden relative"
          >
            {/* Background with blur effect */}
            <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"></div>
            
            {/* Glowing lines effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            
            <nav className="container mx-auto px-6 py-6 relative">
              <ul className="space-y-1">
                {navItems.map((item, idx) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (idx * 0.1) }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 rounded-lg relative overflow-hidden ${
                        isActive(item.path) 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                          : 'hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50'
                      } transition-all duration-300`}
                    >
                      <div className={`p-2 rounded-full ${
                        isActive(item.path) ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20' : 'bg-gray-800/80'
                      }`}>
                        <div className={isActive(item.path) ? 'text-cyan-400' : 'text-gray-400'}>
                          {item.icon}
                        </div>
                      </div>
                      <span className={`font-medium ${isActive(item.path) ? 'text-white' : 'text-gray-300'}`}>
                        {item.name}
                      </span>
                      
                      {/* Subtle animation on active */}
                      {isActive(item.path) && (
                        <motion.div 
                          className="absolute right-3 w-1.5 h-1.5 rounded-full bg-cyan-400"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;