export const GlowOrb = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="orb" />

      <svg
        className="absolute w-[190px] h-[190px] animate-spin-slow"
        viewBox="0 0 190 190"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 95,95
              m -64, 0
              a 64,64 0 1,1 128,0
              a 64,64 0 1,1 -128,0
            "
          />

        </defs>

        <text
          fill="rgba(0,0,0,0.65)"
          fontSize="10"
          letterSpacing="3"
        >
          <textPath className="font-medium" href="#circlePath">
            DESIGN • ANIMATION • DEVELOPMENT •
          </textPath>
        </text>
      </svg>
    </div>
  );
}
