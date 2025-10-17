import './AboutMe.css';
import ShinyText from "../components/ShinyText";
import LaserFlow from "../components/LaserFlow.jsx";
import MeIcons from "./base/MeIcons.jsx";

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
            <h3>🔥 Pragmatico </h3>
            <div className="content flex flex-col md:flex-row">
                   <span className="white-space-pre"> </span>
                   <div className="flex justify-center">
                        <MeIcons icon="standing"></MeIcons>
                    </div>
                    
                    <div className='md:ml-8 summary'> 
                        <span className="white-space-pre"> </span>
                        <br />
                        <br /><p>Estoy certificado como Ingeniero de software y especializado en seguridad informatica. </p>
                        <span className="white-space-pre"> </span>
                        <br /><p>💻 Siempre me han interesado las mejores prácticas de programación, cuestionar la forma en que se hacen las cosas y trabajar en equipo.</p>
                        <span className="white-space-pre"> </span>
                        <br /><p>🎨 Mi conocimiento crece gracias a los <a style={{textDecoration: 'underline'}} href='https://github.com/juanrraider666'>proyectos</a> en los que he participado, y en el camino sigo aprendiendo nuevas tecnologías como LARAVEL, REACT NATIVE y GOLANG.</p>
                        
                                                <div className="mt-8 pl-4 italic">
                            <q className="block text-xs text-gray-500">
                                Nunca olvides qué eres. El resto del mundo no lo olvidará. Conviértelo en tu armadura y nadie podrá usarlo para herirte.
                            </q>
                            <span className="block mt-2 text-sm text-gray-500 text-right">— Tyrion Lannister</span>
                    </div>
                    
                    
                    </div>
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