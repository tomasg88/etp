import React from 'react'
import { PopupButton } from 'react-calendly'

interface CalendlyPopupProps {
  rootElement: HTMLElement
  text: string
  url: string
}

export default function CalendlyPopup({
  rootElement,
  text,
  url,
}: CalendlyPopupProps) {
  return (
    <PopupButton
      className="m-10 mx-auto block  rounded-md bg-purple-400 px-8 py-4 font-bold leading-4 tracking-wider text-pink-400"
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */
      rootElement={rootElement}
      text={text}
      url={url}
    />
  )
}
