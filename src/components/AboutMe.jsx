import './AboutMe.css';
import ShinyText from "../components/ShinyText";
import MeIcons from "./base/MeIcons.jsx";

const AboutMe = () => {
    return (
        <div className='container'>
            <section className="text-center">
                <ShinyText
                    text="Sobre mí"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </section>

            <div className="container--about"> 
                <div className="description box">
                    <h3>🔥 Pragmático</h3>
                    <div className="content flex flex-col md:flex-row gap-6">
                        <div className="flex justify-center">
                            <MeIcons icon="standing" />
                        </div>
                        
                        <div className='md:ml-8 summary space-y-4'> 
                            <p>
                                Estoy certificado como Ingeniero de software y especializado en seguridad informática.
                            </p>
                            <p>
                                💻 Siempre me han interesado las mejores prácticas de programación, 
                                cuestionar la forma en que se hacen las cosas y trabajar en equipo.
                            </p>
                            <p>
                                🎨 Mi conocimiento crece gracias a los{' '}
                                <a 
                                    className="underline hover:text-yellow-400 transition-colors"
                                    href='https://github.com/juanrraider666'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    proyectos
                                </a>
                                {' '}en los que he participado, y en el camino sigo aprendiendo nuevas 
                                tecnologías como LARAVEL, REACT NATIVE y GOLANG.
                            </p>
                            
                            <blockquote className="mt-8 pl-4 italic border-l-4 border-gray-700">
                                <q className="block text-xs text-gray-500">
                                    Nunca olvides qué eres. El resto del mundo no lo olvidará. 
                                    Conviértelo en tu armadura y nadie podrá usarlo para herirte.
                                </q>
                                <cite className="block mt-2 text-sm text-gray-500 text-right not-italic">
                                    — Tyrion Lannister
                                </cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            
                <div className="about-career">
                    <div className="box">
                        <h3>Desarrollo Full-Stack</h3>
                        <p>
                            Entrego soluciones completas, desde el diseño hasta el desarrollo y la IA/ML, 
                            con una trayectoria comprobada en la creación de sitios web impactantes y de alto rendimiento.
                        </p>
                    </div>
            
                    <div className="box">
                        <h3>Seguridad Informática</h3>
                        <p>
                            Implemento medidas de seguridad robustas para proteger tus datos y los de tus usuarios, 
                            asegurando la integridad y confidencialidad de la información en todo momento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;