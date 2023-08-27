import React from 'react';
import "./practice-area.css";

import PracticeImg from "../../../assets/img/practice-area.jpg";

const PracticeBanner = () => {
  return (
    <div>
      <img src={PracticeImg} alt='' className='bannerImg' />
    </div>
  )
}

export default PracticeBanner;