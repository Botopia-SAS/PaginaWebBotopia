
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_5h93uqj

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_5h93uqj',
        'template_v8xt1a4',
        {
          from_name: form.name,
          to_name: 'Botopia',
          from_email: form.email,
          to_email: 'botopia.sas@gmail.com',
          message: form.message,
        },
        'W6EZWFENOrmXlCRcx',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Gracias por tu mensaje 😃',
            type: 'succes',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "No recibí tu mensaje 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Contáctanos</h3>
          <p className="text-lg text-white-600 mt-3">
          Necesitas soluciones tecnológicas en tu empresa, o quieres estar a la vanguardia de los nuevos avances, contáctanos estamos para ayudarte.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ejm., Botopia SAS"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Correo</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ejm., botopia.sas@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Me gustaría hacer mi sueño realidad..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
