import React, {useState, useEffect, Suspense} from 'react';
import Navbar from '../components/navbar.jsx';
import Card from '../components/card.jsx';
import Projects from './Projects.jsx';
import {projectsapi} from "../api/projects.js";
import dataMock from '../api/data-projects.json';
import { LoadingScreen } from "../components/LoadingScreen";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPhp, SiMysql } from 'react-icons/si';
import {LogoLoop} from '../components/LogoLoop.jsx'
import AboutMe from '../components/AboutMe.jsx';

const Home = () => {
    const [projects, setProjects] = useState({})

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
      <Navbar/>
      <section className="text-center py-20 bg-gradient-to-r text-white">
          <h1 className="text-4xl font-bold mb-4">Hola, soy Juan Diaz <span className="text-yellow-300">Desarrollador Web</span></h1>
          <p className="text-lg mb-6">Especialista en Drupal, Backend y soluciones web modernas.</p>
          <div className='links'>
              <a href="https://folll.io/juanpablod%C3%ADazalbarracin/resume" target='_blank' className="jp-secundary-button">Sobre Mí</a>
              <a href="#projects" className="jp-primary-button">Ver mis proyectos</a>
          </div>
      </section>
                
    <div className="w-full sm:mb-4">
       <div style={{ height: '130px', position: 'relative', overflow: 'hidden'}}>

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

        <div style={{ padding: '0 3% 2rem'}}>
          <AboutMe></AboutMe>
        </div>
    
      </div>
          <section id="projects" className="wrapper">
              <div className='p-5 pb-16 text-center text-white'>
              <p className="text-gray-300 leading-relaxed  mx-16">
                Mis proyectos se enfocan en el <strong>desarrollo web con Drupal y tecnologías modernas</strong>, integrando 
                 <strong> backend</strong> y optimización de <strong>frontend</strong> para crear soluciones seguras, escalables y de alto rendimiento.
                He trabajado en <strong>portales corporativos multilingües</strong>, implementación de <strong>APIs y gateways</strong>, y
                <strong> optimización de despliegues</strong> en entornos cloud como <a href='https://pantheon.io/'>Pantheon</a>.
                </p>    
              </div>





     <div className="card-projects">
                  <Projects projects={projects}/>
              </div>
          </section>

        <section id="contact" className="bg-gray-900 text-white mt-16 py-16">
        <div className="max-w-4xl mx-auto p-6 rounded-sm border border-cyan-900">

            <h2 className="text-3xl font-bold mb-8 text-center">Contáctame</h2>

            <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
                <p className="text-lg">
                Si tienes preguntas o quieres trabajar conmigo, no dudes en escribirme.
                </p>
                <div>
                🙍‍♂️<a href="https://www.linkedin.com/in/juan-pablo-diaz-773317199">Linkedin</a>  
                </div>
                <div>
                <p className="font-semibold">📧 Correo:</p>
                <a href="mailto:jpdiaz663@hotmail.com" className="text-blue-400 hover:underline">
                    jpdiaz663@hotmail.com
                </a>
                </div>
                <div>
                <p className="font-semibold">📞 Teléfono:</p>
                <a href="tel:+57313840839" className="text-blue-400 hover:underline">
                    +57 3138408391
                </a>
                </div>
                <div>
                <p className="font-semibold">💬 WhatsApp:</p>
                <a href="https://wa.me/573138408391" className="text-blue-400 hover:underline">
                    +57 3138408391
                </a>
                </div>
               
            </div>


            </div>
        </div>
        </section>
     
        </>
      );
}


export default Home;

