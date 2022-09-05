import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HOME_PAGE, PAGES } from '../../utils/constants'
import CloseMenuIcon from '../svgs/CloseMenuIcon'
import MenuIcon from '../svgs/MenuIcon'

function renderMenuIcon(onClick) {
  return (
    <div className="flex h-40 w-full items-center justify-between border-black bg-pink-400">
      <div className="block w-56">
        <Link href="/home">
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
      <div className="z-10 flex items-center" onClick={onClick}>
        <p className="mr-4 font-playfair text-xl leading-[101.8%] text-purple-400">
          Menu
        </p>
        <div className="rounded-full border border-purple-400 p-3">
          <MenuIcon fill="#8D64AA" />
        </div>
      </div>
    </div>
  )
}

function renderMenu(onClick) {
  return (
    <div
      className="fixed inset-0 z-30 mx-auto w-screen bg-purple-400 pt-14"
      id="menu-container"
    >
      <div
        className="absolute right-36 top-12 z-20 flex items-center pt-1"
        onClick={onClick}
      >
        <p className="mr-4 font-playfair text-xl leading-[101.8%] text-pink-200">
          Cerrar
        </p>
        <div className="rounded-full border border-pink-200 p-0">
          <CloseMenuIcon fill="#FDDED6" />
        </div>
      </div>
      <div className="opacity-1 absolute inset-0 mx-auto flex h-screen w-screen items-center justify-center">
        <div
          className="block rounded-full border-2 border-dashed border-gold-600 xl:h-[984px] xl:w-[984px] 2xl:h-[1400px] 2xl:w-[1400px]"
          id="animation"
        ></div>
      </div>
      <img
        alt="Logo Enciende Tu Poder"
        className="mx-auto xl:h-8 2xl:h-14"
        src="./images/svg/logo-escrito.svg"
      />
      <nav className="absolute inset-0 z-10 flex h-screen list-none flex-col justify-center pt-14 text-center">
        {[HOME_PAGE, ...PAGES].map(({ href, name }) => (
          <li className="xl:my-8 2xl:mb-16" key={href}>
            <Link href={href}>
              <a className="font-playfair leading-[101.8%] text-pink-200 hover:italic hover:text-orange-400 xl:text-5xl 2xl:text-7xl">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </nav>
    </div>
  )
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  return isOpen ? renderMenu(closeMenu) : renderMenuIcon(openMenu)
}
