export interface Page {
  href: string;
  name: string;
}

export interface SocialNetwork {
  icon: () => JSX.Element
  href: string
}

export interface SVGProps {
  fill: string;
}