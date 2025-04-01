import { FileDown, User, Award, Briefcase, GraduationCap } from "lucide-react"

export default function DownloadCV() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-slate-800 rounded-xl shadow-2xl my-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-3">Currículum Vitae</h2>
        <p className="text-slate-300 mb-6">Descarga mi CV para conocer mi experiencia profesional completa</p>
        <div className="w-24 h-1 bg-slate-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-700 p-6 rounded-lg shadow-md">
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

        <div className="bg-slate-700 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Habilidades</h3>
          </div>
          <ul className="text-slate-300 space-y-2">
            <li>• Frontend (HTML, CSS, Tailwind, React, JS, Reflex)</li>
            <li>• Backend (Python, DB)</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-700 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Briefcase className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Experiencia</h3>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-slate-200 font-medium">Administrativo</h4>
              <p className="text-slate-400 text-sm">Hospital Dr. Ramon Madariaga • 2020 - Presente</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="text-slate-300 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-slate-200">Educación</h3>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-slate-200 font-medium">Tecnicatura en Analisis de Sistemas</h4>
              <p className="text-slate-400 text-sm">Instituto Combate Mborore • 2024 - Presente</p>
            </div>
            <div>
              <h4 className="text-slate-200 font-medium">Certificación en Desarrollo Web - HTML, CSS</h4>
              <p className="text-slate-400 text-sm">Academia TodoCode • 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/portfolio/src/components/NicolásCabreraCV.pdf"
          download="NicolasCabreraCV.pdf"
          className="flex items-center gap-2 bg-slate-500 hover:bg-slate-600 text-slate-100 font-bold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          <FileDown size={20} />
          Descargar CV
        </a>
      </div>

      <p className="text-center text-slate-400 mt-6 text-sm">Última actualización: Abril 2025</p>
    </div>
  )
}

