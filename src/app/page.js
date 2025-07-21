import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[440vh]">
      <Hero/>
      <About/>
      <Cases/>
      <Services/>
      <Contact/>
    </div>
  );
}
