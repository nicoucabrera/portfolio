export default function Projects() {
    return (
      <section id="projects" className="p-10 text-center">
        <h2 className="text-slate-300 text-3xl font-bold">Proyectos</h2>
        <div>
          <h1>Mi Proyecto de Reflex</h1>
          <iframe 
            src="https://portfolio-cyan-panda.reflex.run/" 
            width="100%" 
            height="600px" 
            style={{ border: 'none' }}
            title="Proyecto Reflex"
          ></iframe>
        </div>
      </section>
    );
  }
  