import React from "react";

import Banner from "../components/landing/01-banner/banner";
// import Checkin from "../components/landing/02-checkin/checkin";
import LegalExperience from "../components/landing/03-legal-experience/legal-experience";
import Help from "../components/landing/04-help/help";
import WhyNeed from "../components/landing/05-why-need/why-need";
import FeaturedAttorney from "../components/landing/03-feature/feature";
// import Pricing from "../components/pricing/pricing";
// import Article from "../components/article/article";
import ContactForm from "../components/contact-form/contact-form";

const Landing = () => {
  return (
    <div>
      <Banner />
      {/* <Checkin /> - Now integrated into the hero banner */}
      <LegalExperience />
      <Help />
      <WhyNeed />
      <FeaturedAttorney />
      {/* <Pricing /> */}
      <ContactForm />
      {/* <Article /> */}
    </div>
  );
};

export default Landing;
