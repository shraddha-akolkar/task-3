import React from "react";
import "./Construction.css";
import youtube from "../../../../task2-repeat/src/assets/images/youtube.png";

export default function Construction() {
  return (
    <section className="construction-section section-space side-space">
      <div className="construction-header">
        <h2 className="construction-title heading">
          Construction <span>Update</span>
        </h2>
      </div>

      <div className="video-wrapper">
        <div className="video-card">
          <div className="video-inner">
            <img src={youtube} alt="Construction Update" />
          </div>
        </div>
      </div>
    </section>
  );
}
