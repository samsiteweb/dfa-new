import React from 'react';

import Banner from '../components/landing/01-banner/banner';
import Checkin from '../components/landing/02-checkin/checkin';
import Need from '../components/landing/03-need/need';
import Help from '../components/landing/04-help/help';
import Testimonials from '../components/landing/05-testimonials/testimonials';
import Experience from '../components/landing/06-experience/experience';
import Consulting from '../components/landing/07-consulting/consulting';
import Pricing from '../components/landing/09-pricing/pricing';
import Attorneys from '../components/landing/08-atourneys/attorneys';
import Article from '../components/landing/10-article/article';


const Landing = () => {
  return (
    <div>
      <Banner />
      <Checkin />
      <Need />
      <Help />
      <Testimonials />
      <Experience />
      <Consulting />
      <Attorneys />
      <Pricing />
      <Article />
    </div>
  )
}

export default Landing;
