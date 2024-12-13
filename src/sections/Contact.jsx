// src/sections/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();
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
          message: form.message+"\n\n\nMi nombre es: "+form.name+"\nMi telefono es: "+form.phone+"\nMi email es: "+form.email,
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
              phone: "",
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
    <section id="contact" className="w-full">
      <h3 className="text-lg font-bold mb-4">Contacto</h3>
      {alert.show && <Alert {...alert} />}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-full">
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">Nombre</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder="ej: Isaac"
          />
        </label>
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">Correo</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder="ej: botopia.sas@gmail.com"
          />
        </label>
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">Celular</span>
          <textarea
            name="phone"
            value={form.phone}
            onChange={handleChange}
            rows={1}
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder="No es obligatorio, pero nos ayudará a contactarte"
          />
        </label>
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">Mensaje</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder="Me gustaría hacer mi sueño realidad..."
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#9165f3] text-white rounded hover:bg-[#7e53c1] transition flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          {loading ? "Enviando..." : "Enviar"}
          {!loading && (
            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="w-4 h-4"
            />
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
