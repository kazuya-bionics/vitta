import imgContact from "../../../assets/images/imgContact.png"
import imgWebApps from "../../../assets/images/imgWebApps.jpg"
import imgAutomation from "../../../assets/images/imgAutomation.jpg"

export const Services = () => {
  const services = [
    {
      title: "Landing page",
      text: `Creamos software optimizado, rápido y seguro con animaciones y microinteracciones enfocadas en conversión.`,
      image: imgContact,
    },
    {
      title: "Aplicaciones web",
      text: `Aplicaciones web escalables con interfaces pulidas y experiencias fluidas para impacto real.`,
      image: imgWebApps,
    },
    {
      title: "Automatización",
      text: `IA y automatización para optimizar procesos, reducir carga manual y generar eficiencia.`,
      image: imgAutomation,
    },
  ]

  return (
    <section
      id="servicios"
      className="
        relative z-0
        bg-radial from-[#ACBFF7] to-[#0032CA]
        py-20
      "
    >
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#ACBFF7] rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Imagen */}
            <div className="h-48 md:h-60">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.text}
                </p>
              </div>

              <a
                href="https://wa.me/5215632530748"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <button className="w-full md:w-auto bg-blue-600 text-white py-2 px-5 rounded-md hover:opacity-90">
                  Contáctanos
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
