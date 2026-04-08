import React, { useState } from "react";
import "./ProjectDetails.css";
import { Project_Details } from "./projectData";
const TABS = ["Gallery", "Overview", "Highlights", "Unit Plans", "Amenities"];

const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.707 0.293C23.417 0.003 22.979-0.082 22.603 0.082L0.603 9.574C0.237 9.732 0 10.094 0 10.493c0 .399.238.76.605.918l7.391 3.178L21.55 2.45 9.41 16.004l3.179 7.392C12.747 23.762 13.107 24 13.507 24c.399 0 .761-.237.919-.604l9.492-22C24.08 1.02 23.997.583 23.707.293Z"
      fill="currentColor"
    />
  </svg>
);

const PdfIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.418 25.59c.307-.668.854-1.157 1.515-1.388V21.71c0-1.454 1.183-2.637 2.637-2.637h1.51c.308 0 .604.054.879.151V3.137C28.959 1.683 27.776.5 26.322.5H8.744C7.29.5 6.107 1.683 6.107 3.137V4.426h15.118c1.938 0 3.515 1.577 3.515 3.515v8.204c0 1.938-1.577 3.515-3.515 3.515H6.107v8.203c0 1.454 1.183 2.637 2.637 2.637h15.862l-1.794-2.093a2.638 2.638 0 0 1-.394-2.817Z"
      fill="currentColor"
    />
    <path
      d="M29.837 25.813h-.878v-4.102a.879.879 0 0 0-.879-.879h-1.51a.879.879 0 0 0-.878.879v4.102h-.878c-.751 0-1.156.88-.667 1.45l2.51 2.93a.879.879 0 0 0 1.341 0l2.51-2.93c.489-.57.084-1.45-.671-1.45Z"
      fill="currentColor"
    />
    <path
      d="M22.982 16.145V7.94A1.758 1.758 0 0 0 21.225 6.184H2.474A1.758 1.758 0 0 0 .717 7.94v8.204a1.758 1.758 0 0 0 1.757 1.758h18.75a1.758 1.758 0 0 0 1.758-1.757ZM6.278 13.006c-.239 0-.683.002-1.046.004v1.963a.586.586 0 1 1-1.172 0V9.115a.586.586 0 0 1 .586-.587h1.632a2.238 2.238 0 0 1 0 4.478Zm7.895 1.448c-.528.689-1.29 1.077-2.147 1.092-.471.008-1.654.013-1.704.013a.586.586 0 0 1-.586-.586c0-.021-.008-2.133-.008-2.938 0-.669-.004-2.923-.004-2.923a.586.586 0 0 1 .586-.586h1.66c1.765 0 2.952 1.413 2.952 3.516 0 .926-.265 1.783-.749 2.412Zm4.879-3.754h-1.789v1.702h1.6a.586.586 0 1 1 0 1.172h-1.6v2.399a.586.586 0 1 1-1.172 0V9.113a.586.586 0 0 1 .586-.586h2.375a.586.586 0 1 1 0 1.172Z"
      fill="currentColor"
    />
  </svg>
);

