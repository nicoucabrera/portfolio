export default function Projects() {
    return (
      <section id="projects" className="p-10 text-center">
      <h1 className="text-slate-300 text-4xl md:text-5xl font-extrabold tracking-wide text-center mb-6">
        Proyectos
      </h1>        
      <div>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-3xl font-semibold text-center m-6">
        Mi Proyecto de Reflex
        </h2>
        <a
        href="https://portfolio-cyan-panda.reflex.run"
        target="_blank"
        rel="noopener noreferrer"
        >
        <button
          style={{
          fontSize: '7rem',
          fontWeight: 'bold',
          borderRadius: '15px 35px',
          border: '4px solid',
          backgroundImage: 'radial-gradient(circle, #00DDEB 4%, #5B42F3 50%, #fa02aa 80%)',
          transition: 'transform 0.3s ease-in-out',
          }}
          className="text-black font-sans p-5 hover:scale-110 hover:shadow-lg"
        >
          N
        </button>
        </a>
      </div>
      </section>
    );
  }
  