import { DiGithub, DiHtml5 } from "react-icons/di";
import { SiReact, SiJavascript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import MeIcons from "./base/MeIcons.jsx";
import "./FooterRegion.css";

const FooterRegion = () => {
  const year = new Date().getFullYear();

  const CONTACT_INFO = [
    { 
      icon: "🙍‍♂️", 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/juan-pablo-diaz-773317199",
      type: "link"
    },
    { 
      label: "Correo", 
      icon: "📧", 
      href: "mailto:jpdiaz663@hotmail.com", 
      text: "jpdiaz663@hotmail.com" 
    },
    { 
      label: "Teléfono", 
      icon: "📞", 
      href: "tel:+573138408391", 
      text: "+57 3138408391" 
    },
    { 
      label: "WhatsApp", 
      icon: "💬", 
      href: "https://wa.me/573138408391", 
      text: "+57 3138408391" 
    }
  ];

  const TECHNOLOGIES = [
    { Icon: SiReact, color: "#61DAFB", title: "React" },
    { Icon: SiJavascript, color: "#F7DF1E", title: "JavaScript" },
    { Icon: BiLogoTailwindCss, color: "#06B6D4", title: "Tailwind CSS" },
    { Icon: DiGithub, color: "white", title: "GitHub" },
    { Icon: DiHtml5, color: "#E34F26", title: "HTML5" }
  ];

  const SOCIAL_LINKS = [
    { 
      Icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/juan-pablo-diaz-773317199", 
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    },
    { 
      Icon: FaFacebook, 
      href: "#", 
      label: "Facebook",
      hoverColor: "hover:text-blue-600"
    },
    { 
      Icon: FaInstagram, 
      href: "https://www.instagram.com/juanazdiaz", 
      label: "Instagram",
      hoverColor: "hover:text-pink-500"
    }
  ];
  return (
    <section id="contact" className="relative contact text-white mt-12 py-16">
      <MeIcons icon="fire" />
      
      <div className="flex justify-between flex-row mx-28 h-16">
        <div className="w-5" />
        <div className="w-5" />
        <div className="w-5 relative grow">
          <div className="absolute -top-25 right-12 translate-x-1/2">
            <MeIcons icon="resting" />
          </div>
        </div>
      </div>

      <div className="contect-resume mx-auto p-6">
        <div className="content grid md:grid-cols-4">
          <div className="title">
            <h2 className="text-3xl font-bold">Contáctame</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-300">Conecta conmigo</p>
            {CONTACT_INFO.map(({ icon, label, href, text }) => (
              <div key={label}>
                {text ? (
                  <>
                    <p className="font-semibold">{icon} {label}:</p>
                    <a
                      href={href}
                      {...(href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                      className="text-blue-400 hover:underline transition-colors"
                    >
                      {text}
                    </a>
                  </>
                ) : (
                  <>
                    {icon}{" "}
                    <a 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline transition-colors"
                    >
                      {label}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-300">Tecnologías usadas</p>
            <div className="flex flex-col gap-2">
              {TECHNOLOGIES.map((tech) => {
                const IconComponent = tech.Icon;
                return (
                  <div key={tech.title} className={`text-[${tech.color}]`} title={tech.title}>
                    <IconComponent size="50px" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-300">Sobre este proyecto</p>
            <p className="text-sm leading-relaxed">
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

        <hr className="my-4 border-gray-700" />

        <div className="footer-bottom--content flex flex-row">
          <p className="text-left text-gray-400 text-sm">
            © {year} Juan Pablo Díaz — Todos los derechos reservados.
          </p>
          
          <div className="flex flex-row flex-wrap gap-2">
            {SOCIAL_LINKS.map((social) => {
              const IconComponent = social.Icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={`Visit my ${social.label} page`}
                  className={`${social.hoverColor} transition-colors`}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterRegion;
