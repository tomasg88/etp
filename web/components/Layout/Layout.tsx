import Head from "next/head"
import React from "react"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_MAIN_COLOR,
  DEFAULT_PAGE_URL,
  DEFAULT_TITLE,
} from "../../utils/constants"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

interface LayoutProps {
  title?: string
  description?: string
  image?: string
  children: JSX.Element | JSX.Element[]
}

const Layout = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  children,
}: LayoutProps) => {
  const formattedTitle = title
  const formattedDescription = description
  const formattedImage = image
  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta content={formattedTitle} name="title" />
        <meta content={formattedDescription} name="description" />
        <meta content="index, follow" name="robots" />

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta content={DEFAULT_PAGE_URL} property="og:url" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={formattedDescription} property="og:description" />
        <meta content={formattedImage} property="og:image" />

        {/* Twitter */}
        <meta content="summary_large_image" property="twitter:card" />
        <meta content={DEFAULT_PAGE_URL} property="twitter:url" />
        <meta content={formattedTitle} property="twitter:title" />
        <meta content={formattedDescription} property="twitter:description" />
        <meta content={formattedImage} property="twitter:image" />

        {/* Otros */}
        <meta content={DEFAULT_MAIN_COLOR} name="msapplication-TileColor" />
        <meta content={DEFAULT_MAIN_COLOR} name="theme-color" />

        {/* TODO - wrap up the meta part */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={DEFAULT_MAIN_COLOR}
        /> */}
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
