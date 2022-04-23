import React from "react"
import LandingAnimation from "../Animations/LandingAnimation"

export default function WelcomeSection() {
  return (
    <section className="relative w-full px-28 pt-40 pb-64" id="welcome">
      <h1 className="font-playfair text-8xl" id="welcome-title">
        Bienvenida
      </h1>
      <p
        className="ml-4 mt-6 font-proxima-nova text-sm leading-6"
        id="welcome-message"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ac br pulvinar sapien sed proin quisque sed dui amet.
      </p>
      <LandingAnimation />
    </section>
  )
}
