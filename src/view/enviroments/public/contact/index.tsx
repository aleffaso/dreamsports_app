import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { Copyright } from '../layout/copyright';
import { ContactUs } from './components/contact-us';
import { Survey } from './components/survey';

export const ContactUsPage = () => {
  return (
    <>
      <Header />
      <ContactUs />
      <Survey />
      <Footer />
      <Copyright />
    </>
  );
};
