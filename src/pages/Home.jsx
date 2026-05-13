import { useState, useEffect, useCallback } from "react";
import { SiReact, SiPhp, SiMysql, SiNodedotjs } from "react-icons/si";
import { projectsapi } from "../api/projects.js";
import { LoadingScreen } from "../components/LoadingScreen";
import Navbar from "../components/navbar.jsx";
import FooterRegion from "../components/FooterRegion.jsx";
import Projects from "./Projects.jsx";
import { LogoLoop } from "../components/LogoLoop.jsx";
import AboutMe from "../components/AboutMe.jsx";
import SimpleHero from "../components/SimpleHero.jsx";
import BannerCarousel from "../components/BannerCarousel.jsx";
import LightRays from "../components/LightRays.jsx";
import imageBanner1 from "../assets/Gemini_Generated_Image_o45o7io45o7io45o.png";
import imageBanner2 from "../assets/beconvergence-banner.png";

const TECH_LOGOS = [
  { node: <SiPhp />, title: "PHP", href: "https://php.net" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" }
];

const buttons = [
  { 
    label: "Enviar email", 
    href: "mailto:jpdiaz663@hotmail.com?body=Hola%2C%20me%20gustar%C3%ADa%20contactarte%20por%20medio%20de%20tu%20portafolio.", 
    external: true, 
    className: "button button--primary" 
  },
  { label: "Hablemos por chat", href: "https://wa.me/573138408391", external: true, className: "button button--whatsapp" },
]

const fetchProjects = async () => {
  try {
    return await projectsapi({ per_page: 12 });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Memoize the callback
  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}{" "}
      {!reduceMotion && (
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.58] mix-blend-screen"
          aria-hidden
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#f2b93a"
            raysSpeed={0.45}
            lightSpread={1.1}
            rayLength={1.32}
            followMouse
            mouseInfluence={0.068}
            fadeDistance={1.12}
            saturation={1.2}
            noiseAmount={0}
            distortion={0}
          />
        </div>
      )}
      <div className="relative z-[1]">
      <Navbar />
      <SimpleHero>
        {/*<---Buttons--->*/}
        {buttons.map((button) => (
          <a
            href={button.href}
            {...(button.external && { target: "_blank", rel: "noopener noreferrer" })}
            rel="noopener noreferrer"
            className={button.className}
          >
            {button.label}
          </a>
        ))}

      </SimpleHero>

      <div className="w-full">

        {/* <---LogoLoop---> */}
        {/* <div className="h-[100px] relative overflow-hidden">
          <LogoLoop
            logos={TECH_LOGOS}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#060010"
            ariaLabel="Technology stack"
          />
        </div> */}

        <section className="px-[3%] pb-8">
          <AboutMe />
        </section>

        <section id="projects" className="wrapper">
          <div className="p-5 pb-16 text-center text-white service-container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mi experiencia en <span className="">proyectos</span> web
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              Mis proyectos se enfocan en el{" "}
              <strong>desarrollo web con Drupal y tecnologías modernas</strong>,
              integrando <strong>backend</strong> y optimización de{" "}
              <strong>frontend</strong> para crear soluciones seguras,
              escalables y de alto rendimiento. He trabajado en{" "}
              <strong>portales corporativos multilingües</strong>,
              implementación de <strong>APIs y gateways</strong>, y
              <strong> optimización de despliegues</strong> en entornos cloud
              como{" "}
              <a
                href="https://pantheon.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 "
              >
                Pantheon
              </a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white text-center m-8">Mis proyectos destacados</h2>
          <div id="featured-projects">
            <BannerCarousel
              banners={[
                {
                  id: '3',
                  title: 'Mi portafolio',
                  description: 'Aplicando practica con react y tailwind css para crear mi propio portafolio.',
                  tags: ['React', 'Tailwind CSS'],
                  video: '/videos/6774633-uhd_3840_2160_30fps.mp4',
                  ctaButton: {
                    label: 'Ver proyecto',
                    href: 'https://github.com/jpdiaz663/jpdiaz663',
                    external: true
                  }
                },
                {
                  id: '1',
                  title: 'BeConvergence',
                  description: 'Es la pagina web de mi proyecto personal para emprender en el mercado de la tecnología.',
                  tags: ['Drupal', 'Pantheon', 'React'],
                  image: imageBanner2,
                },
                {
                  id: '2',
                  title: 'Api Gateway Symfony',
                  description: 'Aplicando practica con symfony 7 y superior integrando bundles para crear una API Gateway',
                  tags: ['Symfony', 'API Gateway'],
                  image: imageBanner1,
                  ctaButton: {
                    label: 'Ver proyecto',
                    href: 'https://github.com/juanrraider666/api-gateway-symfony',
                    external: true
                  }
                },

              ]}
            />
          </div>
          <h2 className="text-2xl font-bold text-white text-center m-8">Todos mis proyectos</h2>
          <div id="all-projects" className="card-projects">
            <Projects projects={projects} />
          </div>
        </section>

        <FooterRegion />
      </div>
      </div>
    </>
  );
};

export default Home;
