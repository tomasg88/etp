import React from "react"
import Footer from "../Footer/Footer"
import DefaultHead from "../Head/DefaultHead"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  noFooter?: boolean
  header?: boolean
}

const Layout = ({ children, noFooter, header, ...restProps }: LayoutProps) => (
  <>
    {/* Metas, title, and favicon */}
    <DefaultHead {...restProps} />

    {/* Header with pages or Menu feature */}
    {header ? <Header /> : <Menu />}

    {/* Page content */}
    {children}

    {/* Footer */}
    {!noFooter && <Footer />}
  </>
)

export default Layout
