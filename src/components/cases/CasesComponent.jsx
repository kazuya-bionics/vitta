import Image from "next/image"

import { ArrowRight } from "lucide-react"

import casesImageOne from "../../../public/assets/images/casesImageOne.jpg"
import casesImageTwo from "../../../public/assets/images/casesImageTwo.jpg"
import casesImageTree from "../../../public/assets/images/casesImageTree.jpg"
import casesImageFour from "../../../public/assets/images/casesImageFour.jpg"
import { Button } from "../home"

export const CasesComponent = () => {
    const casesData = [
    {
        id: 1,
        title: "Resolvemos problemas con aseguradoras",
        description: "Olvídate del papeleo, retrasos y respuestas confusas: nosotros negociamos, tú ganas",
        image: casesImageOne,
        mensaje:"Tengo un tema con una aseguradora puedes ayudarme?"
    },
    {
        id: 2,
        title: "Analisis Financiero",
        description: "Descubre en qué se va tu dinero y cómo hacerlo rendir más, sin complicaciones.",
        image: casesImageTwo,
        mensaje:"Quiero poner en orden mis finanzas, ¿que hago?"
    },
    {
        id: 3,
        title: "Consultoria en seguros",
        description: "Te guiamos para que pagues lo justo y estés realmente protegido.",
        image: casesImageTree,
        mensaje:"Hablame de los seguros que manejan!"
    },
    {
        id: 4,
        title: "Pago de dividendos e inversiones",
        description: "Invertir bien es cobrar tranquilo: recibe tus dividendos a tiempo y sin enredos.",
        image: casesImageFour,
        mensaje:"No he podido retirar mis dividendos me ayudas "
    }
    ]
    
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Nuestros Casos</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            En vitta valoramos tu seguridad y queremos que conozcas la trayectoria que nos ha hecho poder acompañarte
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
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
                <Button
                  mensaje={caseItem.mensaje}
                  soyPublico={true}
                  styles="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 group/link"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
