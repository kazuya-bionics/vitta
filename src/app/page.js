import { MouseEffects } from "@/components/home/MouseEffects"
import { Hero, About, Contact, Intersection_1 } from "@/components/home/"
import { Video } from "@/components/home/Video"
import { Services } from "@/components/home/Services"
import { Loader } from "@react-three/drei"

const page = () => {
  return (
    <main>
      <Loader/>
      <Hero/>
      <Intersection_1/>
      <MouseEffects/>
      <About />
      <Video/>
      <Services/>
      <Contact/>
    </main>
  )
}

export default page