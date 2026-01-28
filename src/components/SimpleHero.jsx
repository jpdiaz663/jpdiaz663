// PropTypes library for runtime type checking
import PropTypes from "prop-types";

const SimpleHero = ({children}) => {    
  return (
    <section className="text-center py-20 bg-gradient-to-r text-gray-300">
      <h1 className="text-4xl font-bold mb-4">
        Especialista en Drupal, Backend y{" "}
        <span className="text-sky-200">soluciones web modernas.</span>
      </h1>
      <p className="text-lg mb-6">
      Indie Hacker,
      and Full-Stack Developer (en)
      </p>
      <p className="text-lg text-white mb-6">Soy Juan Diaz, me gusta crear y proteger plataformas web seguras y escalables.</p>

      <div className="links flex gap-4 mt-10 justify-center">
        {children}
      </div>
    </section>
  );
};

// PropTypes validation for SimpleHero component
SimpleHero.propTypes = {
    children: PropTypes.node
};

export default SimpleHero;