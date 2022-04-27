import React from "react"
import Footer from "../Footer/Footer"
import DefaultHead from "../Head/DefaultHead"
import Header from "../Header/Header"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  noFooter?: boolean
}

const Layout = ({ children, noFooter, ...restProps }: LayoutProps) => {
  return (
    <>
      <DefaultHead {...restProps} />
      <div>
        <Header />
        {children}
        {!noFooter && <Footer />}
      </div>
    </>
  )
}

export default Layout
