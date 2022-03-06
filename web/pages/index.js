import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import clsx from "clsx";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enciende Tu Poder</title>
        <meta
          name="description"
          content="Sitio web oficial de Enciende tu Poder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.left}>
          <div className={styles.logoContainer}>
            <Image
              src="/png/horizontales/Enciende-Logo-horizontal.png"
              layout="responsive"
              width={400}
              height={150}
            />
          </div>
          <h1 className={clsx(styles.text, styles.title)}>Próximamente</h1>
          <h3 className={clsx(styles.text, styles.description)}>
            Mientras construimos el sitio, encontrá todo para tu bienestar
          </h3>
          <div className={styles.buttonList}>
            <button>Ebook Gratuito - Todo sobre Sahumo</button>
            <button>Conectá con la Gratitud - LadiesBrunch</button>
            <button>Ebook Gratuito - Todo sobre Sahumo</button>
            <button>Ebook Gratuito - Todo sobre Sahumo</button>
            <button>Ver más</button>
          </div>
          <div className={styles.rrss}>
            <Link href="https://www.facebook.com/enciendetupoder">
              <a target="_blank">
                <FaFacebookSquare color="#a6895a" size={40} />
              </a>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5491168640045">
              <a target="_blank">
                <FaWhatsapp color="#a6895a" size={40} />
              </a>
            </Link>
            <Link href="https://instagram.com/enciendetupoder">
              <a target="_blank">
                <FaInstagram color="#a6895a" size={40} />
              </a>
            </Link>
          </div>
        </section>

        <section className={styles.right}>
          {/* magic */}
          <div className={styles.magic}>
            <Image
              src="/images/textura-puntitos-dorados.png"
              layout="fixed"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://media-private.canva.com/bNZ-M/MAEeF7bNZ-M/1/s3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220306T022320Z&X-Amz-Expires=89975&X-Amz-Signature=3f631b913f9c1b97a7be466f1f63cbe872a03ddcd9fe8712fa6d7b7e96438051&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2007%20Mar%202022%2003%3A22%3A55%20GMT"
              layout="fixed"
              className={styles.profileImage}
              width={500}
              height={750}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
