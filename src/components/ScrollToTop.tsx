import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will automatically scroll to top whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of page when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scrolling, 'smooth' for animated
    });
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
