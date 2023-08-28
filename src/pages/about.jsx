import React from 'react';
import AboutBanner from '../components/about/about-banner/about-banner';
import AboutFounder from '../components/about/about-founder/about-founder';
import AboutPractice from '../components/about/about-practice/about-practice';
import Article from '../components/article/article';
import Pricing from '../components/pricing/pricing';
import ContactForm from '../components/contact-form/contact-form';

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutFounder />
      <AboutPractice />
      <Article />
      <Pricing />
      <ContactForm />
    </div>
  )
}

export default About;
