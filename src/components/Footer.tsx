const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Giovany Franco - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;