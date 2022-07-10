import React from 'react'
import SocialNetworkIcons from '../components/Footer/SocialNetworkIcons'
import Layout from '../components/Layout/Layout'
import ContactDots from '../components/svgs/ContactDots'

export default function Contact() {
  return (
    <div className="overflow-hidden bg-pink-300">
      <Layout noFooter={true}>
        <ContactDots />
        <main className="min-h-screen w-full bg-pink-300 text-center">
          <h1 className="pt-10 pb-20 font-playfair text-8xl">Contacto</h1>
          <div className="relative block text-center" id="info-content">
            <div className="mx-auto h-[931px] w-[931px] overflow-hidden rounded-full bg-orange-400 pt-32">
              <p className="font-playfair text-3xl leading-[101.8%] text-pink-400">
                enciendetupoder@gmail.com
                <br />
                ~
                <br />
                11-5305-1234
              </p>
            </div>
          </div>
        </main>
        <footer className="fixed right-10 bottom-0 mr-8 mb-8">
          <SocialNetworkIcons iconCss="ml-3 text-2xl text-purple-400" />
        </footer>
      </Layout>
    </div>
  )
}
