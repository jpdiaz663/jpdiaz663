import './AboutMe.css';
import ShinyText from "../components/ShinyText";
import LaserFlow from "../components/LaserFlow.jsx";

const AboutMe = () => {
    return (
    <div className='container'>

     <section class="text-center">
       <ShinyText
                text="Sobre mí"
                disabled={false}
                speed={3}
                className="custom-class"
            />
    </section>
       

    <div className="container--about"> 
        <div className="description box">
            <h3>¿Qué hago?</h3>
            <div className="content">
                <span>
                    <span className="white-space-pre"> </span>
                    <br /><p>💾 Desarrollo de aplicaciones móviles híbridas y nativas en KOTLIN, IONIC y JAVA, gestionando el control de versiones con GIT.</p>
                    <span className="white-space-pre"> </span>
                    <br /><p>💻 Mi enfoque en el área de bases de datos está en las bases de datos relacionales.</p>
                    <span className="white-space-pre"> </span>
                    <br /><p>🎨 Mi conocimiento crece gracias a los <a style={{textDecoration: 'underline'}} href='https://github.com/juanrraider666'>proyectos</a> en los que he participado, y en el camino sigo aprendiendo nuevas tecnologías como LARAVEL, REACT NATIVE y GOLANG.</p>
                </span>
            </div>
        </div>
    
        <div className="about-career">
            <div className="box">
                <h3>Desarrollo Full-Stack</h3>
                <p>Entrego soluciones completas, desde el diseño hasta el desarrollo y la IA/ML, con una trayectoria comprobada en la creación de sitios web impactantes y de alto rendimiento.</p>
            </div>
    
            <div className="box">
                <h3>Revisiones Ilimitadas</h3>
                <p>
                    Con revisiones ilimitadas y soporte dedicado, aseguramos que tu visión y tu sitio web cobren vida exactamente como lo imaginas.
                </p>
            </div>
        </div>
    </div>
    </div>
    );
}

export default AboutMe;