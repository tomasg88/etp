import React from "react"
import { FaSpotify, FaYoutube } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import Link from "next/link"
import { SocialNetwork } from "../../utils/types"

const RRSSData: SocialNetwork[] = [
  {
    icon: (css: string) => <FaYoutube className={css} />,
    href: "https://www.youtube.com/channel/UCatabIPr9cFwwkspuP3XO9w",
  },
  {
    icon: (css: string) => <FaSpotify className={css} />,
    href: "https://open.spotify.com/user/eqt6mpr8t7x3pfjvkmxdlg3cx",
  },
  {
    icon: (css: string) => <AiFillInstagram className={css} />,
    href: "https://instagram.com/enciendetupoder",
  },
  {
    icon: (css: string) => <IoLogoWhatsapp className={css} />,
    href: "https://api.whatsapp.com/send?phone=5491168640045",
  },
]

const SocialNetworkIcons = ({ iconCss }) => {
  return (
    <div className="flex items-center">
      {RRSSData.map(({ icon, href }) => (
        <Link href={href} key={href}>
          <a target="_blank">{icon(iconCss)}</a>
        </Link>
      ))}
    </div>
  )
}

export default SocialNetworkIcons
