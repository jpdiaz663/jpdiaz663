import React, { Suspense } from "react";

import TiltedCard from "../components/TiltedCard.jsx";
import PropTypes from "prop-types";
import manAndComputerImg from "../assets/man-and-computer.png";
import geminiImage1 from "../assets/Gemini_Generated_Image_8wsxp68wsxp68wsx.png";
import geminiImage2 from "../assets/Gemini_Generated_Image_h6wz8dh6wz8dh6wz.png";
import buildingImg from "../assets/building.jpg";
import building2Img from "../assets/building-shadow.png";

const COMPANY_PROJECTS = [
  {
    name: "Inter-American Development Bank",
    image:
      "https://www.iadb.org/sites/default/files/styles/landscape_2x1_768000_768x384_100/public/2023-01/006-01-BID-Integracion-regional.jpg?h=51a72048&itok=lUe7xbaG",
    description:
      "Is the leading source of financing and knowledge for improving lives in Latin America and the Caribbean",
    html_url: "https://www.iadb.org/en",
  },
];

const randomImages = [
  /*"https://assets.bounceexchange.com/assets/uploads/clients/5264/creatives/38d34cbc6a5807926221a8935d9c4322.jpg",
  manAndComputerImg,
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/hpe/front_end_gamification/images/bg_gam.jpg",
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/hpe/lightbox/black_diamond_bd/images/bg_bithdayt.jpg",
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/lenovo/56370-Banner%20ENTRENAMIENTOS%20Q1%20frontend/html/img/carousel_banners/banner-DCG-sportlight.jpg",
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/lenovo/56370-Banner%20ENTRENAMIENTOS%20Q1%20frontend/html/img/carousel_banners/banner-DCG-sportlight_servers.png",
  */
  buildingImg,
  building2Img,
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/lenovo/56370-Banner%20ENTRENAMIENTOS%20Q1%20frontend/html/img/carousel_banners/countdown.jpg",
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/hpe/banners/images/gamification-banner.jpg",
  "https://raw.githubusercontent.com/juanrraider666/assets/refs/heads/master/HTML_proyectos/hpe/58531_JRIT%20new%20design/images/bg/bg_color.jpg"
]

export const Projects = ({ projects = [] }) => {
  const projectList = Array.isArray(projects) ? projects : [];


  const allProjects = [...COMPANY_PROJECTS, ...new Set(projectList)];

  if (!allProjects || allProjects.length === 0) {
    return <div>No projects available.</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allProjects.map((project, index) => {
          let code = project.html_url;
          let image =
            project.image ?? randomImages[Math.floor(Math.random() * randomImages.length)];
          return (
            <TiltedCard
              key={index}
              imageSrc={image}
              altText={project.name}
              captionText={project.description || 'Estamos trabajando en este proyecto... 🚧'}
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="tilted-card-overlay">
                  <p className="tilted-card-demo-text">{project.name}</p>

                  <div className="docs-button-bar">
                    <a
                      target="_blank"
                      href={project.html_url ?? project.demo}
                      className="docs-button"
                    >
                      Probar
                    </a>
                    <a target="_blank" href={code} className="docs-button">
                      Codigo fuente
                    </a>
                  </div>
                </div>
              }
            />
          );
        })}
      </div>
    </Suspense>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
