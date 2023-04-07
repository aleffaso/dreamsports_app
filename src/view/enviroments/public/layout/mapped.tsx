import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Phone,
  Envelope
} from 'phosphor-react';

export const menuList = [
  {
    href: '/',
    title: 'Início'
  },
  {
    href: '/about',
    title: 'Sobre'
  },
  {
    href: '/products',
    title: 'Produtos'
  },
  {
    href: '/contact',
    title: 'Contato'
  }
];

export const contactsList = [
  { icon: <EnvelopeSimple />, href: '/' },
  { icon: <FacebookLogo />, href: '/' },
  { icon: <InstagramLogo />, href: '/' },
  { icon: <TwitterLogo />, href: '/' }
];

export const addressList = [
  { title: '(14) 9 9999-9999', href: '/', icon: <Phone /> },
  { title: 'contato@dreamsportsco.com', href: '/', icon: <Envelope /> }
];
