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

const TECH_LOGOS = [
  { node: <SiPhp />, title: "PHP", href: "https://php.net" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" }
];

const buttons  = [
  { label: "Enviar email", href: "mailto:jpdiaz663@hotmail.com", external: true, className: "button button--primary" },
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

  // Memoize the callback
  const handleLoadingComplete = useCallback(() => {
      setIsLoaded(true);
  }, []);

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete}/>}{" "}
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
        <div className="h-[100px] relative overflow-hidden">
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
        </div>

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
          
          <div className="card-projects">
            <Projects projects={projects} />
          </div>
        </section>

        <FooterRegion />
      </div>
    </>
  );
};

export default Home;
