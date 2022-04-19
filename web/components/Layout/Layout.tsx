import Head from "next/head"
import React from "react"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_MAIN_COLOR,
  DEFAULT_PAGE_URL,
  DEFAULT_TITLE,
} from "../../utils/constants"
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
        <meta name="title" content={formattedTitle} />
        <meta name="description" content={formattedDescription} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DEFAULT_PAGE_URL} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={formattedDescription} />
        <meta property="og:image" content={formattedImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={DEFAULT_PAGE_URL} />
        <meta property="twitter:title" content={formattedTitle} />
        <meta property="twitter:description" content={formattedDescription} />
        <meta property="twitter:image" content={formattedImage} />

        {/* Otros */}
        <meta name="msapplication-TileColor" content={DEFAULT_MAIN_COLOR} />
        <meta name="theme-color" content={DEFAULT_MAIN_COLOR} />

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
      </div>
    </>
  )
}

export default Layout
