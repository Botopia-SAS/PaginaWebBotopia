import { useState } from "react";
import { navLinks } from "../constants/index.js";
import { Link, NavLink } from "react-router-dom";
import { translatePageAutomatically } from "../utils/translatePageAutomatically";

const NavItems = ({ handleScroll }) => {
  return (
    <ul className="nav-ul flex space-x-6">
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className={`nav-li relative ${
            id === "contact"
              ? "bg-[#9165f3] px-4 py-2 rounded-lg text-white"
              : ""
          }`}
        >
          {id === "about" ? (
            // Enlace dinámico para "Conócenos"
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white font-medium hover:text-[#7e53c1] transition-colors cursor-pointer text-lg ${
                  isActive ? "text-[#9165f3]" : "text-neutral-400"
                }`
              }
            >
              {name}
            </NavLink>
          ) : (
            <a
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(href);
              }}
              className={`text-white font-medium hover:text-[#7e53c1] transition-colors cursor-pointer text-lg ${
                id === "contact" ? "text-white" : "text-neutral-400"
              }`}
            >
              {name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [language, setLanguage] = useState("en"); // Idioma actual
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = async () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);

    // Llama a la función de traducción automática
    await translatePageAutomatically(newLanguage);
  };
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  // Función para manejar el desplazamiento suave (ajustable con offset)
  const handleScroll = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -70; // Ajuste de posición general
      const topPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`No se encontró el elemento con href: ${href}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 mx-auto c-space">
          <Link
            to="/"
            className="text-white font-bold text-2xl hover:text-[#9165f3] transition-colors"
          >
            Botopia
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-[#9165f3] focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === "en" ? "Español" : "English"}
          </button>

          <nav className="sm:flex hidden">
            <NavItems handleScroll={handleScroll} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems handleScroll={handleScroll} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
