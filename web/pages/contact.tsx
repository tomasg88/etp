import React from 'react'
import SocialNetworkIcons from '../components/Footer/SocialNetworkIcons'
import Layout from '../components/Layout/Layout'
import ContactDots from '../components/svgs/ContactDots'

export default function Contact() {
  return (
    <div className="max-h-screen overflow-hidden bg-pink-300">
      <Layout noFooter>
        <ContactDots />
        <div className="relative min-h-screen  bg-pink-300 text-center">
          <h1 className="mb-20 pt-10 font-playfair text-8xl 2xl:mt-48 2xl:mb-56">
            Contacto
          </h1>
          <div className="absolute left-0 right-0 mx-auto h-[931px] w-[931px] rounded-full bg-orange-400 pt-32">
            <p className="font-playfair text-3xl leading-[101.8%] text-pink-400">
              enciendetupoder@gmail.com
              <br />
              ~
              <br />
              11-5305-1234
            </p>
          </div>
        </div>
        <footer className="fixed right-10 bottom-0 mr-8 mb-8">
          <SocialNetworkIcons iconCss="ml-3 text-2xl text-purple-400" />
        </footer>
      </Layout>
    </div>
  )
}
