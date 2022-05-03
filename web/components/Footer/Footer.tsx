import React from "react"
import WrittenLogo from "../svgs/WrittenLogo"
import Link from "next/link"
import { Page } from "../../utils/types"
import SocialNetworkIcons from "./SocialNetworkIcons"

const PAGES: Page[] = [
  {
    href: "/about",
    name: "ABOUT",
  },
  {
    href: "/servicios",
    name: "SERVICIOS",
  },
  {
    href: "/contact",
    name: "CONTACTO",
  },
]

export default function Footer() {
  return (
    <footer className="flex w-full justify-between bg-purple-400 px-28 py-6">
      <div className="flex items-center justify-start">
        <WrittenLogo className="mr-16" fill="#FCDDD6" />
        {PAGES.map(({ href, name }, i) => (
          <Link href={href} key={i}>
            <a className="mr-20 font-bold leading-4 tracking-wider text-pink-400">
              {name}
            </a>
          </Link>
        ))}
      </div>
      <SocialNetworkIcons iconCss="ml-3 text-2xl text-pink-400" />
    </footer>
  )
}
