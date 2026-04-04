import React from "react";
import "./Philosophy.css";

import Design from "../../assets/svg/Design";
import Care from "../../assets/svg/Care";
import Built from "../../assets/svg/Built";

const cards = [
  {
    id: 1,
    icon: <Design />,
    title: "Better Design",
    des: "Layouts that maximize the potential of each room offering more usable space inside a home, upgraded premium specifications, amenities for every family member, and better value for money.",
  },
  {
    id: 2,
    icon: <Built />,
    title: "Better Build",
    des: "VTP Group has over 40 years of experience in construction material sourcing. Constructed close to 100 projects across the country. Backward integration that allows easy access to the best construction materials. A pioneer to have used the latest technology in India.",
  },
  {
    id: 3,
    icon: <Care />,
    title: "Better Care",
    des: "No transfer fee. Community Building programs after possession. Professionally managed team facilitating leasing and resale of property. V-Care Customer Portal for single window communication with customers.",
  },
];

const Philosophy = () => {
  return (
    <div className="philosophy-section side-space">
      <div className="top-section">
        <h2 className="top-heading  heading">
          VTP Brand <span>Philosophy</span>
        </h2>
      </div>
      <div class="philosophy-container">
        {cards.map((cards) => (
          <div class="philosophy-item" key={cards.id}>
            <div className="icon-wrapper">{cards.icon}</div>
            <h3>{cards.title}</h3>
            <p>{cards.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
