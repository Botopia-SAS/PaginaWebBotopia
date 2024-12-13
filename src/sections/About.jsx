import { useState } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  return (
    <section className="c-space my-20 text-white" id="about">
      {/* Sección principal */}
      <div className="space-y-20">
        {/* Encabezado */}
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-extrabold text-[#9165f3]">
            Conoce a <span className="text-white">Botopia S.A.S.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            En Botopia, nuestra pasión es transformar ideas en soluciones únicas e innovadoras. 
            Ofrecemos ingeniería personalizada, desarrollo de software y chatbots inteligentes que optimizan cada proceso y garantizan resultados excepcionales.
          </p>
        </div>

        {/* Sección de Contenido */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Misión */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">Nuestra Misión</h3>
            <p className="text-gray-300 text-lg">
              Crear soluciones tecnológicas personalizadas que revolucionen las operaciones empresariales. 
              Empoderamos a nuestros clientes con herramientas únicas que optimizan procesos y mejoran la experiencia del usuario.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">Nuestra Visión</h3>
            <p className="text-gray-300 text-lg">
              Ser reconocidos como un líder global en innovación tecnológica, destacándonos por nuestra creatividad, 
              atención al detalle y compromiso con la excelencia en cada proyecto que emprendemos.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">Nuestros Valores</h3>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-3">
              <li>Innovación constante en cada proyecto.</li>
              <li>Personalización única para cada cliente.</li>
              <li>Compromiso con la calidad y la excelencia.</li>
              <li>Ética profesional en todas nuestras acciones.</li>
            </ul>
          </div>

          {/* Compromiso con los Empleados */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">Nuestro Compromiso</h3>
            <p className="text-gray-300 text-lg">
              En Botopia, valoramos profundamente a nuestro equipo. Nos comprometemos a crear un ambiente laboral inclusivo, innovador y de apoyo, 
              donde cada miembro pueda crecer personal y profesionalmente. Creemos que el éxito de nuestros proyectos comienza con el bienestar de nuestros empleados.
            </p>
          </div>
        </div>

        {/* Sección del Globo */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl h-[400px]">
            <Globe
              height={400}
              width={400}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                { lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
