

const SimpleHero = ({children}) => {    
  return (
    <section className="text-center py-20 bg-gradient-to-r text-white">
      <h1 className="text-4xl font-bold mb-4">
        Hola, soy Juan Diaz{" "}
        <span className="text-yellow-300">Desarrollador Web</span>
      </h1>
      <p className="text-lg mb-6">
        Especialista en Drupal, Backend y soluciones web modernas.
      </p>

      <div className="links flex gap-4 justify-center">
        {children}
      </div>
    </section>
  );
};

export default SimpleHero;