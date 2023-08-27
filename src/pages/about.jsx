import React from 'react';
import AboutBanner from '../components/about/about-banner/about-banner';
import Checkin from '../components/landing/02-checkin/checkin';
import AboutNeed from '../components/about/about-need/about-need';
import AboutPractice from '../components/about/about-practice/about-practice';
import Experience from '../components/landing/06-experience/experience';
import Article from '../components/landing/10-article/article';
import AboutFounder from '../components/about/about-founder/about-founder';

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Checkin />
      <AboutNeed />
      <AboutFounder />
      <AboutPractice />
      <Experience />
      <Article />
    </div>
  )
}

export default About;
