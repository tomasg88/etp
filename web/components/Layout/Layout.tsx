import React from "react"
import Footer from "../Footer/Footer"
import DefaultHead from "../Head/DefaultHead"
import Header from "../Header/Header"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children, ...restProps }: LayoutProps) => {
  return (
    <>
      <DefaultHead {...restProps} />
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
