import React from "react"

enum Positions {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

interface MoonPosition {
  position: Positions
}

const BlackMoon = ({ position }: MoonPosition) => {
  const cssPosition =
    position === Positions.TOP ? "left-2 top-1/4" : "right-2 bottom-1/4"
  return (
    <div
      className={`absolute block h-6 w-6 rounded-full bg-gray-800 ${cssPosition}`}
    ></div>
  )
}

const TwoColorMoon = ({ position }) => {
  const cssPosition = position === Positions.TOP ? "-top-5" : "-bottom-5"
  return (
    <div
      className={`absolute block h-9 w-9 rounded-full bg-gold-400 ${cssPosition} overflow-hidden`}
    >
      <div className="relative left-2 h-full w-full">
        <span className="absolute right-0 block h-full w-full rounded-full bg-gray-800"></span>
      </div>
    </div>
  )
}

export default function LandingAnimation() {
  return (
    <div
      id="animation"
      className="absolute right-28 top-10 flex animate-spin-slow items-center justify-center rounded-full border border-dashed border-gold-600"
      style={{ width: "550px", height: "550px" }}
    >
      <TwoColorMoon position={Positions.TOP} />
      <TwoColorMoon position={Positions.BOTTOM} />
      <div
        className="relative flex items-center justify-center rounded-full border border-solid border-gold-500"
        style={{ width: "392px", height: "392px" }}
      >
        <BlackMoon position={Positions.TOP} />
        <BlackMoon position={Positions.BOTTOM} />
        <div
          className="relative flex items-center justify-center rounded-full border border-dashed border-gold-600"
          style={{ width: "190px", height: "190px" }}
        ></div>
      </div>
    </div>
  )
}
