export default function Hero() {
    return (
      <section className="min-h-1 flex flex-col items-center justify-start text-center ">
        <h1 className="text-slate-200 text-4xl font-extrabold px-4 py-2 rounded-lg transition duration-300 hover:drop-shadow-[0_0_10px_#72e3ff]">Bienvenido a mi portfolio!</h1>
        <br></br>
        <img className="inline-flex object-cover transition-transform duration-300 hover:scale-110 border-4 border-sky-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-sky-600/100 bg-indigo-50 text-cyan-900 h-52 w-52 sca hover:drop-shadow-[0_0_10px_#72e3ff]" src="https://avatars.githubusercontent.com/u/108552455?v=4" alt="profile"/>
      </section>
    );
  }
  