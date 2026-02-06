import { HiOutlineMail } from "react-icons/hi"
import { FaWhatsapp } from "react-icons/fa"

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="
        relative
        z-20
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        bg-linear-to-br from-[#0032CA] via-[#001E7A] to-black
        text-white
        overflow-hidden
      "
    >
      {/* Glow decorativo */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-[#ACBFF7]/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-[#ACBFF7]/20 rounded-full blur-[120px]" />

      {/* Contenido */}
      <div className="relative z-10 w-[90%] max-w-4xl text-center">
        <h2 className="text-sm uppercase tracking-widest text-[#ACBFF7] mb-4">
          Contacto
        </h2>

        <h3 className="text-4xl md:text-5xl font-semibold mb-6">
          Hablemos de tu próximo proyecto
        </h3>

        <p className="text-gray-300 max-w-xl mx-auto mb-12">
          Escríbenos y llevemos tu idea a un producto digital sólido, moderno y escalable.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          
          {/* Email */}
          <a
            href="mailto:vitta.asesorias@vittaseguro.com.mx"
            className="
              flex items-center gap-3
              bg-white/10
              backdrop-blur
              border border-white/20
              px-8 py-4
              rounded-xl
              text-white
              font-medium
              hover:bg-white/20
              transition
            "
          >
            <HiOutlineMail className="text-2xl text-[#ACBFF7]" />
            <span>Enviar correo</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5215632530748"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              bg-green-500
              px-8 py-4
              rounded-xl
              text-white
              font-medium
              hover:bg-green-400
              transition
            "
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
