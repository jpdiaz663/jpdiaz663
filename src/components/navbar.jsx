import { useEffect, useState } from "react";
import swordSvg from "../assets/gemini-svg-sword.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showJumpButton, setShowJumpButton] = useState(false);

  const NAV_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "#about", label: "Sobre Mí" },
    { href: "#contact", label: "Contáctame" }
  ];

  const handleMenuClose = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setShowJumpButton(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="bg-black/80 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <ul className="hover:cursor-pointer font-mono font-bold text-lg">
            <li>
              <a
                href="/"
                className="text-gray-200 hover:text-orange-400 transition-colors"
              >
                Juan Diaz
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none hover:text-orange-400 transition-colors"
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
                  className="hover:text-orange-400 transition-colors duration-200"
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

      {showJumpButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Jump to top"
          className="fixed bottom-6 right-6 z-50 drop-shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black/40"
        >
          <img
            src={swordSvg}
            width={56}
            height={56}
            alt=""
            aria-hidden="true"
            className="block pointer-events-none select-none"
          />
        </button>
      )}
    </>
  );
};

export default Navbar;
