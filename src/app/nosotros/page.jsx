"use client"

import casesImageTwo from "../../../public/assets/images/casesImageTwo.jpg"
import heroImageLife from "../../../public/assets/images/heroImageLife.jpg"
import Image from "next/image"

import { FaHandshake, FaUsers, FaRegLightbulb, FaRocket, FaShield, FaHeart } from "react-icons/fa6"

import { useRef, useState, useEffect } from "react"

const Nosotros = () => {

  const companyData = {
  title: "Nosotros",
  subtitle: "Conoce quiénes somos y qué nos impulsa a crear soluciones excepcionales para tu negocio.",
  description: [
    "Somos una empresa líder en soluciones de protección y asesoría en seguros, comprometida con la confianza, la transparencia y la excelencia en el servicio. Con más de 10 años de experiencia, hemos acompañado a cientos de clientes a proteger lo que más valoran y a tomar decisiones financieras inteligentes.",
    "Nuestro equipo de expertos combina conocimiento, experiencia y cercanía para ofrecer coberturas y estrategias que realmente se adaptan a cada necesidad. Creemos en la importancia de construir relaciones duraderas, basadas en la tranquilidad y el respaldo mutuo.",
    "Cada cliente es una oportunidad para demostrar nuestra vocación de servicio y nuestro compromiso con su bienestar. Trabajamos de la mano contigo para entender tus prioridades y diseñar soluciones de seguros que generen seguridad y valor real en tu vida.",
  ],
  image: heroImageLife,
  values: [
    {
      icon: FaHandshake,
      title: "Confianza",
      description: "Construimos relaciones sólidas basadas en la transparencia y el compromiso.",
    },
    {
      icon: FaUsers,
      title: "Colaboración",
      description: "Trabajamos en equipo con nuestros clientes para lograr objetivos comunes.",
    },
    {
      icon: FaRegLightbulb,
      title: "Innovación",
      description: "Aplicamos las últimas tecnologías para crear soluciones vanguardistas.",
    },
    {
      icon: FaRocket,
      title: "Agilidad",
      description: "Entregamos resultados rápidos sin comprometer la calidad.",
    },
    {
      icon: FaShield,
      title: "Seguridad",
      description: "Protegemos la información y los activos digitales de nuestros clientes.",
    },
    {
      icon: FaHeart,
      title: "Pasión",
      description: "Amamos lo que hacemos y se refleja en cada cliente realizado",
    },
  ],
}

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Hook para detectar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])


  return (
    <main>
      <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative z-10 overflow-hidden">   
            <Image
              src={casesImageTwo}
              alt="Fondo sección héroe"
              fill
              className="object-cover object-center"
              priority
            />
      
           
            <div className="absolute inset-0 bg-black/50 z-10" />
      
           
            <div className="relative flex flex-col items-center justify-center gap-y-4 z-20 text-white p-8 text-center">
              <h3 className="text-6xl font-bold uppercase">¿Porque vitta es lo mejor para ti?</h3>
              <h3 className="text-sm opacity-80 ">Vitta esta comprometido con el una politica justa y transparente, mira todo lo que vitta tiene para ti</h3>
              <button className="p-1 text-sm flex text-white/80 justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[100px]"> cotiza aqui </button>
            </div>
          </div>
          <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {companyData.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{companyData.subtitle}</p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-200/50">
              <Image
                src={companyData.image || "/placeholder.svg"}
                alt="Nuestro equipo"
                width={500}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-orange-500/10 pointer-events-none" />
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-900 rounded-full opacity-10 blur-xl" />
          </div>

          {/* Right Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Company Description */}
            <div className="space-y-6">
              {companyData.description.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button className=" bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25 hover:scale-105">
                <a className="inline-flex items-center gap-3" href="como obtengo el link de perfil de facebook. este me sirve https://www.facebook.com/profile.php?id=61579043823512">
                  <span>Conoce más sobre nosotros</span>
                  <FaRocket className="w-4 h-4" />
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Valores</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className={`group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Nosotros