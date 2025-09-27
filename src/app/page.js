import { MouseEffects } from "@/components/home/MouseEffects"
import { Hero, About, Contact, Intersection_1 } from "@/components/home/"
import { Video } from "@/components/home/Video"

const page = () => {
  return (
    <main>
      <Hero/>
      <Intersection_1/>
      <MouseEffects/>
      <About />
      <Video/>
      <Contact/>
    </main>
  )
}

export default page