import React from 'react';
import PracticeBanner from '../components/practice-area/practice-banner/practice-area';
import PracticeCon1 from '../components/practice-area/practice-con1/practice-con1';
import Pricing from '../components/pricing/pricing';
import ContactForm from '../components/contact-form/contact-form';
import Article from '../components/article/article';


const PracticeArea = () => {
  return (
    <div>
      <PracticeBanner />
      <PracticeCon1 />
      <Pricing />
      <ContactForm />
      <Article />
    </div>
  )
}

export default PracticeArea;