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
      <Services/>
      <Showreel/>
      <Contact/>
    </main>
  )
}

export default page