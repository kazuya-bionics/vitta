"use client"
import { useActionState } from "react"
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6"
import { submitContactForm } from "@/app/actions"
import Link from "next/link"
import { Button } from "."

const initialState = {
  message: "",
}

export const Contact = () => {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  return (
    <div
      id="contacto"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-[#D0D0D0] px-4 py-12 sm:px-8 lg:px-8"
    >
      <div className="flex flex-col text-2xl">
        <h3 className="font-semibold text-black-800">
          AUN NO HAS HABLADO CON UN ASESOR?
        </h3>
        <h3 className="font-semibold text-black-800 mb-12 md:mb-12">
          EN VITTA SIEMPRE ESTAMOS PARA TI
        </h3>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start gap-8">
        {/* Información de contacto */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-black-800">Correo</h3>
              <a href="mailto:vitta.asesorias@vittaseguro.com.mx" className="text-black-600 hover:text-black-800 transition-colors">
                vitta.asesorias@vittaseguro.com.mx
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-black-800">Teléfono</h3>
              <Button styles={"w-fit text-black-600 hover:text-black-800 transition-colors"}>+52 56 1110 0347</Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-black-800">Redes sociales</h3>
            <ul className="flex gap-3">
              <li>
                <Link
                  href="https://www.facebook.com/61579043823512"
                  className="p-3 hover:scale-105 hover:bg-black bg-black text-white rounded-full transition-all duration-200 inline-flex"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/vittaseguro/"
                  className="p-3 hover:scale-105 hover:bg-black bg-black text-white rounded-full transition-all duration-200 inline-flex"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@VittaSeguro"
                  className="p-3 hover:scale-105 hover:bg-black bg-black text-white rounded-full transition-all duration-200 inline-flex"
                  aria-label="TikTok"
                >
                  <FaYoutube size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2">
          <form
            action={formAction}
            className="w-full space-y-4 rounded-lg"
          >
            {/* Mensaje de estado */}
            {state?.message && (
              <div
                className={`p-3  text-sm ${
                  state.success
                    ? "bg-green-50 text-green-700 border-b-[2px] border-b-[2px]-green-200"
                    : "bg-red-50 text-red-700 border-b-[2px] border-b-[2px]-red-200"
                }`}
                role="alert"
                aria-live="polite"
              >
                {state.message}
              </div>
            )}

            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-black-700 mb-2">
                Nombre *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre completo"
                required
                disabled={pending}
                className="w-full  border-b-[2px] border-b-[2px]-black-300  px-3 py-2 text-sm text-black-700 placeholder:text-black-400     transition disabled:opacity-50 disabled:cursor-not-allowed"
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
              <label htmlFor="email" className="block text-sm font-medium text-black-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                disabled={pending}
                className="w-full  border-b-[2px] border-b-[2px]-black-300  px-3 py-2 text-sm text-black-700 placeholder:text-black-400     transition disabled:opacity-50 disabled:cursor-not-allowed"
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
              <label htmlFor="celular" className="block text-sm font-medium text-black-700 mb-2">
                Celular *
              </label>
              <input
                id="celular"
                name="celular"
                type="tel"
                placeholder="Tu numero"
                required
                disabled={pending}
                className="w-full border-b-[2px] border-b-[2px]-black-300  px-3 py-2 text-sm text-black-700 placeholder:text-black-400     transition disabled:opacity-50 disabled:cursor-not-allowed"
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
              <label htmlFor="edad" className="block text-sm font-medium text-black-700 mb-2 disabled:opacity-75">
                Fecha de nacimiento *
              </label>
              <input
                id="edad"
                name="edad"
                type="date"
                required
                disabled={pending}
                className="w-full  border-b-[2px] border-b-[2px]-black-300  px-3 py-2 text-sm text-black-700     transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="mt-1 h-4 w-4 rounded border-[2px] border-black bg-[#d0d0d0] appearance-none checked:bg-black-600 checked:border-b-[2px]-black checked:after:content-['✔'] checked:after:text-black checked:after:flex checked:after:items-center checked:after:justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="noServidorPublico" className="text-sm text-black-600 cursor-pointer">
                Confirmo que no soy servidor público
              </label>
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={pending}
              className="w-full mt-6 bg-brand text-white text-sm font-medium py-3 px-4  hover:bg-slate-700     transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-[2px]-b-2 border-b-[2px]-white"></div>
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
