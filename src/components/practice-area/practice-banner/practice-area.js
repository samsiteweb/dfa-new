import React from 'react';
import "./practice-area.css";

import PracticeImg from "../../../assets/img/practice_area.png";

const PracticeBanner = () => {
  return (
    <div>
      <img src={PracticeImg} alt='' className='PracticebannerImg' />
    </div>
  )
}

export default PracticeBanner;