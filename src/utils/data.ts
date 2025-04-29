const clients = [
    {
        title: "BrokStudio",
        description: "Portal de noticias",
        icon: `<svg width="24" height="24">
        <image href="https://www.desarrolloaustral.com/clients-logos/brokstudio.svg" width="24" height="24" />
      </svg>`,
        href: 'https://brokstudio.com/',
        bg: `background-image: url('https://www.desarrolloaustral.com/clients-screens/brokstudio.jpg')`,
        target: "_blank",
    },
    // {
    //     title: "Desde la estepa",
    //     description: "Sitio web de estética y belleza",
    //     icon: `<svg width="24" height="24">
    //     <image href="https://www.desarrolloaustral.com/clients-logos/desdelaestepa.svg" width="24" height="24" />
    //   </svg>`,
    //     href: 'https://desdelaestepa.com.ar',
    //     bg: `background-image: url('https://www.desarrolloaustral.com/clients-screens/desdelaestepa.jpg')`,
    //     target: '_blank',
    // },
    {
        title: "PicPlug",
        description: "Portal de noticias urbanas",
        icon: `<svg width="24" height="24">
        <image href="https://www.desarrolloaustral.com/clients-logos/picplug.png" width="24" height="24" />
      </svg>`,
        href: 'https://www.picplug420.com/',
        bg: `background-image: url('https://www.desarrolloaustral.com/clients-screens/picplug.jpg')`,
        target: "_blank",
    },
    {
        title: "Dolores Morón",
        description: "Artista Plástica",
        icon: `<svg width="24" height="24">
        <image href="https://www.desarrolloaustral.com/clients-logos/doloresmoron.jpg" width="24" height="24" />
      </svg>`,
        href: 'https://doloresmoron.com.ar/',
        bg: `background-image: url('https://www.desarrolloaustral.com/clients-screens/doloresmoron.jpg')`,
        target: "_blank",
    },
    {
      title: "Delta Workout",
      description: "Gym - Diseño",
      icon: `<svg width="24" height="24">
      <image href="https://www.desarrolloaustral.com/clients-logos/deltaworkout.svg" width="24" height="24" />
    </svg>`,
      href: '',
      bg: `background-image: url('https://www.desarrolloaustral.com/clients-logos/deltaworkout.svg')`,
      target: '_top',
    },
    {
      title: "Mariel Kenes",
      description: "Laboratorio Dental - Diseño",
      icon: `<svg width="24" height="24">
      <image href="https://www.desarrolloaustral.com/clients-logos/mk-logo.svg" width="24" height="24" />
    </svg>`,
      href: '',
      bg: `background-image: url('https://www.desarrolloaustral.com/clients-logos/mk-logo.svg')`,
      target: '_top',
    },
];

const members = [
  {
      name: "Denis Rybier",
      src: "/images/denis.webp",
      href: `https://www.linkedin.com/in/denis-luis-rybier-4a8237229/`,
      target: "_blank",
  },
  {
    name: "Ain García Nahuelanca",
    src: "/images/ain.webp",
    href: `https://www.linkedin.com/in/ainlautaro/`,
    target: "_blank",
  },
  {
    name: "Sebastián Cereminati",
    src: "/images/sebastian.webp",
    href: `https://www.linkedin.com/in/sebastian-cereminati-paez-ab8681209/`,
    target: "_blank",
  },
  {
    name: "Pablo Romano",
    src: "/images/pablo.webp",
    href: `https://www.linkedin.com/in/pablo-jesus-romano/`,
    target: "_blank",
  },
];

const currentDate = new Date();
const initDate = new Date(2021, 8 - 1, 6); 
const msDiff = currentDate.getTime() - initDate.getTime();
const msByYear = 1000 * 60 * 60 * 24 * 365.25;
const years = Math.floor(msDiff / msByYear);
const yearsOfExperience = years < 3 ? 3 : years;

export { clients, members, yearsOfExperience };