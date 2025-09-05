"use client"
import { useActionState } from "react"
import { Facebook, Instagram, Music } from "lucide-react"
import { submitContactForm } from "@/app/actions"

const initialState = {
  message: "",
}

export const Contact = () => {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent px-4 py-12 sm:px-8 lg:px-8"
    >
      <h4 className="text-3xl font-semibold text-slate-800 text-center mb-8 md:mb-12">
        ¡Recibe atención personalizada!
      </h4>

      <div className="w-full flex flex-col md:flex-row items-start gap-8">
        {/* Información de contacto */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-800">Correo</h3>
              <a href="mailto:vittaseguro@gmail.com" className="text-slate-600 hover:text-slate-800 transition-colors">
                vittaseguro@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-800">Teléfono</h3>
              <a href="tel:+527205274302" className="text-slate-600 hover:text-slate-800 transition-colors">
                +52 720 527 4302
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-slate-800">Redes sociales</h3>
            <ul className="flex gap-3">
              <li>
                <a
                  href="#"
                  className="p-3 hover:scale-105 hover:bg-orange-500 bg-orange-400 text-white rounded-full transition-all duration-200 inline-flex"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-3 hover:scale-105 hover:bg-orange-500 bg-orange-400 text-white rounded-full transition-all duration-200 inline-flex"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-3 hover:scale-105 hover:bg-orange-500 bg-orange-400 text-white rounded-full transition-all duration-200 inline-flex"
                  aria-label="TikTok"
                >
                  <Music size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2">
          <form
            action={formAction}
            className="w-full shadow-lg md:shadow-xl space-y-4 p-6 rounded-lg bg-white border border-slate-100"
          >
            {/* Mensaje de estado */}
            {state?.message && (
              <div
                className={`p-3 rounded-md text-sm ${
                  state.success
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                role="alert"
                aria-live="polite"
              >
                {state.message}
              </div>
            )}

            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre completo"
                required
                disabled={pending}
                className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby={state?.errors?.nombre ? "nombre-error" : undefined}
              />
              {state?.errors?.nombre && (
                <p id="nombre-error" className="mt-1 text-sm text-red-600" role="alert">
                  {state.errors.nombre[0]}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                disabled={pending}
                className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby={state?.errors?.email ? "email-error" : undefined}
              />
              {state?.errors?.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            {/* Celular */}
            <div>
              <label htmlFor="celular" className="block text-sm font-medium text-slate-700 mb-2">
                Celular *
              </label>
              <input
                id="celular"
                name="celular"
                type="tel"
                placeholder="720 527 4302"
                required
                disabled={pending}
                className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby={state?.errors?.celular ? "celular-error" : undefined}
              />
              {state?.errors?.celular && (
                <p id="celular-error" className="mt-1 text-sm text-red-600" role="alert">
                  {state.errors.celular[0]}
                </p>
              )}
            </div>

            {/* Fecha de nacimiento */}
            <div>
              <label htmlFor="edad" className="block text-sm font-medium text-slate-700 mb-2">
                Fecha de nacimiento *
              </label>
              <input
                id="edad"
                name="edad"
                type="date"
                required
                disabled={pending}
                className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby={state?.errors?.edad ? "edad-error" : undefined}
              />
              {state?.errors?.edad && (
                <p id="edad-error" className="mt-1 text-sm text-red-600" role="alert">
                  {state.errors.edad[0]}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="noServidorPublico"
                name="noServidorPublico"
                type="checkbox"
                disabled={pending}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="noServidorPublico" className="text-sm text-slate-600 cursor-pointer">
                Confirmo que no soy servidor público
              </label>
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={pending}
              className="w-full mt-6 bg-slate-800 text-white text-sm font-medium py-3 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                "¡Todo Listo!"
              )}
            </button>
          </form> 
        </div>
      </div>
    </div>
  )
}
