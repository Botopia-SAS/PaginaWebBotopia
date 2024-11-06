export const navLinks = [
    {
      id: 1,
      name: 'Inicio',
      href: '#home',
    },
    {
      id: 2,
      name: 'Conócenos',
      href: '#about',
    },
    {
      id: 3,
      name: 'Portafolio',
      href: '#work',
    },
    {
      id: 4,
      name: 'Productos',
      href: '#contact',
    },
    {
      id: 5,
      name: 'Servicios',
      href: '#contact',
    },
    {
      id: 6,
      name: 'Contacto',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
// src/constants/index.js

// src/constants/index.js

export const myProjects = [
  {
    title: 'Planta Femsa Cocacola',
    desc: 'Automatización de Planta de Retrolavado en Coca-Cola FEMSA.',
    subdesc:
      'Este proyecto automatizó la planta de retrolavado en Coca-Cola FEMSA mediante PLCs, optimizando el proceso y mejorando la eficiencia. También se desarrolló una interfaz HMI personalizada para facilitar el monitoreo y control en tiempo real.',
    href: 'Botopia.tech',
    texture: '/textures/project/Coca.mp4',
    logo: './assets/logoco.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Siemens',
        path: '/assets/Siemens.png',
      },
      {
        id: 2,
        name: 'PLC',
        path: 'assets/PLC.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/Codigo.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'VohGo',
    desc: 'Vohgo - Plataforma de Compra Rápida de Componentes Eléctricos.',
    subdesc:
      'Vohgo es una aplicación para Android y iOS que facilita la compra rápida y conveniente de componentes eléctricos. Con una interfaz intuitiva y entregas en tiempo récord, ofrece a los usuarios una solución confiable para acceder a piezas de calidad en cualquier momento.',
    href: 'Botopia.tech',
    texture: '/textures/project/Vohgo.mp4',
    logo: '/assets/Voh.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Flutter',
        path: 'assets/Flutter.png',
      },
      {
        id: 3,
        name: 'Ios',
        path: '/assets/ios.png',
      },
      {
        id: 4,
        name: 'Android',
        path: '/assets/Android.png',
      },
    ],
  },
  {
    title: 'Maquina Dispensadora',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'Botopia.tech',
    texture: '/textures/project/Solid.mp4',
    logo: '/assets/foto4.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Flutter',
        path: 'assets/Flutter.png',
      },
      {
        id: 3,
        name: 'SolidWorks',
        path: '/assets/LogoSolid.png',
      },
      {
        id: 4,
        name: 'Programacion',
        path: '/assets/Codigo.png',
      },
    ],
  },
  {
    title: 'Coinly',
    desc: 'Gestión Financiera y Recomendaciones de Inversión en un Solo Lugar.',
    subdesc:
      'Coinly es una aplicación innovadora que permite a los usuarios centralizar todas sus cuentas bancarias en un solo lugar, ofreciendo una visión completa y detallada de sus movimientos financieros. Además, Coinly analiza las tendencias del mercado de valores y proporciona recomendaciones de inversión personalizadas, ayudando a los usuarios a tomar decisiones informadas y a maximizar sus oportunidades de crecimiento financiero.',
    href: 'https://banking-iota-nine.vercel.app/sign-in',
    texture: '/textures/project/Coinlym.mp4',
    logo: '/assets/Coinly.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Flutter',
        path: 'assets/Flutter.png',
      },
      {
        id: 3,
        name: 'Ios',
        path: '/assets/ios.png',
      },
      {
        id: 4,
        name: 'Android',
        path: '/assets/Android.png',
      },
    ],
  },

];

  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [8, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-17, 5, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-5, -10, -10] : isTablet ? [-5, -7, -10] : [-8, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
