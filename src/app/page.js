import { 
  Hero,
  About,
  Services,
  Showreel,
  Contact
 } from "@/components"

const page = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Showreel/>
      <Services/>
      <Contact/>
    </main>
  )
}

export default page