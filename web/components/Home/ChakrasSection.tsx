import React from 'react'

export default function ChakrasSection() {
  return (
    <>
      <img
        alt="figura fondo"
        className="absolute right-0 top-[120rem]"
        src="./images/home-right-middle.png"
      />
      <section
        aria-label="Bienestar"
        className="relative w-full pt-24 pb-20"
        id="chakras"
        role="contentinfo"
      >
        <h2 className="ml-4 font-playfair text-[250px] leading-[252px] text-orange-400 opacity-30">
          Bienestar
        </h2>
        <p className="absolute ml-8 w-80 font-proxima-nova text-sm leading-6 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar
          sapien sed proin quisque sed dui amet, volutpat. Elit imperdiet in
          placerat lectus a vitae praesent dui. Ac interdum euismod aliquam
          imperdiet nulla amet ipsum orci, pharetra. Viverra sollicitudin massa
          a euismod.{' '}
        </p>
        <div className="relative bottom-20 flex justify-center">
          <img alt="human shape" src="./images/human-shape.svg" />
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            <img
              alt="Chakra 7"
              className="mt-4"
              src="./images/svg/chakra-7.svg"
            />
            <img
              alt="Chakra 6"
              className="mt-4"
              src="./images/svg/chakra-6.svg"
            />
            <img
              alt="Chakra 5"
              className="mt-4"
              src="./images/svg/chakra-5.svg"
            />
            <img
              alt="Chakra 4"
              className="mt-4"
              src="./images/svg/chakra-4.svg"
            />
            <img
              alt="Chakra 3"
              className="mt-4"
              src="./images/svg/chakra-3.svg"
            />
            <img
              alt="Chakra 2"
              className="mt-4"
              src="./images/svg/chakra-2.svg"
            />
            <img
              alt="Chakra 1"
              className="mt-4"
              src="./images/svg/chakra-1.svg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
