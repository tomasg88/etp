import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { PAGES } from '../../utils/constants'

const Header: FC = () => {
  return (
    <div className="flex h-40 w-full items-center justify-between border-black bg-pink-400 px-28">
      <div className="block h-20 w-56">
        <Link href="/">
          <a>
            <Image
              alt="logo"
              height={36}
              layout="responsive"
              src="/png/horizontales/Enciende-Logo-horizontal.png"
              width={100}
            />
          </a>
        </Link>
      </div>
      <div className="z-10 font-proxima-nova font-bold tracking-wide text-purple-400">
        {PAGES.map(({ href, name }) => (
          <Link href={href} key={href}>
            <a className="ml-20">{name}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
