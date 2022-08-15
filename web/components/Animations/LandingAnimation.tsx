import React from 'react'
import { Positions, TwoColorMoon, BlackMoon } from '../Shapes/TwoColorMoon'

export default function LandingAnimation() {
  return (
    <div
      className="absolute right-0 top-10 flex items-center justify-center rounded-full border border-dashed border-gold-600"
      id="animation"
      style={{ width: '550px', height: '550px' }}
    >
      <TwoColorMoon position={Positions.TOP} />
      <TwoColorMoon position={Positions.BOTTOM} />
      <div
        className="relative flex items-center justify-center rounded-full border border-solid border-gold-500"
        style={{ width: '392px', height: '392px' }}
      >
        <BlackMoon position={Positions.TOP} />
        <BlackMoon position={Positions.BOTTOM} />
        <div
          className="relative flex items-center justify-center rounded-full border border-dashed border-gold-600 p-3"
          style={{ width: '190px', height: '190px' }}
        >
          <img alt="welcome shapes" src="./images/svg/shape-group.svg" />
        </div>
      </div>
    </div>
  )
}
