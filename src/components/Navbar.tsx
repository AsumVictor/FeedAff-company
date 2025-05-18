import React, { useState, useEffect } from 'react';
import { Menu, Phone, Search, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Contact and Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                <Phone className="h-4 w-4 text-[#1a3c1e]" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">Call us Now</p>
                <p className="text-sm font-bold text-white">+23353654208</p>
              </div>
            </div>

            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Search className="h-5 w-5 text-white" />
            </button>

            <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-[#1a3c1e] font-medium py-2 px-4 rounded-full flex items-center space-x-2">
              <span>Get In Touch</span>
              <span className="text-lg">↗</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a3c1e]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <MobileNavLinks closeMenu={() => setIsMobileMenuOpen(false)} />
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#1a3c1e]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">Call us Now</p>
                    <p className="text-sm font-bold text-white">+23353654208</p>
                  </div>
                </div>
                
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1a3c1e] font-medium py-2 px-4 rounded-full flex items-center justify-center space-x-2">
                  <span>Get In Touch</span>
                  <span className="text-lg">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks: React.FC = () => {
  const navItems = ['HOME', 'SHOP', 'SERVICES', 'ABOUT US', 'BLOG', 'CONTACT US'];
  
  return (
    <>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
        >
          {item}
        </a>
      ))}
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const navItems = ['HOME', 'SHOP', 'SERVICES', 'ABOUT US', 'BLOG', 'CONTACT US'];
  
  return (
    <>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="text-white text-base font-medium py-2 hover:text-yellow-400 transition-colors"
          onClick={closeMenu}
        >
          {item}
        </a>
      ))}
    </>
  );
};

export default Navbar;