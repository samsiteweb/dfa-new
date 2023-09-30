import React from "react";
import "./practice-con1.css";

import Practice2 from "../../../assets/img/practice2.jpg";
import Practice3 from "../../../assets/img/practice3.jpg";
import Dot from "../../../assets/icons/dot.png";

const PracticeCon1 = () => {
  return (
    <div className="PracticeCon1Div">
      <h2 className="PracticeCon1H2">Personal Litigation</h2>
      <img src={Practice2} alt="" className="practiceConImg" />
      <p className="PracticeCon1Par">
        Personal law deals with issues such as marriage, divorce, child custody,
        adoption, domestic violence, spousal support, property division, and
        more. Attorneys specializing in personal law play a crucial role in
        providing legal counsel, guidance, and representation to individuals and
        families navigating these often emotionally charged situations.
      </p>
      <p>
        The aim of personal law is to ensure fairness, protection, and
        resolution in matters that involve personal relationships and familial
        obligations. It seeks to balance legal requirements with the human and
        emotional complexities involved in family matters. As societal norms and
        values evolve, personal law continues to adapt to better serve the needs
        of diverse individuals and families while upholding justice and
        compassion in the realm of personal relationships.
      </p>

      <div className="coloredCardDiv">
        <div className="slimCardUL">
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Legal advisory and consultancy</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Contracts & Bespoke Agreements</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Start Up & Technology Law</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Employment Law</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Data Privacy</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Regulatory & enforcement</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Antitrust/Competition Law</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Intellectual Property</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Transactions & Projects</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Corporate Governance & Board Advisory/Services (Evaluation &
            Trainings)</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Case Assessment/Review</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Commercial Dispute Resolution</li>
          </div>
          <div className="slimCardLI">
            <img src={Dot} alt="" className="DotImg" />
            <li>Legal Risk Management</li>
          </div>
        </div>
      </div>

      <h2 className="PracticeCon1H2">Corporate</h2>
      <img src={Practice3} alt="" className="practiceConImg" />
      <p className="PracticeCon1Par">
        Corporate law is a specialized legal field that deals with the
        formation, structure, management, and dissolution of corporations and
        other business entities. It encompasses a wide range of legal matters
        related to businesses and their operations, focusing on the legal
        rights, responsibilities, and obligations of corporations, shareholders,
        directors, officers, and other stakeholders.
      </p>

      <div className="coloredCardDiv">
        <div className="slimCardUL">
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Legal advisory and consultancy</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Contracts & Bespoke Agreements</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Start Up & Technology Law</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Employment Law</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Data Privacy</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Regulatory & enforcement</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Antitrust/Competition Law</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Intellectual Property</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Transactions & Projects</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Corporate Governance & Board Advisory/Services (Evaluation &
            Trainings)</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Case Assessment/Review</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Commercial Dispute Resolution</li>
          </div>
          <div className="slimCardLI2">
            <img src={Dot} alt="" className="DotImg" />
            <li>Legal Risk Management</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeCon1;
