import React from "react"
import clsx from "clsx"

import styles from "./styles/ReviewsSection.module.scss"

interface ReviewCardProps {
  active?: boolean
}

export default function ReviewCard({ active }: ReviewCardProps) {
  return (
    <div
      className={clsx(
        styles.cardShadow,
        "mx-3 block rounded-3xl bg-purple-300 px-10 font-proxima-nova text-white",
        active ? "w-[392px] py-16" : "w-[300px] py-10 opacity-40"
      )}
    >
      <p className={clsx(active ? "text-base" : "text-sm")}>
        Atraje muchas mujeres con buena onda y agradecidas. Me encantó que me
        sacaras una carta del Oráculo de ilumunación y mi Podcast{" "}
        <strong>“Desapégate de tu ex” creció exponentemente!</strong>
      </p>
      <br />
      <p
        className={clsx(
          "font-proxima-nova font-bold tracking-wider text-pink-400",
          active ? "text-lg" : "text-base"
        )}
      >
        Romi @serexcepcional
      </p>
    </div>
  )
}
