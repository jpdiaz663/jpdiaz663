import React, {Suspense, use} from 'react';

import Card from "../components/card.jsx";


export const Projects = ({projects = []}) => {
    const projectList = Array.isArray(projects) ? projects : [];


    const companyProjects = [
        {
            'name': 'Inter-American Development Bank',
             'image': 'https://www.iadb.org/sites/default/files/styles/landscape_2x1_768000_768x384_100/public/2023-01/006-01-BID-Integracion-regional.jpg?h=51a72048&itok=lUe7xbaG',
            'description': 'Is the leading source of financing and knowledge for improving lives in Latin America and the Caribbean',
            'html_url': 'https://www.iadb.org/en'
        },
        {
            'name': 'Optime Consulting Sas',
            'image': 'https://www.optimeconsulting.com/build/images/home/banner/erecognize_img.png',
            'description': 'Optime soluciona la complejidad de hacer negocios a través de los canales en el sector tecnológico, ayudando a las empresas a optimizar incentivos, motivar a sus socios y atraer a los clientes.',
            'html_url': 'https://www.optimeconsulting.com/es/'
        }
    ];
    const allProjects = [...companyProjects, ...new Set(projectList)]

    if (!allProjects || allProjects.length === 0) {
        return <div>No projects available.</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allProjects.map((project, index) => {
                    let image = project.image ?? `https://assets.bounceexchange.com/assets/uploads/clients/5264/creatives/38d34cbc6a5807926221a8935d9c4322.jpg`;
                    return <Card
                        key={index}
                        title={project.name}
                        link={project.html_url ?? project.demo}
                        image={image}
                        content={project.description}
                    />
            })}
            </div>

        </Suspense>
    );
}

export default Projects;