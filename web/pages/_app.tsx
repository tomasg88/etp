import "../styles/globals.scss"
import { motion } from "framer-motion"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      animate="pageAnimate"
      initial="pageInitial"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
