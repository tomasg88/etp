import React from 'react'

export default function ProfileSection() {
  return (
    <>
      <img
        alt="figura fondo"
        className="absolute top-[45rem] left-0 z-0"
        src="./images/home-left-middle.png"
      />
      <img
        alt="figura mancha"
        className="absolute right-0 top-[65rem]"
        src="./images/mancha3.png"
      />
      <section
        className="relative flex w-full items-center justify-start pb-20"
        id="profile"
      >
        <div className="relative z-10">
          <img
            alt="Candela Manzi"
            className="block max-w-sm rounded-tl-full rounded-tr-full border-4 border-white"
            src="/images/candela-manzi.png"
            style={{ width: 320 }}
          />
          <img
            alt="estrellas"
            className="absolute -right-20 -top-20 animate-pulse"
            src="/images/estrellas1.png"
          />
        </div>
        <div className="relative top-20 mt-44 ml-24 w-96">
          <h2 className="font-playfair text-5xl">Confiá en tu intuición</h2>
          <p className="mt-6 font-proxima-nova text-sm leading-6 opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar
            sapien sed proin quisque sed dui amet, volutpat. Elit imperdiet in
            placerat lectus a vitae praesent dui. Ac interdum euismod aliquam
            imperdiet nulla amet ipsum orci, pharetra. Viverra sollicitudin
            massa a euismod.{' '}
          </p>
        </div>
        <img
          alt="figura diamante"
          className="absolute left-3/4 top-20"
          src="./images/diamante1.png"
        />
      </section>
    </>
  )
}
