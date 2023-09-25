import React from 'react';
import AboutBanner from '../components/about/about-banner/about-banner';
// import AboutPractice from '../components/about/about-practice/about-practice';
// import Article from '../components/article/article';
// import Pricing from '../components/pricing/pricing';
import ContactForm from '../components/contact-form/contact-form';
import AboutDfaSolicitors from '../components/about/about-dfa/about-dfa';

const AboutDfa = () => {
  return (
    <div>
      <AboutBanner />
      <AboutDfaSolicitors />
      {/* <AboutPractice /> */}
      {/* <Article /> */}
      {/* <Pricing /> */}
      <ContactForm />
    </div>
  )
}

export default AboutDfa;
