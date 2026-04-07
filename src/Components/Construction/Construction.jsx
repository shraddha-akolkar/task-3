import React from "react";
import "./Construction.css";
import youtube from "../../../../task2-repeat/src/assets/images/youtube.png";
import { motion } from "motion/react";

export default function Construction() {
  return (
    <section className="construction-section section-space side-space">
      <motion.div
        className="construction-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="construction-title heading">
          Construction <span className="span">Update</span>
        </h2>
      </motion.div>

      <motion.div
        className="video-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="video-card">
          <div className="video-inner">
            <img src={youtube} alt="Construction Update" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
