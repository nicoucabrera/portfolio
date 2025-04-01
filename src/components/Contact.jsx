export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito');
    e.target.submit();
  };
  return (
    <div id="contact" className="min-w-xl mx-auto bg-slate-200 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contacto</h2>
      <form
        action="https://formsubmit.co/nicoucabreradev@gmail.com"
        method="POST"
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          required
          className="p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo"
          required
          className="p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <textarea
          name="message"
          placeholder="Tu Mensaje"
          rows="4"
          required
          className="p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
        ></textarea>
        <button 
          type="submit"
          className="bg-slate-500 hover:bg-slate-700 text-slate-200 font-bold py-2 px-4 rounded-md transition-all"
        >
          Enviar
        </button>
        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <input type="hidden" name="_captcha" value="false" />
      </form>

    </div>
  );
}


  