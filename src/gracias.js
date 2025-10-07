import React from 'react';

// URL de tu sitio, DEBES CAMBIARLA por la URL donde está alojado tu portafolio.
const HOME_URL = "/"; // Si el sitio está en la raíz, usa "/". Si no, usa la URL completa.

const GraciasPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="bg-white p-12 rounded-xl shadow-2xl border border-green-100 max-w-lg w-full text-center">
        
        {/* Ícono de confirmación (SVG de Lucide) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mx-auto text-green-500 mb-6"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>

        <h1 className="text-3xl font-extrabold text-slate-800 mb-3">
          ¡Mensaje Enviado!
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Gracias por contactarme. Revisaré tu mensaje pronto y te responderé en breve.
        </p>

        {/* Botón de regreso, usando el mismo estilo índigo */}
        <a 
          href={HOME_URL}
          className="inline-block w-full sm:w-auto px-6 py-3 text-base font-semibold text-white transition duration-300 rounded-lg bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transform hover:scale-[1.01]"
        >
          Regresar a mi Portafolio
        </a>

      </div>
    </div>
  );
};

// Puedes usar este componente para mostrar la página después del envío
// import GraciasPage from './GraciasPage.jsx'; // si estuviera en otro archivo.
// En tu caso, simplemente copia la función GraciasPage al archivo principal.

export default GraciasPage;
