"use client"

import { useState } from "react"

export default function Projects() {
  const [activeProject] = useState(0)

  const projects = [
    {
      id: 0,
      title: "Mi Proyecto de Reflex",
      description:
        "Portafolio web desarrollado con Reflex, combinando potencia y elegancia en una interfaz moderna.",
      longDescription:
        "Este proyecto utiliza Reflex para crear una experiencia web fluida y reactiva. Implementé animaciones personalizadas, y un diseño completamente responsive.",
      link: "https://portfolio-cyan-panda.reflex.run",
      github: "https://github.com/username/proyecto-reflex",
      tags: ["Reflex", "Python", "Web"],
      buttonStyle: {
        fontSize: "7rem",
        fontWeight: "bold",
        borderRadius: "15px 35px",
        border: "4px solid",
        backgroundImage: "radial-gradient(circle, #00DDEB 4%, #5B42F3 50%, #fa02aa 80%)",
      },
      buttonContent: "N",
      color: "from-blue-500 via-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="proyectos" className="py-10 px-4 overflow-hidden relative">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-slow-spin blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-6">
          <h1 className="text-slate-300 text-4xl md:text-5xl font-extrabold tracking-wide inline-block relative">
            <span className="relative z-10">Proyectos</span>
            <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </h1>
        </div>

        {/* Proyecto activo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
          {/* Visualización del proyecto (izquierda en desktop, arriba en móvil) */}
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="relative group">
              {/* Efecto de resplandor */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${projects[activeProject].color} rounded-2xl blur-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              {/* Contenido del botón o icono */}
              <div className="relative z-10 p-5 flex justify-center items-center">
                {projects[activeProject].buttonContent ? (
                  <a
                    href="https://portfolio-cyan-panda.reflex.run"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button
                      style={projects[activeProject].buttonStyle}
                      className="text-black font-sans p-3 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl"
                    >
                      {projects[activeProject].buttonContent}
                    </button>
                  </a>
                ) : (
                  <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer" className="block">
                    <div
                      className={`w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-r ${projects[activeProject].color} text-white p-6 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl`}
                    >
                      {projects[activeProject].icon}
                    </div>
                  </a>
                )}
              </div>

              {/* Círculos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-sm opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 blur-sm opacity-70"></div>
            </div>
          </div>

          {/* Detalles del proyecto (derecha en desktop, abajo en móvil) */}
          <div className="lg:col-span-3 bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-6">
              <div>
                <h2
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${projects[activeProject].color} text-3xl font-bold mb-3`}
                >
                  {projects[activeProject].title}
                </h2>
                <p className="text-slate-300 text-lg mb-2">{projects[activeProject].description}</p>
                <p className="text-slate-400">{projects[activeProject].longDescription}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${projects[activeProject].color} bg-opacity-10 text-white`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

