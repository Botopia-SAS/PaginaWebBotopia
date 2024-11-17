import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onMouseEnter, onMouseLeave, openMenu, handleScroll }) => {
  return (
    <ul className="nav-ul flex space-x-6">
      {navLinks.map(({ id, href, name, submenu }) => (
        <li
          key={id}
          className={`nav-li relative ${
            id === "contact" ? "bg-[#9165f3] px-4 py-2 rounded-lg text-white" : ""
          }`}
          onMouseEnter={() => name === "Servicios" && onMouseEnter()} // Abre el menú
        >
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(href);
            }}
            className={`font-medium hover:text-[#7e53c1] transition-colors cursor-pointer ${
              id === "contact" ? "text-white" : "text-neutral-400"
            }`}
          >
            {name}
          </a>
          {/* Menú desplegable */}
          {openMenu && submenu && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[#1A1A1A] text-white py-8 px-12 shadow-lg w-[80vw] max-w-[1200px] z-50"
              onMouseEnter={onMouseEnter} // Mantén el menú abierto
              onMouseLeave={onMouseLeave} // Cierra solo si el mouse sale del desplegable
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
                {submenu.map((category) => (
                  <div key={category.id} className="text-left">
                    <h4 className="font-bold text-[#9165f3] mb-4">
                      {category.name}
                    </h4>
                    <ul className="space-y-2">
                      {category.services.map((service, index) => (
                        <li
                          key={index}
                          className="text-sm cursor-pointer hover:text-[#9165f3] transition"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleMouseEnter = () => setOpenMenu(true);
  const handleMouseLeave = () => setOpenMenu(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 mx-auto c-space">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#home");
            }}
            className="text-neutral-400 font-bold text-xl hover:text-[#9165f3] transition-colors"
          >
            Botopia
          </a>
          

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

          <nav className="sm:flex hidden">
            <NavItems
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              openMenu={openMenu}
              handleScroll={handleScroll}
            />
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
