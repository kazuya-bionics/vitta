import { FaHeartbeat, FaCar, FaBriefcaseMedical } from "react-icons/fa"

export const Sticky = () => {

  const services = [
    {
      id: 1,
      icon: FaHeartbeat,
      title: "Seguro de Vida",
      description:
        "Protege a tu familia con nuestros planes de seguro de vida flexibles y accesibles. Cobertura completa para tu tranquilidad.",
    },
    {
      id: 2,
      icon: FaCar,
      title: "Seguro de Auto",
      description:
        "Conduce con confianza con nuestro seguro vehicular. Cobertura amplia, asistencia 24/7 y proceso de reclamación rápido.",
    },
    {
      id: 3,
      icon: FaBriefcaseMedical,
      title: "Seguro de Gastos Médicos",
      description:
        "Cuida tu salud sin preocuparte por los costos. Cobertura médica integral con la mejor red hospitalaria del país.",
    },
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones de seguros personalizadas para proteger lo que más valoras
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                {/* Ícono del servicio */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-[#FF6600]" />
                  </div>
                </div>

                {/* Título del servicio */}
                <h3 className="text-xl font-bold text-[#003366] text-center mb-4">{service.title}</h3>

                {/* Descripción del servicio */}
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>

                {/* Botón de acción (opcional) */}
                <div className="mt-6 text-center">
                  <button className="text-[#FF6600] font-semibold hover:text-[#e55a00] transition-colors duration-300 group-hover:underline">
                    Conocer más →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Necesitas asesoría personalizada para elegir el mejor seguro?</p>
          <button className="bg-[#FF6600] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55a00] transition-colors duration-300 shadow-md hover:shadow-lg">
            Contactar Asesor
          </button>
        </div>
      </div>
    </section>
  );
};
