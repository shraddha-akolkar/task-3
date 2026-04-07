import React from "react";
import "./Slider.css";

import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/images/3.webp";
import img5 from "../../assets/images/5.webp";

export default function ImageMarquee() {
  const images = [img1, img2, img3, img5];
  const doubled = [...images, ...images];
  return (
    <div className="slider-section section-space side-space">
      <div className="slider-space">
        <div className="slider-content">
          {[...images, ...images].map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
