
import React from 'react';
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell size={24} className="text-gym-red" />
              <span className="text-xl font-bold">TreinoForte</span>
            </div>
            <p className="text-gym-gray">
              Transformando vidas através do treinamento de força e bem-estar.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gym-gray hover:text-gym-red transition-colors">Início</Link></li>
              <li><Link to="/planos" className="text-gym-gray hover:text-gym-red transition-colors">Planos</Link></li>
              <li><Link to="/sobre" className="text-gym-gray hover:text-gym-red transition-colors">Sobre</Link></li>
              <li><Link to="/treinadores" className="text-gym-gray hover:text-gym-red transition-colors">Treinadores</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horários</h3>
            <ul className="space-y-2 text-gym-gray">
              <li>Segunda - Sexta: 6:00 - 23:00</li>
              <li>Sábados: 8:00 - 18:00</li>
              <li>Domingos: 8:00 - 14:00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gym-gray">
              <li>Rua Exemplo, 123 - Centro</li>
              <li>contato@treinoforte.com</li>
              <li>(11) 9999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gym-gray/20 mt-8 pt-8 text-center text-gym-gray">
          <p>&copy; {new Date().getFullYear()} TreinoForte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
