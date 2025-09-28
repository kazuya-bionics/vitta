import { MouseEffects } from "@/components/home/MouseEffects"
import { Hero, About, Contact, Intersection_1 } from "@/components/home/"
import { Video } from "@/components/home/Video"
import { World } from "@/components/home/World"

const page = () => {
  return (
    <main>
      <Hero/>
      <Intersection_1/>
      <MouseEffects/>
      <About />
      <Video/>
      <World/>
      <Contact/>
    </main>
  )
}

export default page