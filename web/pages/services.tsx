import React, { useEffect, useState } from 'react'
import CalendlyPopup from '../components/Calendly/CalendlyPopup'
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
    // document works only in lifecycle methods / useEffect
    // https://stackoverflow.com/questions/60629258/next-js-document-is-not-defined
    setRootElement(document.getElementById('services'))
  }, [])

  return (
    <div className="min-h-screen bg-pink-300 text-center">
      <Layout>
        <h1 className="text-3xl">Servicios</h1>
        <div className="relative block" id="services">
          {CALENDARS.map((c, i) => (
            <CalendlyPopup
              key={i}
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
