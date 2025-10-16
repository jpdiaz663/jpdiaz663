import { DiGithub, DiHtml5, DiJavascript } from "react-icons/di";
import "./FooterRegion.css";
import LaserFlow from "../components/LaserFlow.jsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterRegion = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <section id="contact" className="contact text-white mt-16 py-16">
        
        <div className="contect-resume mx-auto p-6 ">
          {/* Columna 2 */}
          <div className="content grid md:grid-cols-4">
            <div className="title">
              <h2 className="text-3xl font-bold">Contáctame</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">Conecta conmigo</p>
              <div>
                🙍‍♂️
                <a href="https://www.linkedin.com/in/juan-pablo-diaz-773317199">
                  Linkedin
                </a>
              </div>
              <div>
                <p className="font-semibold">📧 Correo:</p>
                <a
                  href="mailto:jpdiaz663@hotmail.com"
                  className="text-blue-400 hover:underline"
                >
                  jpdiaz663@hotmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold">📞 Teléfono:</p>
                <a
                  href="tel:+57313840839"
                  className="text-blue-400 hover:underline"
                >
                  +57 3138408391
                </a>
              </div>
              <div>
                <p className="font-semibold">💬 WhatsApp:</p>
                <a
                  href="https://wa.me/573138408391"
                  className="text-blue-400 hover:underline"
                >
                  +57 3138408391
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 ">Tecnologias usadas</p>

              <div>
                <p className="font-semibold">
                  <SiReact size={"50px"} />
                </p>
                <p className="font-semibold">
                  <DiJavascript size={"50px"} />
                </p>
                <p className="font-semibold">
                  <BiLogoTailwindCss size={"50px"} />
                </p>
                <p className="font-semibold">
                  <DiGithub size={"50px"} />
                </p>
                <p className="font-semibold">
                  <DiHtml5 size={"50px"} />
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-300">Sobre este proyecto</p>

              <div>
                <p className="">
                  Este proyecto utiliza la GitHub API para consumir y mostrar
                  dinámicamente los proyectos que tengo almacenados en mi
                  repositorio. A través de solicitudes a la API, obtiene
                  información como el nombre, descripción, tecnologías
                  utilizadas y enlaces a cada repositorio. El objetivo principal
                  es centralizar y visualizar de forma automática mi portafolio
                  de desarrollo, sin necesidad de actualizar manualmente la
                  información.
                </p>
              </div>
            </div>
          </div>

          {/* Línea al final */}
          <hr className="my-4 border-gray-700" />

          <div className="footer-bottom--content flex flex-row">
            <p className="text-left text-gray-400 text-sm">
              © {year} Juan Pablo Díaz — Todos los derechos reservados.
            </p>
            <div class="flex flex-row flex-wrap gap-2">
              <a
                target="_blank"
                aria-label="Visit our LinkedIn page"
                href="https://www.linkedin.com/in/juan-pablo-diaz-773317199"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a aria-label="Visit our Facebook page" href="#">
                <FaFacebook></FaFacebook>
              </a>
              <a
                target="_blank"
                aria-label="Visit our Instagram page"
                href="https://www.instagram.com/juanazdiaz"
              >
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterRegion;
