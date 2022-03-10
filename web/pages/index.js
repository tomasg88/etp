import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import clsx from "clsx";
import Buttons from "../components/button/Buttons";
import RRSSIcons from "../components/rrss/RRSSIcons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enciende Tu Poder</title>
        <meta
          name="description"
          content="Sitio web oficial de Enciende tu Poder"
        />
        <link rel="icon" href="/jpg RGB/iso/Enciende-Logo-Iso.jpg" />
      </Head>

      <main className={styles.main}>
        <section className={styles.left}>
          <div className={styles.logoContainer}>
            <motion.div
              initial="hidden"
              animate="animate"
              variants={{
                hidden: {
                  position: "relative",
                  left: -200,
                  opacity: 0,
                },
                animate: {
                  position: "relative",
                  left: 0,
                  opacity: 1,
                  transition: {
                    delay: 2,
                  },
                },
              }}
            >
              <Image
                src="/png/horizontales/Enciende-Logo-horizontal.png"
                layout="responsive"
                width={400}
                height={150}
                alt="logo"
              />
            </motion.div>
          </div>

          <h1 className={clsx(styles.text, styles.title)}>Próximamente</h1>
          <h3 className={clsx(styles.text, styles.description)}>
            Mientras construimos el sitio encontrá todo para elevar tu energía y
            bienestar
          </h3>

          <Buttons />

          <RRSSIcons />
        </section>

        <section className={styles.right}>
          {/* magic */}
          <div className={styles.magic}>
            <Image
              src="/images/textura-puntitos-dorados.png"
              layout="fixed"
              height={300}
              width={300}
              alt="effect"
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://media-private.canva.com/bNZ-M/MAEeF7bNZ-M/1/s3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220306T022320Z&X-Amz-Expires=89975&X-Amz-Signature=3f631b913f9c1b97a7be466f1f63cbe872a03ddcd9fe8712fa6d7b7e96438051&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2007%20Mar%202022%2003%3A22%3A55%20GMT"
              layout="fixed"
              className={styles.profileImage}
              width={500}
              height={750}
              priority={1}
              alt="Candela Manzi"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
