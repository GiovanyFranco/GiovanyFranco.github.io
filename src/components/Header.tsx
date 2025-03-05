import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Inicio', 'Sobre Mi', 'Resumen', 'Contacto'];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white hover:text-blue-400 transition duration-300">
            Giovany Franco
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className={`text-white hover:text-blue-400 transition duration-300 text-lg font-medium relative
                      ${location.pathname === (item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`) ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-blue-400' : ''}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-white hover:text-blue-400 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800"
        >
          <ul className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-white hover:text-blue-400 transition duration-300 text-lg font-medium block
                    ${location.pathname === (item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`) ? 'text-blue-400' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;