import React from 'react';
import AboutBanner from '../components/about/about-banner/about-banner';
import AboutDfaSolicitors from '../components/about/about-dfa/about-dfa';
import AboutFounder from '../components/about/about-founder/about-founder';
import ContactForm from '../components/contact-form/contact-form';

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutDfaSolicitors />
      <AboutFounder />
      <ContactForm />
    </div>
  )
}

export default About;
