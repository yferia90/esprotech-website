import Link from "next/link";

const Contact = function () {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="py-6 px-5 text-white text-2xl md:text-3xl font-semibold">
        <h1 className="text-center">Contáctanos</h1>
      </div>
      <div className="w-full">
        <div className="w-full px-5 pb-6 pt-3 max-w-xl mx-auto">
          <form className="flex flex-col bg-white p-3 rounded-xl shadow-lg">
            <label htmlFor="name">Nombre *</label>
            <input
              name="name" id="name"
              type="text"
              className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />

            <label htmlFor="phone">Teléfono</label>
            <input
              name="phone" id="phone"
              type="number"
              className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />

            <label htmlFor="email">Correo *</label>
            <input
              name="email" id="email"
              type="text"
              className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />

            <label htmlFor="message">Cuéntanos lo que necesitas *</label>
            <textarea
              name="message" id="message"
              type="text"
              className="rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:border-transparent w-full"
            />

            <button type="submit" className="w-full py-2 px-5 rounded-xl font-semibold bg-transparen 
            hover:bg-red-600 transition-colors text-red-600 cursor-pointer hover:text-white border-2 border-red-600
            duration-300">
              Enviar
            </button>

            {/* TEXTO PARA MENSAJES DE ERROR
            <div className="text-base text-red-600 w-full font-semibold py-2">
              mensaje de error
            </div>
            */}

          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
