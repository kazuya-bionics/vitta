import { MouseEffects } from "@/components/home/MouseEffects"
import { Hero, About, Contact } from "@/components/home/"

const page = () => {
  return (
    <main>
      <Hero/>
      <MouseEffects/>
      <About />
      <Contact/>
    </main>
  )
}

export default page