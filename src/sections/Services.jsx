import React, { useState, useEffect } from "react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Soluciones de Ingeniería"
  );
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const servicesData = {
    "Soluciones de Ingeniería": [
      {
        id: "automatizacion",
        title: "Automatización",
        description:
          "Automatizamos procesos en tu empresa para hacerlos más eficaces, eficientes y competitivos.",
      },
      {
        id: "transformacion-digital",
        title: "Innovación y Transformación Digital",
        description:
          "Implementamos tecnologías avanzadas para transformar digitalmente tu negocio.",
      },
      {
        id: "robots",
        title: "Robots",
        description:
          "Diseñamos e implementamos soluciones robóticas para optimizar tus operaciones.",
      },
      {
        id: "consultoria-negocios",
        title: "Consultoría de Negocios",
        description:
          "Te ayudamos a identificar oportunidades y estrategias para maximizar el éxito de tu empresa.",
      },
    ],
    "Softwares Personalizados": [
      {
        id: "tecnologia-medida",
        title: "Tecnología a la Medida",
        description: "Creamos software personalizado adaptado a tus necesidades.",
      },
      {
        id: "sitios-web",
        title: "Desarrollo de Sitio Web",
        description: "Construimos sitios web modernos, funcionales y optimizados.",
      },
      {
        id: "aplicaciones-moviles",
        title: "Desarrollo de Aplicaciones Móviles",
        description:
          "Aplicaciones móviles innovadoras para impulsar tu presencia en dispositivos móviles.",
      },
      {
        id: "infraestructura-cloud",
        title: "Infraestructura Cloud",
        description:
          "Implementamos y gestionamos soluciones en la nube para mayor flexibilidad y escalabilidad.",
      },
      {
        id: "mvp",
        title: "Desarrollo MVP",
        description:
          "Creamos productos mínimos viables para validar ideas de negocio rápidamente.",
      },
      {
        id: "ecommerce",
        title: "Desarrollo E-commerce",
        description:
          "Tiendas en línea personalizadas para maximizar tus ventas y experiencia de usuario.",
      },
      {
        id: "integracion-ai",
        title: "Integración AI",
        description:
          "Llevamos tus aplicaciones al siguiente nivel con inteligencia artificial personalizada.",
      },
    ],
    Diseño: [
      {
        id: "diseno-ux",
        title: "Diseño UX/UI",
        description:
          "Creamos experiencias de usuario atractivas y funcionales para tus proyectos.",
      },
    ],
    Chatbots: [
      {
        id: "chatbots-respuestas",
        title: "Automatización de respuestas",
        description:
          "Desarrollamos chatbots que automatizan la atención al cliente eficientemente.",
      },
      {
        id: "chatbots-whatsapp",
        title: "Integración con WhatsApp",
        description:
          "Integramos chatbots con WhatsApp para mejorar la comunicación con tus clientes.",
      },
      {
        id: "chatbots-analisis",
        title: "Análisis de datos del cliente",
        description:
          "Recolectamos y analizamos datos para optimizar la interacción con tus clientes.",
      },
      {
        id: "chatbots-flujo",
        title: "Personalización del flujo conversacional",
        description:
          "Diseñamos chatbots personalizados para ofrecer interacciones naturales y efectivas.",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction) => {
    const container = document.getElementById("services-container");
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const shouldCenter =
    servicesData[selectedCategory].length <= 4 && !isSmallScreen;

  return (
    <section
      id="services"
      className="relative py-16"
      style={{
        backgroundColor: "black",
        backgroundImage: `url('assets/spotlight5.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nuestros Servicios
        </h2>
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          {Object.keys(servicesData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? "bg-[#9165f3] text-white"
                  : "bg-gray-800 text-gray-400"
              } hover:bg-[#7e53c1] hover:text-white`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <div
            id="services-container"
            className={`flex ${
              shouldCenter ? "justify-center" : "overflow-x-hidden"
            } gap-4 py-4`}
          >
            {servicesData[selectedCategory].map((service, index) => (
              <div
                key={service.id}
                className="min-w-[220px] max-w-[220px] bg-[#1A1A1A] p-4 rounded-lg shadow-lg hover:shadow-xl transition hover:scale-105 flex-shrink-0 h-[250px]"
              >
                <h3 className="text-base font-semibold mb-2 text-center text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 text-center break-words">
                  {service.description}
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href={`#${service.id}`}
                    className="bg-[#9165f3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#7e53c1] transition"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))}
          </div>
          {!shouldCenter && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button
                className="text-[#9165f3] text-3xl hover:text-[#7e53c1] transition"
                onClick={() => handleScroll("left")}
              >
                &#8249;
              </button>
              <button
                className="text-[#9165f3] text-3xl hover:text-[#7e53c1] transition"
                onClick={() => handleScroll("right")}
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
