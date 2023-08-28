import React from "react";

import Banner from "../components/landing/01-banner/banner";
import Checkin from "../components/landing/02-checkin/checkin";
import LegalExperience from "../components/landing/03-legal-experience/legal-experience";
import Need from "../components/landing/03-need/need";
import Help from "../components/landing/04-help/help";
import FeaturedAttorney from "../components/landing/03-feature/feature";
import Pricing from "../components/pricing/pricing";
import ContactForm from "../components/contact-form/contact-form";
import Article from "../components/article/article";

const Landing = () => {
  return (
    <div>
      <Banner />
      <Checkin />
      <LegalExperience />
      <Help />
      <Need />
      <FeaturedAttorney />
      <Pricing />
      <ContactForm />
      <Article />
    </div>
  );
};

export default Landing;
