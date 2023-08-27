import React from 'react';
import "./about-banner.css";

import BannerImg from "../../../assets/img/about-banner-img.jpg";

const AboutBanner = () => {
  return (
    <div>
      <img src={BannerImg} alt='' className='bannerImg' />
    </div>
  )
}

export default AboutBanner;
