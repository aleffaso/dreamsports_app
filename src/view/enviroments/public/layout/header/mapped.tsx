import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Phone,
  Envelope,
  MagnifyingGlass,
  ShoppingCart,
  User
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

export const barList = [
  {
    variant: null,
    rounded: null,
    color: 'transparent',
    icon: <MagnifyingGlass />,
    title: null,
    description: null,
    type: null,
    disabled: null,
    onClick: null
  },
  {
    variant: null,
    rounded: null,
    color: 'transparent',
    icon: <ShoppingCart />,
    title: null,
    description: null,
    type: null,
    disabled: null,
    onClick: null
  },
  {
    variant: null,
    rounded: null,
    color: 'transparent',
    icon: <User />,
    title: null,
    description: null,
    type: null,
    disabled: null,
    onClick: null
  }
];
