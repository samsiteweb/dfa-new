import React from "react";
import "./article.css";
import Button from "../button/button";
import { motion } from "framer-motion";

import Rectangle1 from "../../assets/img/Rectangle1.jpg";
import Rectangle2 from "../../assets/img/Rectangle2.jpg";
import Rectangle3 from "../../assets/img/Rectangle3.jpg";
import Arrow from "../../assets/icons/arrow.svg";

const Article = () => {
  return (
    <div className="articleDiv">
      <div className="articleTop">
        <motion.div
          className="articleTopDetails"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="articleTopH4">Resources</h4>
          <p className="articleTopP">
            Here's what we've been up to recently.
          </p>
        </motion.div>
        
        <motion.div
          className="articleBtn"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Button>view all</Button>
        </motion.div>
      </div>

      <div className="articleCardDiv">
        <motion.div
          className="articleCard"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={Rectangle1} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">How to choose a good lawyer?</h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="articleCard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img src={Rectangle2} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">How to choose a good lawyer?</h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="articleCard"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={Rectangle3} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">How to choose a good lawyer?</h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Article;
