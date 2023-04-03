import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { Copyright } from '../layout/copyright';
import { Brands } from './components/brands';
import { Products } from './components/products';

export const ProductsPage = () => {
  return (
    <>
      <Header />
      <Products />
      <Brands />
      <Footer />
      <Copyright />
    </>
  );
};
