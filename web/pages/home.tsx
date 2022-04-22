import React from "react"
import Layout from "../components/Layout/Layout"
import LandingAnimation from "../components/Animations/LandingAnimation"

interface HomeProps {}

const Home: HomeProps = () => {
  return (
    <Layout>
      <main className="bg-pink-300">
        <div className="absolute right-0 top-0">
          {/* TODO - use next/image */}
          <img src="./images/home-top-right.png" alt="shape" />
        </div>
        <section id="welcome" className="relative w-full px-28 pt-40 pb-80">
          <h1 id="welcome-title" className={"font-playfair text-8xl"}>
            Bienvenida
          </h1>
          <p
            id="welcome-message"
            className="ml-4 mt-6 font-proxima-nova text-sm leading-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Ac br pulvinar sapien sed proin quisque sed dui amet.
          </p>

          <LandingAnimation />
        </section>
        {/*  */}
      </main>
    </Layout>
  )
}

export default Home
