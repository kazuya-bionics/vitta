import casesImageFour from "../../../public/assets/images/casesImageFour.jpg"
import Image from "next/image"

import { ArrowRight } from "lucide-react"

const Casos = () => {

  const casesData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Complete digital transformation for a retail company, increasing sales by 150%.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/cases/ecommerce-platform",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Real-time analytics platform for investment management with advanced data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/cases/financial-dashboard",
  },
  {
    id: 3,
    title: "Healthcare App",
    description: "Mobile application connecting patients with healthcare providers, serving 10k+ users.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/cases/healthcare-app",
  },
  {
    id: 4,
    title: "Logistics System",
    description: "Supply chain optimization platform reducing operational costs by 30%.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/cases/logistics-system",
  },
  {
    id: 5,
    title: "EdTech Platform",
    description: "Online learning management system with interactive features for 50k+ students.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/cases/edtech-platform",
  },
  {
    id: 6,
    title: "Smart City IoT",
    description: "IoT infrastructure management for smart city initiatives and urban planning.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/cases/smart-city-iot",
  },
]

  return (
    <main>
      <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative z-10 overflow-hidden">   
            <Image
              src={casesImageFour}
              alt="Fondo sección héroe"
              fill
              className="object-cover object-center"
              priority
            />
      
           
            <div className="absolute inset-0 bg-black/50 z-10" />
      
           
            <div className="relative flex flex-col items-center justify-center gap-y-4 z-20 text-white p-8 text-center">
              <h3 className="text-6xl font-bold uppercase">Vitta te acompaña</h3>
              <h3 className="text-sm opacity-80 ">Conoce lo que nuestros expertos han hecho para cambiar el mundo!</h3>
              <button className="p-1 text-sm flex text-white/80 justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[100px]"> cotiza aqui </button>
            </div>
          </div>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Our Cases</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results through
            innovative solutions.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {casesData.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-50">
                <Image
                  src={caseItem.image || "/placeholder.svg"}
                  alt={caseItem.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                  {caseItem.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">{caseItem.description}</p>

                {/* Call to Action */}
                <a
                  href={caseItem.link}
                  className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 group/link"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Cases Button */}
        <div className="text-center mt-16">
          <a
            href="/cases"
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25 hover:scale-105"
          >
            <span>View All Cases</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Casos