import React from "react";
import "./practice-con1.css";

import Practice2 from "../../../assets/img/practice2.jpg";
import Practice3 from "../../../assets/img/practice3.jpg";

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
        <ul className="slimCardUL">
          <div className="slimCardLI">
            <li>Legal advisory and consultancy</li>
          </div>
          <li className="slimCardLI">Contracts & Bespoke Agreements</li>
          <li className="slimCardLI">Start Up & Technology Law</li>
          <li className="slimCardLI">Employment Law</li>
          <li className="slimCardLI">Data Privacy</li>
          <li className="slimCardLI">Regulatory & enforcement </li>
          <li className="slimCardLI">Antitrust/Competition Law</li>
          <li className="slimCardLI">Intellectual Property </li>
          <li className="slimCardLI">Transactions & Projects</li>
          <li className="slimCardLI">
            Corporate Governance & Board Advisory/Services (Evaluation &
            Trainings)
          </li>
          <li className="slimCardLI">Case Assessment/Review</li>
          <li className="slimCardLI">Commercial Dispute Resolution </li>
          <li className="slimCardLI">Legal Risk Management </li>
          <li className="slimCardLI">Legal Risk Management </li>
        </ul>
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
        <ul className="slimCardUL">
          <div className="slimCardLI">
            <li>Legal advisory and consultancy</li>
          </div>
          <li className="slimCardLI">Contracts & Bespoke Agreements</li>
          <li className="slimCardLI">Start Up & Technology Law</li>
          <li className="slimCardLI">Employment Law</li>
          <li className="slimCardLI">Data Privacy</li>
          <li className="slimCardLI">Regulatory & enforcement </li>
          <li className="slimCardLI">Antitrust/Competition Law</li>
          <li className="slimCardLI">Intellectual Property </li>
          <li className="slimCardLI">Transactions & Projects</li>
          <li className="slimCardLI">
            Corporate Governance & Board Advisory/Services (Evaluation &
            Trainings)
          </li>
          <li className="slimCardLI">Case Assessment/Review</li>
          <li className="slimCardLI">Commercial Dispute Resolution </li>
          <li className="slimCardLI">Legal Risk Management </li>
          <li className="slimCardLI">Legal Risk Management </li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeCon1;
