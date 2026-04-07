import React, { useState } from "react";
import "./Project.css";
import ProjectDetails from "../Project Details/ProjectDetails";

import building from "../../assets/images/project_building.webp";
import badge from "../../assets/images/badge.png";
import bg_one from "../../assets/images/project_one.webp";
const projects = [
  "VTP Aurelia - Kharadi, Pune",
  "Monarque by VTP Luxe - Hinjawadi, Pune",
  "VTP VOLARE - Hinjawadi, Pune",
  "EARTH 1 BY VTP LUXE - Mahalunge, Pune",
  "CIELO by VTP Luxe - Bavdhan Pune",
  "FLAMANTE BY VTP LUXE - Kharadi, Pune",
  "VTP DOLCE VITA - New Kharadi, Pune",
  "VTP EUPHORIA - New Kharadi, Pune",
  "VTP Codename Vibrance - Baner Sus, Pune",
  "Altamira by VTP Luxe - Kharadi, Pune",
];

const Project = () => {
  const [selected, setSelected] = useState(projects[0]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="project_select">
        <img src={bg_one} alt="bg" className="ghost_one" />

        <div className="br_badge">
          <img src={badge} alt="badge" className="badge_img" />
        </div>

        <div className="center_content">
          <div className="pro_dropdown_wrapper">
            <div
              className={`pro_dropdown_trigger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span className="dropdown_label">{selected}</span>
              <span
                className={`dropdown_arrow ${open ? "rotated" : ""}`}
              ></span>
            </div>

            {open && (
              <ul className="pro_dropdown_list">
                {projects.map((p) => (
                  <li
                    key={p}
                    className={`pro_dropdown_item ${p === selected ? "active" : ""}`}
                    onClick={() => {
                      setSelected(p);
                      setOpen(false);
                    }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="project_select_desc">
            <p className="tagline_line">Homeownership Made Easy</p>
            <p className="tagline_line">Lowest Down Payment Ever!</p>

            <div className="over_separator">
              <span className="sep_line" />
              <span className="sep_star">✦</span>
              <span className="sep_line" />
            </div>

            <p className="over_capsuler">
              <strong>#THEPOWER</strong>OF<strong>ONE</strong>
            </p>
          </div>
        </div>

        <div className="pro_sel_card">
          <p className="card_sub">1 Choice, Infinite Possibilities</p>
          <p className="card_title">
            With VTP <br />
            Just 1 Is Enough.
          </p>
        </div>

        <div className="pro_build">
          <img src={building} alt="building" />
        </div>
      </section>

      <ProjectDetails projectName={selected} />
    </>
  );
};

export default Project;
