import React, { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'
import Layout from '../components/Layout/Layout'

const CALENDARS = [
  {
    name: 'VER AGENDA REIKI PRESENCIAL',
    url: 'https://calendly.com/holaenciendetupoder/sesion-de-reiki-presencial',
  },
  {
    name: 'VER AGENDA REIKI ONLINE',
    url: 'https://calendly.com/holaenciendetupoder/60min',
  },
]

const Services = () => {
  const [rootElement, setRootElement] = useState<HTMLElement>()

  useEffect(() => {
    // Document works only in lifecycle methods / useEffect
    // https://stackoverflow.com/questions/60629258/next-js-document-is-not-defined
    setRootElement(document.getElementById('services'))
  }, [])

  return (
    <div className="min-h-screen bg-pink-300 text-center">
      <Layout>
        <h1 className="text-3xl">Servicios</h1>
        <div className="relative block" id="services">
          {CALENDARS.map((c, i) => (
            <PopupButton
              className="m-10 mx-auto block  rounded-md bg-purple-400 px-8 py-4 font-bold leading-4 tracking-wider text-pink-400"
              key={i}
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={rootElement}
              text={c.name}
              url={c.url}
            />
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default Services
