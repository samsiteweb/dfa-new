import React from 'react';
import "./about-banner.css";

import BannerImg from "../../../assets/img/about-banner-img.jpg";

const AboutBanner = () => {
  return (
    <div className='AboutBannerDiv'>
      <img src={BannerImg} alt='' className='AboutbannerImg' />
    </div>
  )
}

export default AboutBanner;
