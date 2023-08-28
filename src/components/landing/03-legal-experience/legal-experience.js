import React from "react";
import "./legal-experience.css";
import Button from "../../button/button";

function LegalExperience() {
  return (
    <div className="legalDiv">
      <p style={{ color: "#828282" }}>Welcome to DFA SOLICITORS</p>
      <h1 style={{ color: "#310C4B" }}>Over 3 Decades of Legal Experience</h1>
      <hr className="HR" />

      <div className="legalDetailsDiv">
        <p className="legalDetailsPar">
          As a prestigious law firm, we consistently are committed to delivering
          exceptional legal solutions. With a keen understanding of diverse
          legal matters, we provided comprehensive research, drafted persuasive
          legal documents, and effectively communicated with clients to address
          their needs. Collaborating closely with seasoned attorneys, we have
          contributed to successful case outcomes and assisted in complex
          negotiations. Our Team possesses strong analytical skills, a
          meticulous attention to detail, and a client-centered approach to
          problem-solving, solidifying our dedication to upholding the highest
          standards of legal excellence."
        </p>
        <div className="legalDetailsDivInner">
            <Button>learn more...</Button>
        </div>
      </div>
    </div>
  );
}

export default LegalExperience;