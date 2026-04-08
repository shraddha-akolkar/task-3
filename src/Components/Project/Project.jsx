import React, { useState } from "react";
import "./Project.css";
import star from "../../assets/images/star.png";
import ProjectDetails from "../Project Details/ProjectDetails";

const projects = [
  { name: "VTP Aurelia - Kharadi, Pune", id: "proj_001" },
  { name: "Monarque by VTP Luxe - Hinjawadi, Pune", id: "proj_002" },
  { name: "VTP VOLARE - Hinjawadi, Pune", id: "proj_003" },
  { name: "EARTH 1 BY VTP LUXE - Mahalunge, Pune", id: "proj_004" },
  { name: "CIELO by VTP Luxe - Bavdhan Pune", id: "proj_005" },
  { name: "FLAMANTE BY VTP LUXE - Kharadi, Pune", id: "proj_006" },
];

const ProjectSection = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="project-section">
        <div className="bg-one"></div>

        <div className="badge-wrapper">
          <div className="badge-bg"></div>
          <div className="badge-text">
            <span>EXPLORE</span>
            <h4>PROJECTS</h4>
          </div>
        </div>

        <div className="bg-buildings"></div>

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

        <div className="left-card">
          <p>1 Choice, Infinite Possibilities</p>
          <h2>With VTP Just 1 Is Enough.</h2>
        </div>

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
      {selected && <ProjectDetails Project_Id={selected} />}
    </>
  );
};

export default ProjectSection;
