import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { Copyright } from '../layout/copyright';
import { Products } from '../layout/products';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Products />
      <Footer />
      <Copyright />
    </>
  );
};
