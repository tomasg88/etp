export interface Page {
  href: string;
  name: string;
}

type IconFn = (css: string) => JSX.Element

export interface SocialNetwork {
  icon: IconFn
  href: string
}

export interface SVGProps {
  fill: string;
}