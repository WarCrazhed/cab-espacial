import sol from '../assets/planets/sol.avif';
import mercurio from '../assets/planets/mercurio.avif';
import venus from '../assets/planets/venus.avif';
import tierra from '../assets/planets/tierra.avif';
import marte from '../assets/planets/marte.avif';
import jupiter from '../assets/planets/jupiter.avif';
import saturno from '../assets/planets/saturno.avif';
import urano from '../assets/planets/urano.avif';
import neptuno from '../assets/planets/neptuno.avif';

export const planets = [
  {
    id: 1,
    name: "Sol",
    lottie: "https://lottie.host/92871d33-4588-4182-9643-149d5df6c06e/1PVySUnONm.lottie",
    description: "Estrella central de nuestro sistema solar. Una esfera gigante de gas caliente que proporciona luz y calor a todos los planetas.",
    src: sol,
    distanceFromEarth: "149.6 millones de km (1 UA)"
  },
  {
    id: 2,
    name: "Mercurio",
    lottie: "https://lottie.host/4bb902c9-310e-433c-aa61-b87e316ae49b/TOmLefHf7e.lottie",
    description: "El planeta más pequeño y más cercano al Sol. Tiene una superficie rocosa y temperaturas extremas.",
    src: mercurio,
    distanceFromEarth: "77.3 millones de km en su punto más cercano"
  },
  {
    id: 3,
    name: "Venus",
    lottie: "https://lottie.host/821de8b2-a87e-4117-a262-e704919a7b77/o5qTtSEHmR.lottie",
    description: "Conocido como el planeta hermano de la Tierra por su tamaño similar. Tiene una atmósfera densa y es el planeta más caliente.",
    src: venus,
    distanceFromEarth: "38.2 millones de km en su punto más cercano"
  },
  {
    id: 4,
    name: "Tierra",
    lottie: "https://lottie.host/65058105-4e86-46be-9885-0f659600b734/98iPlRK0fG.lottie",
    description: "Nuestro hogar. El único planeta conocido con vida. Tiene océanos de agua líquida y una atmósfera rica en oxígeno.",
    src: tierra,
    distanceFromEarth: "0 km"
  },
  {
    id: 5,
    name: "Marte",
    lottie: "https://lottie.host/62bdbdd8-a631-4ced-b07e-729b14334e71/k5z0KaVTnT.lottie",
    description: "El planeta rojo. Tiene montañas, valles y casquetes polares. Los científicos buscan señales de vida antigua.",
    src: marte,
    distanceFromEarth: "55.7 millones de km en su punto más cercano"
  },
  {
    id: 6,
    name: "Jupiter",
    lottie: "https://lottie.host/4bb902c9-310e-433c-aa61-b87e316ae49b/TOmLefHf7e.lottie",
    description: "El planeta más grande del sistema solar. Un gigante gaseoso con una gran mancha roja y numerosas lunas.",
    src: jupiter,
    distanceFromEarth: "588 millones de km en su punto más cercano"
  },
  {
    id: 7,
    name: "Saturno",
    lottie: "https://lottie.host/e2262d01-7efa-481f-b604-060fe7406015/zTrkQri6hU.lottie",
    description: "Famoso por sus hermosos anillos. Es un gigante gaseoso con una densidad menor que el agua.",
    src: saturno,
    distanceFromEarth: "1.2 mil millones de km en su punto más cercano"
  },
  {
    id: 8,
    name: "Urano",
    lottie: "https://lottie.host/30b6ce78-6496-4534-b37a-c27c5265b6f0/hDgyr8NslJ.lottie",
    description: "Gigante de hielo que gira de lado. Tiene anillos tenues y una coloración azul-verdosa.",
    src: urano,
    distanceFromEarth: "2.6 mil millones de km en su punto más cercano"
  },
  {
    id: 9,
    name: "Neptuno",
    lottie: "https://lottie.host/b20b8b01-108d-4378-a2b0-73b784aa43a8/2vcjzUuUCq.lottie",
    description: "El planeta más lejano. Un gigante de hielo azul con vientos supersónicos y tormentas enormes.",
    src: neptuno,
    distanceFromEarth: "4.3 mil millones de km en su punto más cercano"
  }
];