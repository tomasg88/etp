export enum PageNames {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACTO',
  SERVICES = 'SERVICIOS'
}

export interface Page {
  href: string;
  name: PageNames;
}

type IconFn = (css: string) => JSX.Element

export interface SocialNetwork {
  icon: IconFn
  href: string
}

export interface SVGProps {
  fill: string;
}