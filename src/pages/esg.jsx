import React from 'react';
import CasesBanner from '../components/cases/cases-banner/cases-banner';
import RecentCases from '../components/cases/recent-cases/recent-cases';
import PracticeForm from '../components/practice-area/practice-form/practice-form';
import Pricing from '../components/landing/09-pricing/pricing';

const ESG = () => {
  return (
    <div>
      <CasesBanner />
      <RecentCases />
      <PracticeForm />
      <Pricing />
    </div>
  )
}

export default ESG;
