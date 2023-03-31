import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { Copyright } from '../layout/copyright';
import { Products } from './components/sections/products';
import { Categories } from './components/sections/categories';
import { HeroCarousel } from './components/sections/hero-carousel';

export const HomePage = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Categories />
      <Products />
      <Footer />
      <Copyright />
    </>
  );
};
