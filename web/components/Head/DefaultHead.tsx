import Head from "next/head"
import React from "react"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_MAIN_COLOR,
  DEFAULT_PAGE_URL,
  DEFAULT_TITLE,
} from "../../utils/constants"

interface MetaProps {
  title?: string
  description?: string
  image?: string
}

export default function DefaultHead({ title, description, image }: MetaProps) {
  const formattedTitle = title || DEFAULT_TITLE
  const formattedDescription = description || DEFAULT_DESCRIPTION
  const formattedImage = image || DEFAULT_IMAGE
  return (
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
      <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
      <meta content={DEFAULT_MAIN_COLOR} name="theme-color" />

      <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
      <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
      <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
      <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
      <link
        href="/apple-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/apple-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/android-icon-192x192.png"
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/manifest.json" rel="manifest" />
    </Head>
  )
}
