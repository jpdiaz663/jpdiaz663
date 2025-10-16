import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../components/navbar.jsx";
import FooterRegion from "../components/FooterRegion.jsx";
import Card from "../components/card.jsx";
import Projects from "./Projects.jsx";
import { projectsapi } from "../api/projects.js";
import dataMock from "../api/data-projects.json";
import { LoadingScreen } from "../components/LoadingScreen";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { LogoLoop } from "../components/LogoLoop.jsx";
import AboutMe from "../components/AboutMe.jsx";
import SimpleHero from "../components/SimpleHero.jsx";
import LaserFlow from "../components/LaserFlow.jsx";

const Home = () => {
  const [projects, setProjects] = useState({});

  /** loaded function */
  const [isLoaded, setIsLoaded] = useState(false);

  /** Lopop tech */

  const techLogos = [
    { node: <SiPhp />, title: "Php", href: "https://php.net" },
    { node: <SiMysql />, title: "Mysql", href: "https://www.mysql.com" },

    { node: <SiReact />, title: "React", href: "https://react.dev" },

    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      //const data = await projectsapi();
      setProjects(dataMock);
    };
    fetchProjects();
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <Navbar />
      <SimpleHero>
        {/*<---Buttons--->*/}
        <a
          href="https://folll.io/juanpablod%C3%ADazalbarracin/resume"
          target="_blank"
          className="button button--primary"
          rel="noopener noreferrer"
        >
          Sobre Mí
        </a>
        <a href="#projects" className="button button--secondary">
          Ver mis proyectos
        </a>
      </SimpleHero>
      <div className="w-full">
        <div
          style={{ height: "100px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#060010"
            ariaLabel="Technology partners"
          />
        </div>

        <section style={{ padding: "0 3% 2rem" }}>
          <AboutMe></AboutMe>
        </section>

        <div style={{ "padding-top": "8px" }}></div>
        <section id="projects" className="wrapper">
          <div className="p-5 pb-16 text-center text-white service-container">
            <h2>
              Mi experiencia en{" "}
              <span>
                <span> proyectos </span>
              </span>{" "}
              web
            </h2>
            <p className="text-gray-300 leading-relaxed  mx-16">
              Mis proyectos se enfocan en el{" "}
              <strong>desarrollo web con Drupal y tecnologías modernas</strong>,
              integrando
              <strong> backend</strong> y optimización de{" "}
              <strong>frontend</strong> para crear soluciones seguras,
              escalables y de alto rendimiento. He trabajado en{" "}
              <strong>portales corporativos multilingües</strong>,
              implementación de <strong>APIs y gateways</strong>, y
              <strong> optimización de despliegues</strong> en entornos cloud
              como <a href="https://pantheon.io/">Pantheon</a>.
            </p>
          </div>
          <div className="card-projects">
            <Projects projects={projects} />
          </div>
        </section>

        <FooterRegion></FooterRegion>
      </div>
    </>
  );
};

export default Home;
