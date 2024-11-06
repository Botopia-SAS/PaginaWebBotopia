import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import Formula1 from '../components/Formula1.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Botopia.sas@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Sección 1 - Somos Botopia S.A.S. */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <div className="overflow-hidden" style={{ borderRadius: '20px' }}>
           <img src="assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
          </div>

            <div>
              <p className="grid-headtext">Somos Botopia S.A.S.</p>
              <p className="grid-subtext">
                En Botopia SAS, impulsamos empresas con soluciones de ingeniería, software a medida y chatbots inteligentes.
                Nuestro objetivo: optimizar procesos, mejorar la experiencia del cliente y facilitar la adaptación a un mundo digital.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 2 - Soluciones Tecnológicas */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Soluciones Tecnológicas</p>
              <p className="grid-subtext">
                Utilizamos las mejores herramientas y tecnologías del mercado para desarrollar soluciones robustas y escalables.
                Nuestra experiencia abarca desde frameworks de desarrollo hasta inteligencia artificial, garantizando que cada
                solución esté optimizada para tus necesidades empresariales.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 3 - Soporte Global y Flexibilidad Horaria */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Soporte Global y Flexibilidad Horaria</p>
              <p className="grid-subtext">
                En Botopia SAS, nos adaptamos a cualquier zona horaria para ofrecer soluciones de ingeniería y software,
                sin importar la ubicación.
              </p>
              <Button name="Contáctame" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Sección 4 - Innovación y Pasión por la Tecnología con el modelo 3D */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[266px] h-fit flex justify-center items-center">
              <Canvas>
                {/* Configuración de luces */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Renderiza el modelo 3D de Formula 1 */}
                <Formula1 scale={1.1} />

                {/* Control de cámara para rotar */}
                <OrbitControls enableZoom={false} />

                {/* Ambiente para reflejos */}
                <Environment preset="sunset" />
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">Innovación y Pasión por la Tecnología</p>
              <p className="grid-subtext">
                Nos apasiona la tecnología. Creamos soluciones innovadoras para transformar y optimizar la operación de las empresas.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 5 - Contacto */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contáctame</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Botopia.sas@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
