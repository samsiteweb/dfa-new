import React from "react";
import "./pricing.css";

import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

import Button from "../button/button";

const Pricing = () => {
  return (
    <div className="practicePricingDiv">
      <div className="practicePricingOverlay">
        <Flip right>
          <h4 style={{ color: "#C58CDB" }}>Choose From</h4>
          <h1 style={{ color: "#fff", fontSize: "48px" }}>Our Pricing Plans</h1>
          <hr className="pricingHR" />
        </Flip>

        <div className="pricingCardDiv">
          <Slide left>
            <div className="pricingCard">
              <svg
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pricingImg"
              >
                <path
                  d="M50.9176 38.0757V19.0379C50.9167 18.2032 50.6964 17.3835 50.2787 16.6609C49.861 15.9383 49.2607 15.3383 48.5378 14.921L31.8798 5.40205C31.1562 4.98432 30.3355 4.7644 29.5 4.7644C28.6646 4.7644 27.8438 4.98432 27.1203 5.40205L10.4622 14.921C9.73943 15.3383 9.13907 15.9383 8.72138 16.6609C8.3037 17.3835 8.08338 18.2032 8.08252 19.0379V38.0757C8.08338 38.9103 8.3037 39.73 8.72138 40.4526C9.13907 41.1752 9.73943 41.7753 10.4622 42.1926L27.1203 51.7115C27.8438 52.1292 28.6646 52.3491 29.5 52.3491C30.3355 52.3491 31.1562 52.1292 31.8798 51.7115L48.5378 42.1926C49.2607 41.7753 49.861 41.1752 50.2787 40.4526C50.6964 39.73 50.9167 38.9103 50.9176 38.0757Z"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.7251 16.563L29.5001 28.5806L50.2751 16.563"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.5 52.5443V28.5566"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="pricingP">Starter Plan</p>
              <h2 className="pricingH2">Flat Fee</h2>
              <p className="pricingPar">
                This plan is best for big cases and comes with benefits such as
                access to various legal experts, cutting edge products and free
                legal advice
              </p>
              <div className="pricingBtnDiv">
                <Button>get started</Button>
              </div>
            </div>
          </Slide>
          <Slide top>
            <div className="pricingCard">
              <svg
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pricingImg"
              >
                <path
                  d="M50.9176 38.0757V19.0379C50.9167 18.2032 50.6964 17.3835 50.2787 16.6609C49.861 15.9383 49.2607 15.3383 48.5378 14.921L31.8798 5.40205C31.1562 4.98432 30.3355 4.7644 29.5 4.7644C28.6646 4.7644 27.8438 4.98432 27.1203 5.40205L10.4622 14.921C9.73943 15.3383 9.13907 15.9383 8.72138 16.6609C8.3037 17.3835 8.08338 18.2032 8.08252 19.0379V38.0757C8.08338 38.9103 8.3037 39.73 8.72138 40.4526C9.13907 41.1752 9.73943 41.7753 10.4622 42.1926L27.1203 51.7115C27.8438 52.1292 28.6646 52.3491 29.5 52.3491C30.3355 52.3491 31.1562 52.1292 31.8798 51.7115L48.5378 42.1926C49.2607 41.7753 49.861 41.1752 50.2787 40.4526C50.6964 39.73 50.9167 38.9103 50.9176 38.0757Z"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.7251 16.563L29.5001 28.5806L50.2751 16.563"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.5 52.5443V28.5566"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="pricingP">Basic Plan</p>
              <h2 className="pricingH2">Hourly Fee</h2>
              <p className="pricingPar">
                This plan is best suited for appearances at case management
                conferences, Alternative Dispute Resolution centres, arbitral
                tribunals and other similar proceedings.
              </p>
              <div className="pricingBtnDiv">
                <Button>get started</Button>
              </div>
            </div>
          </Slide>

          <Slide right>
            <div className="pricingCard">
              <svg
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pricingImg"
              >
                <path
                  d="M50.9176 38.0757V19.0379C50.9167 18.2032 50.6964 17.3835 50.2787 16.6609C49.861 15.9383 49.2607 15.3383 48.5378 14.921L31.8798 5.40205C31.1562 4.98432 30.3355 4.7644 29.5 4.7644C28.6646 4.7644 27.8438 4.98432 27.1203 5.40205L10.4622 14.921C9.73943 15.3383 9.13907 15.9383 8.72138 16.6609C8.3037 17.3835 8.08338 18.2032 8.08252 19.0379V38.0757C8.08338 38.9103 8.3037 39.73 8.72138 40.4526C9.13907 41.1752 9.73943 41.7753 10.4622 42.1926L27.1203 51.7115C27.8438 52.1292 28.6646 52.3491 29.5 52.3491C30.3355 52.3491 31.1562 52.1292 31.8798 51.7115L48.5378 42.1926C49.2607 41.7753 49.861 41.1752 50.2787 40.4526C50.6964 39.73 50.9167 38.9103 50.9176 38.0757Z"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.7251 16.563L29.5001 28.5806L50.2751 16.563"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.5 52.5443V28.5566"
                  stroke="#9338B6"
                  stroke-width="4.75945"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="pricingP">Started Plan</p>
              <h2 className="pricingH2">Premium</h2>
              <p className="pricingPar">
                This plan is for high worth clients on a general retainer for a
                period of 15 years. It is also a plan for foreign clients
                planning long term investments in the Nigerian economy.
              </p>
              <div className="pricingBtnDiv">
                <Button>get started</Button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
