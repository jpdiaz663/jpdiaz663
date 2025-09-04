import './AboutMe.css';

const AboutMe = () => {
    return (
    <div className="container-about"> 
        <div className="description box">
            <h2>¿Qué hago?</h2>
            <div className="content">
                <span>
                    <span className="white-space-pre"> </span>
                    <br /><p>💾 Desarrollo de aplicaciones móviles híbridas y nativas en KOTLIN, IONIC y JAVA, gestionando el control de versiones con GIT.</p>
                    <span className="white-space-pre"> </span>
                    <br /><p>💻 Mi enfoque en el área de bases de datos está en las bases de datos relacionales.</p>
                    <span className="white-space-pre"> </span>
                    <br /><p>🎨 Mi conocimiento crece gracias a los proyectos en los que he participado <a style={{textDecoration: 'underline'}} href='https://github.com/juanrraider666'>reposjuandiaz</a>, y en el camino sigo aprendiendo nuevas tecnologías como LARAVEL, REACT NATIVE y GOLANG.</p>
                </span>
            </div>
        </div>
    
        <div className="about-career">
            <div className="box">
                <h3>Desarrollo Full-Stack</h3>
                <p>Entregamos soluciones completas, desde el diseño hasta el desarrollo y la IA/ML, con una trayectoria comprobada en la creación de sitios web impactantes y de alto rendimiento.</p>
            </div>
    
            <div className="box">
                <h3>Revisiones Ilimitadas</h3>
                <p>
                    Con revisiones ilimitadas y soporte dedicado, aseguramos que tu visión y tu sitio web cobren vida exactamente como lo imaginas.
                </p>
            </div>
        </div>
    </div>
    
    );
}

export default AboutMe;