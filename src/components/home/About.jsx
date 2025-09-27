import Link from "next/link"

export const About = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute left-8 top-24 text-4xl">
        <h3>Somos Vitta, <span className="text-accent">especialistas</span> en</h3>
        <h3>seguros de <span className="text-accent">vida</span></h3>
        <h3><span className="text-accent">Amamos</span> lo que hacemos</h3>
      </div>
      <div className="absolute right-8 bottom-24 text-2xl">
        <p>Cada promesa cumplida es un</p>
        <p>compromiso con tu vida.</p>
        <p>Descubre cómo en Vitta hacemos</p>
        <p>de la protección una realidad.</p>
        <Link
          href="https://www.facebook.com/profile.php?id=61579043823512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 bg-brand text-base rounded-[45px] mt-4"
        >
          Quienes somos...
        </Link>
      </div>
      <div className="w-full h-screen absolute -z-10">
        <svg
          width="100%"
          height="100vh"
          viewBox="0 0 1280 832"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1281 1.5L1030.3 128.444L969.5 304L654 355.5L559.5 525.5L281.33 547.643L-1 832.5"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="w-[90%] h-16 bg-accent rounded-t-[45px] absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  )
}
