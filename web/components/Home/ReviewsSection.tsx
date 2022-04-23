import React from "react"

export default function ReviewsSection() {
  return (
    <section className="w-full" id="reviews">
      <div className="mb-16">
        <img
          alt="figura"
          className="mx-auto mb-16 w-20"
          src="./images/diamante1.png"
        />
        <h1 className="z-20 text-center font-playfair text-8xl leading-[101.8%]">
          Testimonios de Éxito
        </h1>
        <p className="mx-auto mt-3 w-2/4 text-center font-playfair text-lg leading-[161.8%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ut et
          eget pretium. Ornare vitae aliquet risus elementum ac sed aenean dui.{" "}
        </p>
      </div>
      <div className="w-full pb-10 text-center" id="review-container">
        <div className="block w-[392px] rounded-3xl bg-purple-300 px-10 py-16 font-proxima-nova text-white">
          <p className="text-base">
            Atraje muchas mujeres con buena onda y agradecidas. Me encantó que
            me sacaras una carta del Oráculo de ilumunación y mi Podcast{" "}
            <strong>“Desapégate de tu ex” creció exponentemente!</strong>
          </p>
          <br />
          <p className="font-proxima-nova text-lg font-bold tracking-wider text-pink-400">
            Romi @serexcepcional
          </p>
        </div>
      </div>
    </section>
  )
}
