import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import Contact from "./Contact.jsx";

const Footer = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5h93uqj",
        "template_v8xt1a4",
        {
          from_name: form.name,
          to_name: "Botopia",
          from_email: form.email,
          to_email: "botopia.sas@gmail.com",
          message: form.message,
        },
        "W6EZWFENOrmXlCRcx"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Gracias por tu mensaje 😃",
            type: "succes",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "No recibí tu mensaje 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 text-center md:text-left">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Botopia</h2>
          <p className="text-sm">¡Comencemos a transformar el futuro juntos!</p>
          <div className="flex gap-3 mt-4">
            {/* Redes sociales */}
            <a
              href="https://github.com/Botopia-SAS"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/BotopiaSAS"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/botopia.tech?igsh=MTNoNGRuajZ0MjBzcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@botopia.tech?_t=8rRlCtatURD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/tiktok.svg" alt="tiktok" className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-6 text-left md:text-left md:mt-10 h-full">
            <h3 className="text-lg font-bold mb-4">Accesos rápidos</h3>
            <ul className="space-y-2 h-full">
              <li>
                <a href="/terminos" className="hover:text-[#9165f3] transition">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-[#9165f3] transition">
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
              <div className="mt-6 text-left md:text-left h-full">
                <li className="md:mt-12">
                  <a
                    href="/trabaja-con-nosotros"
                    className="hover:text-[#FFFFFF] transition font-bold md:mt-10"
                  >
                    contacto@botopia.tech
                  </a>
                </li>
                <li className="md:mt-1">
                  <a
                    href="/trabaja-con-nosotros"
                    className="hover:text-[#FFFFFF] transition font-bold"
                  >
                    (+57) 322 872 6267
                  </a>
                </li>
              </div>

            </ul>
          </div>
        </div>

        {/* Sección de Contacto */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </div>

      {/* Footer inferior */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        © 2024 Todos los derechos reservados a Botopia.
      </div>
    </footer>
  );
};

export default Footer;
