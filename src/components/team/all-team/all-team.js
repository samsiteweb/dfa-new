import React from "react";
import "./all-team.css";
import TeamBanner from "../../../assets/img/team.jpg";
import Worker1 from "../../../assets/img/worker1.jpg";
import Worker2 from "../../../assets/img/worker2.jpg";
import Worker3 from "../../../assets/img/worker3.jpg";
import Worker4 from "../../../assets/img/worker4.jpg";
import Worker5 from "../../../assets/img/worker5.jpg";
import Worker6 from "../../../assets/img/worker6.jpg";
import Worker7 from "../../../assets/img/worker7.jpg";
import Worker8 from "../../../assets/img/worker8.jpg";
import Worker9 from "../../../assets/img/worker9.jpg";
import Experience from "../../landing/06-experience/experience";
import Button from "../../button/button";

const AllTeam = () => {
  return (
    <div className="allTeamDiv">
      <div>
        <img src={TeamBanner} alt="" className="teamBannerImg" />
      </div>

      <div className="teamWorkersDiv">
        <p className="teamWorkersPar">Meet Our Experts</p>
        <h2 className="teamWorkersHead">Qualified Attorneys</h2>

        <div className="teamCardDiv">
          <div className="teamCard">
            <img src={Worker1} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Segun Ogunjimi</h4>
              <p className="teamCardPost">Personal Issues</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker2} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Charlse Pkafor</h4>
              <p className="teamCardPost">Cooperate Law</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker3} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Sussy Akpan</h4>
              <p className="teamCardPost">Personal Issues</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker4} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Mike James</h4>
              <p className="teamCardPost">Personal Issues</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker5} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Charlse Ireti</h4>
              <p className="teamCardPost">Cooperate Law</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker6} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Sussy Akon</h4>
              <p className="teamCardPost">Personal Issues</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker7} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Micheal Austin</h4>
              <p className="teamCardPost">Personal Issues</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker8} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">Linda Park</h4>
              <p className="teamCardPost">Cooperate Law</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Worker9} alt="" className="teamWorkerImg" />
            <div className="teamCardInner">
              <h4 className="teamCardName">James Tope</h4>
              <p className="teamCardPost">Personal Issues</p>
            </div>
          </div>
        </div>
      </div>

      <Experience />

      <div className="practiceFormDiv2">
        <h1 className="practiceFormHeader">We  are a call/ Message away!</h1>

        <div className="consultingDiv2">
          <div>
            <p className="consultingParPurple">
              Call us 24/7 at (888)123-4567 or fill out the form.
            </p>
            <p className="consultingPar">
              Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc
              vulputate libero et velit interdum, ac liquet odio mattis.”
            </p>
            <p className="consultingPar">
              “Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc
              vulputate libero et velit interdum, ac liquet odio mattis.”“Torem
              ipsum dolor sit amet, consectetur dipiscing elit. Nunc vulputate
              libero et velit interdum, ac liquet odio mattis.”
            </p>
          </div>
          <div className="formDiv2">
            <form>
              <div className="inputDiv">
                <input type="text" placeholder="your name*" className="input2" />
                <input
                  type="text"
                  placeholder="your email*"
                  className="input2"
                />
                <input
                  type="text"
                  placeholder="your phone*"
                  className="input2"
                />
                <input type="text" placeholder="address" className="input2" />
              </div>
              <textarea className="textarea">your message*</textarea>
              <div className="btnDiv">
                <Button>contact us now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeam;
