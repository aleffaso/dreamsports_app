import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { Copyright } from '../layout/copyright';
import { Brands } from '../../../components/brands';
import { Services } from './components/services';
import { AboutUs } from './components/about-us';

export const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Brands />
      <Footer />
      <Copyright />
    </>
  );
};
