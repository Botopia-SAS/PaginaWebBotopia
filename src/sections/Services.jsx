import React, { Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Cohete } from "../components/cohete";
const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Software a la Medida"
  );

  // Detectar tamaños de pantalla
  const isSmallScreen = useMediaQuery({ maxWidth: 500 }); // Pantallas pequeñas
  const isMediumScreen = useMediaQuery({ minWidth: 501, maxWidth: 1024 }); // Tablets
  const isLargeScreen = useMediaQuery({ minWidth: 1025 }); // Escritorio

  // Configurar tamaño y posición dinámicamente
  const coheteConfig = isSmallScreen
    ? { position: [1, -2.2, 0], scale: [25, 25, 25] } // Pantallas pequeñas
    : isMediumScreen
    ? { position: [0, -2, 0], scale: [30, 30, 30] } // Tablets
    : { position: [0, -2.52, 0], scale: [40, 40, 40] }; // Escritorio

  const servicesData = {
    "Software a la Medida": [
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

  const handleScroll = (direction) => {
    const container = document.getElementById("services-container");
    const cardWidth = container.querySelector("div").offsetWidth + 16; // Calcula el ancho de cada tarjeta
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const shouldCenter =
    servicesData[selectedCategory].length <= 4 && !isSmallScreen;

  return (
    <section
      id="services"
      className="relative py-16 bg-cover bg-fixed sm:bg-scroll text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Contenedor de título */}
        <div className="flex flex-col items-center mb-12 relative">
          <h2 className="text-4xl font-bold text-center z-20">
            Nuestros Servicios
          </h2>
        </div>

        {/* Botones de categoría */}
        <div className="flex justify-center mb-8 flex-wrap gap-4 z-10 relative">
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

        {/* Contenedor de servicios */}
        <div className="relative z-10">
          <div
            id="services-container"
            className={`flex ${
              shouldCenter ? "justify-center" : "overflow-x-auto"
            } gap-4 py-4`}
          >
            {servicesData[selectedCategory].map((service) => (
              <div
                key={service.id}
                className="min-w-[220px] max-w-[220px] bg-[#1A1A1A] p-4 rounded-lg shadow-lg hover:shadow-xl transition hover:scale-105 flex-shrink-0 h-[250px]"
              >
                <h3 className="text-base font-semibold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 text-center break-words">
                  {service.description}
                </p>
                <div className="flex justify-center mt-4">
                  <Link
                    to={`/servicio/${service.id}`}
                    className="bg-[#9165f3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#7e53c1] transition"
                  >
                    Ver más
                  </Link>
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

      {/* Canvas con el modelo del cohete fuera del contenedor */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] z-50 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Cohete
              position={coheteConfig.position}
              scale={coheteConfig.scale}
              rotation={[0.2, 0.7, 0.1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Services;
