import React from 'react';
import "./contact-banner.css";

import BannerImg from "../../../assets/img/contact-banner.png";

const ContactBanner = () => {
  return (
    <div>
      <img src={BannerImg} alt='' className='bannerImg' />
    </div>
  )
}

export default ContactBanner;
