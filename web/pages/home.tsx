import React from "react"
import Layout from "../components/Layout/Layout"
import LandingAnimation from "../components/Animations/LandingAnimation"
import Image from "next/image"

interface HomeProps {}

const Home: HomeProps = () => {
  return (
    <Layout>
      <main className="bg-pink-300">
        <div className="absolute right-0 top-0">
          {/* TODO - use next/image */}
          <img src="./images/home-top-right.png" alt="shape" />
        </div>
        <section id="welcome" className="relative w-full px-28 pt-40 pb-64">
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
        <section
          id="profile"
          className="relative flex w-full items-center justify-start px-28 pb-20"
        >
          <img
            src="./images/home-left-middle.png"
            alt="figura fondo"
            className="absolute left-0 top-48 z-0"
          />
          <div className="relative z-10">
            <img
              src="/images/candela-manzi.png"
              alt="Candela Manzi"
              className="block max-w-sm rounded-tl-full rounded-tr-full border-4 border-white"
              style={{ width: 320 }}
            />
            <img
              className="absolute -right-20 -top-20"
              src="/images/estrellas1.png"
              alt="estrellas"
            />
          </div>
          <div className="relative top-20 mt-44 ml-24 w-96">
            <h2 className="font-playfair text-5xl">Confiá en tu intuición</h2>
            <p className="mt-6 font-proxima-nova text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              pulvinar sapien sed proin quisque sed dui amet, volutpat. Elit
              imperdiet in placerat lectus a vitae praesent dui. Ac interdum
              euismod aliquam imperdiet nulla amet ipsum orci, pharetra. Viverra
              sollicitudin massa a euismod.{" "}
            </p>
          </div>
          <img
            src="./images/diamante1.png"
            alt="figura diamante"
            className="absolute left-2/3 top-20"
          />
          <img
            src="./images/mancha3.png"
            alt="figura mancha"
            className="absolute right-0 top-80"
          />
        </section>
        {/*  */}
      </main>
    </Layout>
  )
}

export default Home
