import React from "react"

/* eslint-disable no-unused-vars */
export enum Positions {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

interface MoonPosition {
  position: Positions
}

export const BlackMoon = ({ position }: MoonPosition) => {
  const cssPosition =
    position === Positions.TOP ? "left-2 top-1/4" : "right-2 bottom-1/4"
  return (
    <div
      className={`absolute block h-6 w-6 rounded-full bg-gray-800 ${cssPosition}`}
    ></div>
  )
}

export const TwoColorMoon = ({ position }) => {
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
