import React from 'react';
import PracticeBanner from '../components/practice-area/practice-banner/practice-area';
import Checkin from '../components/landing/02-checkin/checkin';
import PracticePersonal from '../components/practice-area/practice-personal/practice-personal';
import PracticePricing from '../components/practice-area/practice-pricing/practice-pricing';
import Testimonials from '../components/landing/05-testimonials/testimonials';
import PracticeForm from '../components/practice-area/practice-form/practice-form';


const PracticeArea = () => {
  return (
    <div>
      <PracticeBanner />
      <Checkin />
      <PracticePersonal />
      <PracticePricing />
      <Testimonials />
      <PracticeForm />
    </div>
  )
}

export default PracticeArea;