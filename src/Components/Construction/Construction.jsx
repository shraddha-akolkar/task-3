import React from "react";
import "./Construction.css";
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
            <iframe
              width="552"
              height="310"
              src="https://www.youtube.com/embed/3x1r60l97F0"
              title="Township Codename Pegasus Construction Update Video January 2026 | VTP Realty"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
