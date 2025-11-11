import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "https://folll.io/juanpablod%C3%ADazalbarracin/resume", label: "Sobre Mí", external: true },
    { href: "#contact", label: "Contáctame" }
  ];

  const handleMenuClose = () => setIsOpen(false);

  return (
    <nav 
      className="bg-black/80 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-white font-mono font-bold text-lg">Juan Diaz</h1>

        <button
          className="md:hidden text-white focus:outline-none hover:text-yellow-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="text-2xl">☰</span>
        </button>

        <ul className="hidden md:flex gap-8 text-gray-200 font-mono">
          {NAV_LINKS.map(({ href, label, external }) => (
            <li key={href}>
              <a 
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul 
          id="mobile-menu"
          className="md:hidden flex flex-col items-center bg-black/90 text-gray-200 font-mono space-y-4 py-4"
        >
          {NAV_LINKS.map(({ href, label, external }) => (
            <li key={href}>
              <a 
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                onClick={handleMenuClose}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
