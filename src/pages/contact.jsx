import React from 'react'
import ContactBanner from '../components/contact/contact-banner/contact-banner';
import ContactForm from '../components/contact/contact-form/contact-form';
import Map from '../components/contact/map/map';

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <Map />
    </div>
  )
}

export default Contact;
