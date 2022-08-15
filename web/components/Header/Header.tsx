import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { PAGES } from '../../utils/constants'

const Header: FC = () => {
  return (
    <header className="flex h-40 w-full items-center justify-between border-black bg-pink-400">
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
      <nav className="z-10 font-proxima-nova font-bold tracking-wide ">
        {PAGES.map(({ href, name }) => (
          <Link href={href} key={href}>
            <a className="ml-20 text-purple-400 transition-colors hover:text-orange-400 hover:underline hover:underline-offset-8">
              {name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
