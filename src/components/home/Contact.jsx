"use client"

import React, { useState } from 'react';

export const Contact = () => {

  const [formData, setFormData] = useState(null)

  const handleForm = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent px-4 py-12 sm:px-6 lg:px-8">
      <h4 className="text-3xl font-semibold text-slate-800 text-center mb-12">
        ¡Recibe atención personalizada!
      </h4>

      <form onSubmit={handleForm} className="w-full max-w-md space-y-4">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm text-slate-600 mb-1">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="w-full bg-transparent border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition shadow-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-slate-600 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition shadow-sm"
          />
        </div>

        {/* Celular */}
        <div>
          <label htmlFor="celular" className="block text-sm text-slate-600 mb-1">
            Celular
          </label>
          <input
            id="celular"
            type="tel"
            placeholder="Celular"
            className="w-full bg-transparent border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition shadow-sm"
          />
        </div>

        {/* Edad */}
        <div>
          <label htmlFor="edad" className="block text-sm text-slate-600 mb-1">
            Edad
          </label>
          <input
            id="edad"
            type="date"
            className="w-full bg-transparent border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition shadow-sm"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <label htmlFor="check-publico" className="flex items-center cursor-pointer">
            <input
              id="check-publico"
              type="checkbox"
              className="h-5 w-5 rounded border border-slate-300 checked:bg-slate-800 checked:border-slate-800 appearance-none transition peer"
            />
            <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 transform -translate-x-1/2 -translate-y-1/2 left-[1.15rem] top-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-3 text-sm text-slate-600">No soy servidor público</span>
          </label>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full mt-2 bg-slate-800 text-white text-sm py-2 px-4 rounded-md border border-transparent shadow-md hover:bg-slate-700 hover:shadow-lg transition disabled:opacity-50 disabled:pointer-events-none"
        >
          ¡Todo Listo!
        </button>
      </form>
    </div>
  );
};

