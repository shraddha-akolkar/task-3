import React from "react";
import "./Philosophy.css";

import Design from "../../assets/svg/Design";
import Care from "../../assets/svg/Care";
import Built from "../../assets/svg/Built";

import { motion } from "motion/react";

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
        <motion.div
          className="terms-top heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="top-heading  heading">
            VTP Brand <span className="span">Philosophy</span>
          </h2>
        </motion.div>
      </div>

      <div className="philosophy-container">
        {cards.map((card, index) => (
          <motion.div
            className="philosophy-item"
            key={card.id}
            initial={
              index === 0
                ? { opacity: 0, x: -50 }
                : index === 1
                  ? { opacity: 0, y: 50 }
                  : { opacity: 0, x: 50 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }} // 👈 smoother + slower
            viewport={{ once: true }}
          >
            <div className="icon-wrapper">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.des}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
