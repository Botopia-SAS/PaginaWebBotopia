import React from 'react';

const teamMembers = [
  {
    name: 'Isaac Páez Triana',
    title: 'Head of Engineering',
    description: 'Líder en desarrollo de soluciones digitales innovadoras.',
    photo: "assets/Isaac.svg", // Reemplaza con la URL de la foto
  },
  {
    name: 'Laura Cifuentes Barrero',
    title: 'CEO',
    description: 'Experta en liderazgo y crecimiento estratégico.',
    photo: "assets/Laura.svg", // Reemplaza con la URL de la foto
  },
  {
    name: 'Juan Gama Galvis',
    title: 'Operations Manager',
    description: 'Optimiza procesos y gestiona operaciones eficientes.',
    photo: "assets/Diego.svg", // Reemplaza con la URL de la foto
  },
  {
    name: 'David Espejo Garcia',
    title: 'CTO',
    description: 'Diseña y lidera la estrategia tecnológica de la empresa.',
    photo: "assets/Espejo.svg", // Reemplaza con la URL de la foto
  },
  {
    name: 'Fabian Garzón',
    title: 'Business Development Consultant',
    description: 'Identifica nuevas oportunidades y alianzas estratégicas para impulsar el crecimiento y expansión de Botopia.',
    photo: "assets/Fabi.svg", // Reemplaza con la URL de la foto
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-galaxy bg-cover bg-fixed py-16">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-8">Conoce al Equipo</h2>

        {/* Primer fila con 4 miembros */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{member.title}</p>
              <p className="text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Sección para Fabián Garzón y "+ de 10 Ingenieros" */}
        <div className="mt-8 space-y-12">
          {/* Miembro adicional (quinto miembro - Fabian Garzón) */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-center">
              {/* Imagen más grande solo para el quinto miembro */}
              <img
                src={teamMembers[4].photo}
                alt={teamMembers[4].name}
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-700 mr-6"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white text-center">{teamMembers[4].name}</h3>
                <p className="text-sm text-gray-400 mb-2 text-center">{teamMembers[4].title}</p>
                <p className="text-gray-300 text-center">{teamMembers[4].description}</p>
              </div>
            </div>
          </div>

          {/* Recuadro de "+ de 10 Ingenieros" con línea y punto */}
          <div className="text-center">
            {/* Línea y punto */}
            <div className="relative flex items-center justify-center mb-6">
              {/* Línea horizontal */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white"></div>
              </div>
              {/* Punto */}
              <div className="w-4 h-4 bg-white rounded-full z-10"></div>
            </div>

            {/* Título y descripción */}
            <p className="text-4xl font-extrabold text-white mb-4">
              + de 10 Ingenieros
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mx-auto max-w-3xl">
              Nuestro equipo de ingenieros está comprometido con la innovación y la calidad. Contamos con más de 10 expertos que contribuyen día a día con su talento y dedicación para crear soluciones digitales únicas. ¡Juntos, estamos construyendo el futuro!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
