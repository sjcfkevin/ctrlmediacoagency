
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Testimonials', path: '/testimonials' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all py-4`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold text-primary">
          <img
            src="./logo2.png"
            alt="Our team collaborating"
            className="w-[60px] object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`link-underline font-medium ${isActive(link.path) ? 'text-primary' : 'text-primary'
                }`}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          ))}
          <Button asChild className="neo-button bg-primary hover:bg-primary/90">
            <a
              href="https://form.typeform.com/to/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden md:bg-black absolute left-0 right-0 glassmorphism transition-all duration-300 ease-in-out overflow-hidden  ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{zIndex:'9999', backgroundColor:"#1d1816"}}
      >
        <nav className="flex flex-col items-center py-5 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-full text-center py-2 ${isActive(link.path) ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          ))}
          <Button
            asChild
            className="neo-button w-[80%] mt-2 bg-primary hover:bg-primary/90"
          >
            <a
              href="https://form.typeform.com/to/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
