import { FileDown, User, Award, Briefcase, GraduationCap } from "lucide-react"

export default function DownloadCV() {
  return (
    <div id="cv" className="max-w-3xl mx-auto p-5 bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-2xl my-10">
      <div className="text-center mb-4">
        <h3 className="text-slate-300 mb-6">Descarga mi CV para conocer mi experiencia profesional completa</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-5">
        <div className="bg-slate-700 p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <User className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Perfil Profesional</h3>
          </div>
          <p className="text-slate-300">
            Desarrollador web
          </p>
          <p className="text-slate-300">
            Reparador de pc
          </p>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Award className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Habilidades</h3>
          </div>
          <ul className="text-slate-300 space-y-2">
            <li>• Frontend (HTML, CSS, Tailwind, React, JS, Reflex)</li>
            <li>• Backend (Python, DB)</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-5">
        <div className="bg-slate-700 p-3 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <Briefcase className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Experiencia</h3>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="text-slate-200 font-medium">Administrativo</h4>
              <p className="text-slate-400 text-sm">Hospital Dr. Ramon Madariaga • 2020 - Presente</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <GraduationCap className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Educación</h3>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="text-slate-200 font-medium">Tecnicatura en Analisis de Sistemas</h4>
              <p className="text-slate-400 text-sm">Instituto Combate Mborore • 2024 - Presente</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <a
          href="/portfolio/src/components/NicolásCabreraCV.pdf"
          download="NicolasCabreraCV.pdf"
          className="flex items-center gap-1 bg-slate-500 hover:bg-slate-600 text-slate-100 font-bold py-2 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          <FileDown size={20} />
          Descargar CV
        </a>
      </div>

      <p className="text-center text-slate-400 mt-2 text-sm">Última actualización: Abril 2025</p>
      <br />
      <div></div>
      <br />
    </div>
  )
}

