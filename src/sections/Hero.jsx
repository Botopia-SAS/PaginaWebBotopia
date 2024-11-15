import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import { Model } from "../components/mini_robot.jsx";
import { Astronauta } from "../components/Astronauta.jsx";
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 0 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section
            className="min-h-screen w-full flex flex-col relative"
            style={{
                backgroundImage: `url('/assets/Galaxia.jpg')`, // Ruta de la imagen de galaxia
                backgroundSize: 'cover',   // Hace que la imagen cubra toda la sección
                backgroundPosition: 'center', // Centra la imagen
                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            }}
        >
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    ¡Hola! somos Botopia
                    <span className="waving hand">👋</span>
                </p>
                <div>
                    <p className="hero_tag text-gray_gradient text-[32px] ">
                        <Typewriter
                            words={['Tecnología que mejora tu vida',
                                'Creamos soluciones innovadoras',
                                'Impulsamos tu negocio con tecnología'
                            ]}
                            loop={0} // Número de repeticiones, '0' para infinito
                            cursor
                            cursorStyle="|"
                            cursorColor="white"
                            typeSpeed={50} // Velocidad de escritura
                            deleteSpeed={5} // Velocidad de borrado
                            delaySpeed={4000} // Pausa antes de cambiar al siguiente texto
                        />
                    </p>
                </div>

                <div style={{ height: '4rem' }}></div> {/* Este div agrega espacio */}

                <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={''}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HeroCamera isMobile={isMobile}>
                                <Astronauta
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0.3, 0.1, -0.5]}
                                />
                            </HeroCamera>

                            <group>
                                <Model position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Rings position={sizes.ringPosition} />
                                <Cube position={sizes.cubePosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                            <directionalLight position={[-5, -5, 5]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Conócenos" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
