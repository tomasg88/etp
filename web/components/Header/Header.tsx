import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"

const Header: FC = () => {
  return (
    <div className="flex h-40 w-full items-center justify-between border-black bg-pink-400 px-28">
      <div className="block h-20 w-56">
        <Image
          src="/png/horizontales/Enciende-Logo-horizontal.png"
          layout="responsive"
          width={100}
          height={36}
          alt="logo"
        />
      </div>
      <div className="font-proxima-nova font-bold text-purple-400">
        <Link href="/about">
          <a className="ml-20">ABOUT</a>
        </Link>
        <Link href="/servicios">
          <a className="ml-20">SERVICIOS</a>
        </Link>
        <Link href="/contacto">
          <a className="ml-20">CONTACTO</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