const ProjectDetails = ({ Project_Id = null }) => {
  const [activeTab, setActiveTab] = useState("Unit Plans");
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = Project_Details.find((p) => p.id === Project_Id);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="pd_section">
      <div className="pd_topbar">
        <div className="pd_logo_card">
          <img
            src={`https://placehold.co/160x56/fff/8b2635?text=${encodeURIComponent(project.name)}&font=playfair-display`}
            alt={project.name}
            className="pd_logo_img"
          />
        </div>

        <nav className="pd_tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`pd_tab_btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab.toUpperCase()}</span>
              {activeTab === tab && <span className="pd_tab_underline" />}
            </button>
          ))}
        </nav>

        <div className="pd_pdf_section">
          <button
            className="pd_download_btn"
            onClick={() => alert("Download Brochure")}
          >
            <span>Download Brochure</span>
            <span className="pd_btn_sep" />
            <PdfIcon />
          </button>
        </div>
      </div>

      <div className="pd_tab_content">
        {activeTab === "Unit Plans" && (
          <div className="pd_table_wrapper">
            <table className="pd_unit_table">
              <thead>
                <tr>
                  <th className="th_left">
                    <div className="th_pill">Configuration</div>
                  </th>
                  <th className="th_center">
                    <div className="th_pill">Carpet Area (sq.ft.)</div>
                  </th>
                  <th className="th_right">
                    <div className="th_pill">Product Cost (₹)</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.unitPlans.map((u, i) => (
                  <tr key={i} className="pd_row">
                    <td className="td_config">{u.configuration}</td>
                    <td className="td_area">
                      {u.carpetAreaMin === u.carpetAreaMax
                        ? u.carpetAreaMin
                        : `${u.carpetAreaMin} - ${u.carpetAreaMax}`}
                    </td>
                    <td className="td_cost">
                      {u.price ? (
                        `₹ ${u.price.toLocaleString()}`
                      ) : (
                        <button
                          className="pd_cost_btn"
                          onClick={() =>
                            alert(`Request price for ${u.configuration}`)
                          }
                        >
                          REQUEST PRICE <SendIcon />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Gallery" && (
          <div className="pd_gallery">
            <div className="pd_gallery_viewport">
              <div
                className="pd_gallery_track"
                style={{
                  transform: `translateX(calc(-${currentIndex * 35}% + 32.5%))`,
                }}
              >
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className={`pd_slide ${i === currentIndex ? "active" : ""}`}
                  >
                    <img src={img.url} alt={img.caption} />
                  </div>
                ))}
              </div>
            </div>

            <div className="pd_gallery_controls">
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) =>
                      (prev - 1 + project.gallery.length) %
                      project.gallery.length,
                  )
                }
              >
                {"<"}
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % project.gallery.length)
                }
              >
                {">"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "Overview" && (
          <div className="pd_overview_section">
            <div className="pd_overview_img">
              <img
                src={project.overview.image}
                alt={project.overview.heading}
              />
            </div>

            <div className="pd_overview_content">
              <h2>{project.overview.heading}</h2>

              <p className="pd_overview_desc">{project.overview.description}</p>

              <p className="pd_overview_desc">
                At {project.name}, we bring you elegant residences in a prime
                location designed for comfort, connectivity, and modern living.
              </p>
            </div>
          </div>
        )}

        {activeTab === "Highlights" && (
          <div className="pd_highlights_wrapper">
            {project.highlights.map((h) => {
              const isImageIcon =
                typeof h.icon === "string" &&
                /\.(svg|png|jpe?g)(\?.*)?$/.test(h.icon);
              const iconContent = isImageIcon ? (
                <img src={h.icon} alt={`${h.title} icon`} />
              ) : (
                <span>{ICON_MAP[h.icon] || h.icon}</span>
              );

              return (
                <div key={h.title} className="pd_highlight_item">
                  <div className="pd_highlight_icon">{iconContent}</div>
                  <h3>{h.title}</h3>
                  <p>{h.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "Amenities" && (
          <div className="pd_gallery">
            <div className="pd_gallery_viewport">
              <div
                className="pd_gallery_track"
                style={{
                  transform: `translateX(calc(-${currentIndex * 35}% + 32.5%))`,
                }}
              >
                {project.amenities.map((a, i) => (
                  <div
                    key={a.id}
                    className={`pd_slide ${i === currentIndex + 1 ? "active" : ""}`}
                  >
                    <img src={a.image} alt={a.name} />
                  </div>
                ))}
              </div>
            </div>

            <div className="pd_gallery_controls">
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) =>
                      (prev - 1 + project.amenities.length) %
                      project.amenities.length,
                  )
                }
              >
                {"<"}
              </button>

              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) => (prev + 1) % project.amenities.length,
                  )
                }
              >
                {">"}
              </button>
            </div>
          </div>
        )}

        {activeTab !== "Unit Plans" &&
          activeTab !== "Gallery" &&
          activeTab !== "Overview" &&
          activeTab !== "Highlights" &&
          activeTab !== "Amenities" && (
            <div className="pd_placeholder">
              <p>{activeTab} content coming soon.</p>
            </div>
          )}
      </div>

      {/* ── Mobile download button ── */}
      {/* <div className="pd_mobile_download">
        <button
          className="pd_download_btn"
          onClick={() => alert("Download Brochure")}
        >
          <span>Download Brochure</span>
          <span className="pd_btn_sep" />
          <PdfIcon />
        </button>
      </div> */}
    </section>
  );
};

export default ProjectDetails;
