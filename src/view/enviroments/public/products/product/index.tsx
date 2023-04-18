import { Copyright } from 'phosphor-react';
import { Footer } from '../../layout/footer';
import { Header } from '../../layout/header';
import { SingleProduct } from './components/single-product';
import { RelatedProduct } from './components/related-product';

export const ProductPage = () => {
  return (
    <>
      <Header />
      <SingleProduct />
      <RelatedProduct />
      <Footer />
      <Copyright />
    </>
  );
};
