import React from 'react';
import "./contact-banner.css";

import BannerImg from "../../../assets/img/contact-banner-img.jpg";

const ContactBanner = () => {
  return (
    <div>
      <img src={BannerImg} alt='' className='bannerImg' />
    </div>
  )
}

export default ContactBanner;
