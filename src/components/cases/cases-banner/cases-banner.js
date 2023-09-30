import React from 'react';
import "./cases-banner.css";

import BannerImg from "../../../assets/img/cases-banner-img.jpg";

const CasesBanner = () => {
  return (
    <div>
      <img src={BannerImg} alt='' className='bannerImg' />
    </div>
  )
}

export default CasesBanner;
