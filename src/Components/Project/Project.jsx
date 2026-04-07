import React, { useState } from "react";
import "./Project.css";
import star from "../../assets/images/star.png";
import ProjectDetails from "../Project Details/ProjectDetails";

const projects = [
  { name: "VTP Aurelia - Kharadi, Pune", id: 1 },
  { name: "Monarque by VTP Luxe - Hinjawadi, Pune", id: 2 },
  { name: "VTP VOLARE - Hinjawadi, Pune", id: 3 },
  { name: "EARTH 1 BY VTP LUXE - Mahalunge, Pune", id: 4 },
  { name: "CIELO by VTP Luxe - Bavdhan Pune", id: 5 },
  { name: "FLAMANTE BY VTP LUXE - Kharadi, Pune", id: 6 },
  { name: "VTP DOLCE VITA - New Kharadi, Pune", id: 7 },
  { name: "VTP EUPHORIA - New Kharadi, Pune", id: 8 },
  { name: "VTP Codename Vibrance - Baner Sus, Pune", id: 9 },
  { name: "Altamira by VTP Luxe - Kharadi, Pune", id: 10 },
];

const ProjectSection = () => {
  const [selected, setSelected] = useState(null);
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
              {selected
                ? projects.find((p) => p.id === selected)?.name
                : "SELECT A PROJECT"}
            </span>{" "}
            <div className={`arrow ${open ? "rotated" : ""}`}></div>
          </div>

          {open && (
            <ul className="dropdown-list">
              <li className="dropdown-header">SELECT A PROJECT</li>

              {projects.map((p) => (
                <li
                  key={p.id}
                  className={p.id === selected ? "active" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(p.id);
                    setOpen(false);
                  }}
                >
                  {p.name}
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

          <div className="star">
            <img src={star} alt="" />
          </div>

          <h3>
            #THEPOWER<span className="middle-word">OF</span>ONE
          </h3>
        </div>
      </section>
      {/* Pass selected project */}
      {selected && <ProjectDetails Project_Id={"proj_001"} />}{" "}
    </>
  );
};

export default ProjectSection;
