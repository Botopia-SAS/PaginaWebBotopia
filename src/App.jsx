import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
// import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Customers from "./sections/Customers";
import Services from "./sections/Services";
import ServiceDetail from "./sections/ServiceDetail";
import Contact from "./sections/Contact";
import WhatsAppButton from "./sections/WhatsAppButton"; // Importamos el botón de WhatsApp

const App = () => {
  return (
    <main className="max-w-none mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="customers">
                <Customers />
              </section>

              {/* <section id="about">
                <About />
              </section> */}

              <section id="services">
                <Services />
              </section>

              <section id="work">
                <Projects />
              </section>
            </>
          }
        />

        {/* Ruta dinámica para los detalles del servicio */}
        <Route path="/servicio/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </main>
  );
};

export default App;
