import { Hero } from "../features/home/components"
import { About } from "../features/home/components/About"
import { Services } from "../features/home/components/Services"
import { Pricing } from "../features/home/components/Pricing"
import { Showreel } from "../features/home/components/Showreel"
import { Contact } from "../features/home/components/Contact"

export const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Pricing/>
        <Showreel/>
        <Contact/>
    </div>
  )
}
