import { Page, PageNames } from "./types";

export const DEFAULT_PAGE_URL = 'https://enciendetupoder.com';
export const DEFAULT_TITLE = 'Enciende tu Poder';
export const DEFAULT_DESCRIPTION = 'Tu lugar de luz y energía';
export const DEFAULT_IMAGE = './images/jpg RGB/iso/Enciende-Logo-Iso.jpg';
export const DEFAULT_MAIN_COLOR = '#FCDDD6';

const ROUTES = {
  home: '/home',
  about: '/about',
  contact: '/contact',
  services: '/services'
} 

export const PAGES: Page[] = [
  {
    href: ROUTES.about,
    name: PageNames.ABOUT,
  },
  {
    href: ROUTES.services,
    name: PageNames.SERVICES,
  },
  {
    href: ROUTES.contact,
    name: PageNames.CONTACT,
  },
]
export const HOME_PAGE: Page = {
  href: ROUTES.home,
  name: PageNames.HOME,
}