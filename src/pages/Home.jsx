import React, {useState, useEffect, Suspense} from 'react';
import Navbar from '../components/navbar.jsx';
import Card from '../components/card.jsx';
import Projects from './Projects.jsx';
import {projectsapi} from "../api/projects.js";
import dataMock from '../api/data-projects.json';
import { LoadingScreen } from "../components/LoadingScreen";

const Home = () => {
    const [projects, setProjects] = useState({})
    const [tab, setTab] = useState("skills");

    /** loaded function */
    const [isLoaded, setIsLoaded] = useState(false);

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
            <section className="text-center py-20 text-white">
                <h1 className="text-4xl font-bold mb-4">Hola, soy Juan Diaz <span className="text-yellow-300">Desarrollador Web</span></h1>
                <h2 className="text-lg mb-6">Especialista en Drupal, Backend, Ciberseguridad y soluciones web modernas.</h2>
                <p className="text--semibold mb-6">Te ayudo duplicar tus ventas y ahorrar dinero con sistemas de gestión de IA - Webs & SEO 💸</p>
                <div className='links'>
                    <a href="https://folll.io/juanpablod%C3%ADazalbarracin/resume" target='_blank' className="bg-orange-300  text-gray-900 px-6 py-3 rounded-sm font-semibold shadow hover:bg-yellow-400 transition">Sobre Mí</a>
                    <a href="#projects" className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-sm font-semibold shadow hover:bg-yellow-400 transition">Ver mis proyectos</a>
                </div>
            </section>
                
    <div className="w-full sm:mb-8">
      <div className={`flex flex-col border border-white/10 duration-500`}
        >
        {/* Tabs header */}
        <div className="flex items-center justify-between">
          {["skills", "stack", "hobbies"].map((item) => (
            <div
              key={item}
              onClick={() => setTab(item)}
              className={`w-1/3 p-3 text-center cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-gray-200 
                ${tab === item ? "bg-gray-900 text-gray-200 border-b-2 border-orange-600" : ""}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>

        {/* Tabs content */}
        {tab === "skills" && (
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {[
              "Java",
              "Nodejs",
              "Reactjs",
              "PHP",
              "Symfony",
              "JavaScript",
              "DDD",
              "Drupal",
              "Sql",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 
                rounded-full text-sm
                transition
                hover:bg-blue-500/20 hover:-translate-y-0.5
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
              >
                {skill}
              </div>
            ))}
          </div>
        )}

        {tab === "stack" && (
          <div className="flex flex-wrap justify-center gap-2 p-4">
           {["Software", "Ciberseguridad", "Frameworks", "IA"].map((hobby) => (
              <div
                key={hobby}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 
                rounded-full text-sm
                transition
                hover:bg-blue-500/20 hover:-translate-y-0.5
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                {hobby}
              </div>
            ))}
          </div>
        )}
        
        {tab === "hobbies" && (
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {["Ping Pong", "Futbol"].map((hobby) => (
              <div
                key={hobby}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 
                rounded-full text-sm
                transition
                hover:bg-blue-500/20 hover:-translate-y-0.5
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                {hobby}
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
          <section id="projects" className="wrapper">
              <div className='p-5 text-center text-white'>
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

