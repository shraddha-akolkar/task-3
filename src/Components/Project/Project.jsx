import React, { useState } from "react";
import "./Project.css";
import star from "../../assets/images/star.png";
import ProjectDetails from "../Project Details/ProjectDetails";

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

const ProjectSection = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="project-section">
        {/* BIG 1 */}
        <div className="bg-one"></div>

        {/* BADGE */}
        <div className="badge-wrapper">
          <div className="badge-bg"></div>
          <div className="badge-text">
            <span>EXPLORE</span>
            <h4>PROJECTS</h4>
          </div>
        </div>

        {/* BUILDINGS */}
        <div className="bg-buildings"></div>

        {/* Dropdown (UPDATED FUNCTIONAL) */}
        <div className="dropdown-wrapper">
          <div
            className={`dropdown ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className={!selected ? "placeholder" : ""}>
              {selected || "SELECT A PROJECT"}
            </span>{" "}
            <div className={`arrow ${open ? "rotated" : ""}`}></div>
          </div>

          {open && (
            <ul className="dropdown-list">
              <li className="dropdown-header">SELECT A PROJECT</li>

              {projects.map((p) => (
                <li
                  key={p}
                  className={p === selected ? "active" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
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

        {/* Left card */}
        <div className="left-card">
          <p>1 Choice, Infinite Possibilities</p>
          <h2>With VTP Just 1 Is Enough.</h2>
        </div>

        {/* Main content */}
        <div className="content">
          <h1>
            Homeownership Made Easy <br />
            Lowest Down Payment Ever!
          </h1>

          <div className="divider">
            <img src={star} alt="star" />
          </div>

          <h3>
            #THEPOWER<span className="middle-word">OF</span>ONE
          </h3>
        </div>
      </section>
      {/* Pass selected project */}
      {selected && <ProjectDetails projectName={selected} />}{" "}
    </>
  );
};

export default ProjectSection;
