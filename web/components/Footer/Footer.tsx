import React from "react"
import WrittenLogo from "../svgs/WrittenLogo"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaSpotify, FaYoutube } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import Link from "next/link"
import { Page, SocialNetwork } from "../../utils/types"

const RRSSData: SocialNetwork[] = [
  {
    icon: () => <FaYoutube className="ml-3 text-2xl text-pink-400" />,
    href: "https://www.youtube.com/channel/UCatabIPr9cFwwkspuP3XO9w",
  },
  {
    icon: () => <FaSpotify className="ml-3 text-2xl text-pink-400" />,
    href: "https://open.spotify.com/user/eqt6mpr8t7x3pfjvkmxdlg3cx",
  },
  {
    icon: () => <AiOutlineInstagram className="ml-3 text-2xl text-pink-400" />,
    href: "https://instagram.com/enciendetupoder",
  },
  {
    icon: () => <IoLogoWhatsapp className="ml-3 text-2xl text-pink-400" />,
    href: "https://api.whatsapp.com/send?phone=5491168640045",
  },
]

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
    href: "/contacto",
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
      <div className="flex items-center justify-around">
        {RRSSData.map(({ icon, href }) => (
          <Link href={href} key={href}>
            <a target="_blank">{icon()}</a>
          </Link>
        ))}
      </div>
    </footer>
  )
}
