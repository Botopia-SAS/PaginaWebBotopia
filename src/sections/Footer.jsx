import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna izquierda */}
        <div>
          <h2 className="text-lg font-bold mb-4">Botopia</h2>
          <p className="text-sm">
            ¡Comencemos a transformar el futuro juntos!
          </p>
          <div className="flex gap-3 mt-4">
            {/* Redes sociales */}
            <a
              href="https://github.com/Botopia-SAS"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img
                src="/assets/twitter.svg"
                alt="twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/botopia.tech?igsh=MTNoNGRuajZ0MjBzcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img
                src="/assets/instagram.svg"
                alt="instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.tiktok.com/@botopia.tech?_t=8rRlCtatURD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img
                src="/assets/tiktok.svg"
                alt="tiktok"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Columna central */}
        <div>
          <h3 className="text-lg font-bold mb-4">Accesos rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/terminos"
                className="hover:text-[#9165f3] transition"
              >
                Términos y condiciones
              </a>
            </li>
            <li>
              <a
                href="/privacidad"
                className="hover:text-[#9165f3] transition"
              >
                Políticas de privacidad
              </a>
            </li>
            <li>
              <a
                href="/trabaja-con-nosotros"
                className="hover:text-[#9165f3] transition"
              >
                Trabaja con nosotros
              </a>
            </li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <p className="text-sm">botopia.sas@gmail.com</p>
          <form className="mt-4">
            <label htmlFor="newsletter" className="sr-only">
              Regístrate a nuestro Newsletter
            </label>
            <div className="flex items-center">
              <input
                type="email"
                id="newsletter"
                placeholder="Por favor ingresa tu correo"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#9165f3] text-white rounded-r-lg hover:bg-[#7e53c1] transition"
              >
                →
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        © 2024 Todos los derechos reservados a Botopia.
      </div>
    </footer>
  );
};

export default Footer;