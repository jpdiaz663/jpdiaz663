import React, { Suspense, use } from "react";

import Card from "../components/card.jsx";
import TiltedCard from "../components/TiltedCard.jsx";

export const Projects = ({ projects = [] }) => {
  const projectList = Array.isArray(projects) ? projects : [];

  const companyProjects = [
    {
      name: "Inter-American Development Bank",
      image:
        "https://www.iadb.org/sites/default/files/styles/landscape_2x1_768000_768x384_100/public/2023-01/006-01-BID-Integracion-regional.jpg?h=51a72048&itok=lUe7xbaG",
      description:
        "Is the leading source of financing and knowledge for improving lives in Latin America and the Caribbean",
      html_url: "https://www.iadb.org/en",
    },
  ];
  const allProjects = [...companyProjects, ...new Set(projectList)];

  if (!allProjects || allProjects.length === 0) {
    return <div>No projects available.</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allProjects.map((project, index) => {
          let code = project.html_url;
          let image =
            project.image ??
            `https://assets.bounceexchange.com/assets/uploads/clients/5264/creatives/38d34cbc6a5807926221a8935d9c4322.jpg`;
          /* return <Card
                        key={index}
                        title={project.name}
                        link={project.html_url ?? project.demo}
                        image={image}
                        content={project.description}
                    />*/
          return (
            <TiltedCard
              key={index}
              imageSrc={image}
              altText={project.name}
              captionText={project.description}
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

export default Projects;
