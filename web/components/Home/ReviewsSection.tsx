import React from "react"
import ReviewCard from "../Cards/ReviewCard"

export default function ReviewsSection() {
  return (
    <section className="w-full pb-32" id="reviews">
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
      <div
        className="flex w-full items-center justify-center pb-10 text-center"
        id="review-container"
      >
        <ReviewCard />
        <ReviewCard active />
        <ReviewCard />
      </div>
    </section>
  )
}
