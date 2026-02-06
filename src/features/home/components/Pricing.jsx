import { FaCheck } from "react-icons/fa6"

const tiers = [
  {
    name: 'STANDARD',
    id: 'tier-hobby',
    href: 'https://wa.me/5215632530748',
    priceMonthly: '$5199',
    description: "El plan perfecto para empresas en crecimiento.",
    features: ['5 Secciones', 'Diseño profesional', 'Animaciones basicas', 'SEO basico', "Formulario contacto","Integracion Whatsapp", "Correo corporativo", "20 dias de soporte"],
    featured: false,
  },
  {
    name: 'SEO',
    id: 'tier-enterprise',
    href: 'https://wa.me/5215632530748',
    priceMonthly: '$9599',
    description: 'Dedicado a compañias consolidadas o que buscan elevar la presencia de su marca.',
    features: ['8 Secciones', 'Diseño Avanzado', 'Animaciones Complejas', 'SEO Profesional', "Formulario Avanzado","Integracion Whatsapp + CRM", "Correo corporativo x 3", "40 dias de soporte"],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Pricing = () => {
  return (
    <section id="precios" className="relative min-h-screen py-16 bg-black px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      
      {/* Background blur */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto h-64 w-160 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-sm font-semibold text-indigo-400">
          Pricing
        </h2>
        <p className="mt-2 text-3xl font-semibold text-white sm:text-6xl">
          Elige un plan a tu medida
        </p>
        <p className="mt-4 text-sm text-gray-400 sm:text-lg">
          Elige el plan ideal para impulsar tu marca con Vitta.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-1 gap-4 sm:mt-16 sm:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-gray-800' : 'bg-white/5',
              'rounded-2xl p-5 sm:p-8 ring-1 ring-white/10 flex flex-col max-h-[75vh]'
            )}
          >
            <h3 className="text-indigo-400 font-semibold text-sm">
              {tier.name}
            </h3>

            <p className="mt-2 text-4xl font-semibold text-white">
              {tier.priceMonthly}
            </p>

            <p className="mt-3 text-sm text-gray-300">
              {tier.description}
            </p>

            {/* Features scrollables */}
            <ul className="mt-4 space-y-2 text-xs text-gray-300 overflow-y-auto pr-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-2">
                  <FaCheck className="h-4 w-4 text-indigo-400 flex-none" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 hover:bg-indigo-400'
                  : 'bg-white/10 hover:bg-white/20',
                'mt-4 rounded-md py-2 text-center text-sm font-semibold text-white'
              )}
            >
              Inicia Ahora
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
