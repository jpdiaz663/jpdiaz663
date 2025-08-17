import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <h1 className="text-white font-mono font-bold text-lg">
          Juan Diaz
        </h1>

        {/* Botón hamburguesa en mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-mono">
          <li><a href="#home" className="hover:text-yellow-400">Inicio</a></li>
          <li><a href="https://folll.io/juanpablod%C3%ADazalbarracin/resume" target="_blank" className="hover:text-yellow-400">Sobre Mí</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contáctame</a></li>
        </ul>
      </div>

      {/* Menú desplegable en mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/90 text-gray-200 font-mono space-y-4 py-4">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="https://folll.io/juanpablod%C3%ADazalbarracin/resume" target="_blank" onClick={() => setIsOpen(false)}>Sobre Mí</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contáctame</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
