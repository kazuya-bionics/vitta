import casesImageOne from "../../public/assets/images/casesImageOne.jpg"
import casesImageTwo from "../../public/assets/images/casesImageTwo.jpg"
import casesImageTree from "../../public/assets/images/casesImageTree.jpg"
import casesImageFour from "../../public/assets/images/casesImageFour.jpg"
import Image from "next/image"

export const Cases = () => {
  return (
    <div className='w-full h-dvh bg-white flex flex-col justify-center px-8'>
      <div className='w-full h-[50dvh] grid grid-cols-2 gap-4'>
        <div className='bg-gray-400 rounded-[45px] w-full h-full overflow-hidden'>
          <Image className="w-full h-full object-cover" src={casesImageOne} alt="casesImageOne" />
        </div>
        <div className='bg-gray-400 rounded-[45px] w-full h-full overflow-hidden'>
          <Image className="w-full h-full object-cover" src={casesImageTwo} alt="casesImageTwo" />
        </div>
        <div className='bg-gray-400 rounded-[45px] w-full h-full overflow-hidden'>
          <Image className="w-full h-full object-cover" src={casesImageTree} alt="casesImageTree" />
        </div>
        <div className='bg-gray-400 rounded-[45px] w-full h-full overflow-hidden'>
          <Image className="w-full h-full object-cover" src={casesImageFour} alt="casesImageFour" />
        </div>
      </div>

      <div className='w-full  flex flex-col justify-center gap-y-8 mt-12'>
        <h3 className='text-4xl'>Historias que nos recuerdan por qué existimos</h3>
        <div>
          <p className='text-[16px]'>Hay momentos que cambian todo en un instante. Nadie los espera. Nadie los elige. Pero cuando llegan, lo que más reconforta no es tener todas las respuestas, sino saber que no estás solo. Cada caso que atendemos es un recordatorio de por qué hacemos lo que hacemos: para que el amor trascienda, y la seguridad no se pierda cuando más falta hace.</p>
        </div>
      </div>
    </div>
  )
}
