import React from "react"
import { useMemo } from "react"
import { motion } from "framer-motion"
import styles from "./Buttons.module.scss"

interface Button {
  text: string
  href: string
}

export default function Buttons() {
  const BUTTON_INFO = useMemo<Button[]>(
    () => [
      {
        text: "Ebook Gratuito - Todo Sobre Sahumo",
        href: "https://mailchi.mp/a35325185ff2/ebook-todo-sobre-sahumo",
      },
      {
        text: "Conectá con la Gratitud - Ladies Brunch",
        href: "https://ladiesbrunch.co/nota/conecta-con-la-gratitud",
      },
      {
        text: "Sesión de Reiki a Distancia con Cristales",
        href: "https://calendly.com/holaenciendetupoder",
      },
      {
        text: "Cursos Online de Reiki Usui",
        href: "https://wa.me/c/5491168640045",
      },
      {
        text: "Reiki para marcas",
        href: "",
      },
      {
        text: "Ver más",
        href: "https://linktr.ee/enciendetupoder",
      },
    ],
    []
  )

  return (
    <div className={styles.container}>
      {BUTTON_INFO.map(({ text, href }, index) => (
        <motion.button
          animate="animate"
          initial="initial"
          key={href}
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: {
                delay: 0.2 * index,
              },
            },
          }}
        >
          <a href={href} rel="noreferrer" target="_blank">
            {text.toUpperCase()}
          </a>
        </motion.button>
      ))}
    </div>
  )
}
