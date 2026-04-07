import React, { useState } from "react";
import "./Enquire.css";
import Arrow from "../../assets/svg/Arrow";
import Submit from "../../assets/svg/Submit";

import { motion } from "motion/react";

const Enquire = () => {
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleNext = () => {
    if (selected !== null) {
      setShowForm(true);
    } else {
      alert("Please select an option");
    }
  };

  return (
    <section className="enquire-section " id="enquire">
      <motion.div
        className="terms-top heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="enquire-card">
          {!showForm ? (
            <>
              <h1 className="enquire-title heading">
                Enquire <span className="span">Now</span>
              </h1>

              <div className="enquire-content">
                <div
                  className={`enquire-row ${selected === 1 ? "active" : ""}`}
                  onClick={() => setSelected(1)}
                >
                  <span className="radio-circle"></span>
                  <p>
                    To protect your privacy and peace of mind, thes{" "}
                    <span className="bold-font">VTP Direct Program</span> offers
                    a no-follow-up experience. Customers enrolled in the program
                    will receive an{" "}
                    <span className="bold-font">
                      additional discount over and above all ongoing offers
                    </span>{" "}
                    at VTP Realty. You will get exclusive coupon code after form
                    submission. Share it only at the project site office
                    reception.{" "}
                    <span className="bold-font">Program Guidelines</span>
                  </p>
                </div>

                <div
                  className={`enquire-row ${selected === 2 ? "active" : ""}`}
                  onClick={() => setSelected(2)}
                >
                  <span className="radio-circle"></span>
                  <p>
                    Would you like our Presales team to reach out over a call?
                  </p>
                </div>
              </div>

              <button className="enquire-btn" onClick={handleNext}>
                Next
                <span>
                  <Arrow color="white" />
                </span>
              </button>
            </>
          ) : (
            <>
              <div className="form-header ">
                <button className="back-btn" onClick={() => setShowForm(false)}>
                  ←
                </button>

                <h1 className="enquire-title heading">
                  Enquire <span>Now</span>
                </h1>
              </div>

              <form className="enquire-form">
                <div className="form-row">
                  <input type="text" placeholder="First Name*" />
                  <input type="text" placeholder="Last Name*" />
                </div>

                <input type="email" placeholder="Email*" />

                <div className="form-row">
                  <select>
                    <option>India (+91)</option>
                  </select>
                  <input type="text" placeholder="Phone*" />
                </div>

                <select>
                  <option value="">Select a Project*</option>
                  <option value="vtp-aurelia">
                    VTP AURELIA - Kharadi, Pune
                  </option>
                  <option value="vtp-vibrance">
                    VTP CODENAME VIBRANCE - Baner Sus, Pune
                  </option>
                  <option value="altamira">
                    ALTAMIRA BY VTP LUXE - Kharadi, Pune
                  </option>
                  <option value="monarque">
                    MONARQUE BY VTP LUXE - Hinjawadi, Pune
                  </option>
                  <option value="vtp-volare">
                    VTP VOLARE - Hinjawadi, Pune
                  </option>
                  <option value="earth1">
                    EARTH 1 BY VTP LUXE - Mahalunge, Pune
                  </option>
                  <option value="cielo">
                    CIELO BY VTP LUXE - Bavdhan, Pune
                  </option>
                  <option value="flamante">
                    FLAMANTE BY VTP LUXE - Kharadi, Pune
                  </option>
                  <option value="dolce-vita">
                    VTP DOLCE VITA - New Kharadi, Pune
                  </option>
                  <option value="euphoria">
                    VTP EUPHORIA - New Kharadi, Pune
                  </option>
                </select>

                <div className="checkbox-group">
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">
                      You authorize, as per our <b>Privacy Policy </b>, Calls
                      and Communication via Calls, SMS, RCS, and WhatsApp.
                    </span>
                  </label>

                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">
                      I consent to VTP Realty using my data for personalized
                      recommendations and ads.
                    </span>
                  </label>
                </div>

                <button className="submit-btn">
                  Submit
                  <span className="submit-divider" />
                  <span className="submit-icon">
                    <Submit />
                  </span>
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Enquire;
