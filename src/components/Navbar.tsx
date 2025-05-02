
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gym-dark text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell size={24} className="text-gym-red" />
          <span className="text-xl font-bold">TreinoForte</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gym-red transition-colors">Início</Link>
          <Link to="/planos" className="hover:text-gym-red transition-colors">Planos</Link>
          <Link to="/sobre" className="hover:text-gym-red transition-colors">Sobre</Link>
          <Link to="/treinadores" className="hover:text-gym-red transition-colors">Treinadores</Link>
          <Link to="/contato" className="hover:text-gym-red transition-colors">Contato</Link>
        </div>

        <div className="hidden md:block">
          <Button variant="default" className="bg-gym-red hover:bg-gym-red/90">
            Comece Agora
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-2 pb-4 bg-gym-dark border-t border-gym-gray/30`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <Link to="/" className="block py-2 hover:text-gym-red transition-colors" onClick={toggleMenu}>Início</Link>
          <Link to="/planos" className="block py-2 hover:text-gym-red transition-colors" onClick={toggleMenu}>Planos</Link>
          <Link to="/sobre" className="block py-2 hover:text-gym-red transition-colors" onClick={toggleMenu}>Sobre</Link>
          <Link to="/treinadores" className="block py-2 hover:text-gym-red transition-colors" onClick={toggleMenu}>Treinadores</Link>
          <Link to="/contato" className="block py-2 hover:text-gym-red transition-colors" onClick={toggleMenu}>Contato</Link>
          <Button variant="default" className="bg-gym-red hover:bg-gym-red/90 w-full">
            Comece Agora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
