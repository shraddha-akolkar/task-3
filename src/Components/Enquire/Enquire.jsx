import React, { useState } from "react";
import "./Enquire.css";

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
    <section className="enquire-section ">
      <div className="enquire-card">
        {!showForm ? (
          <>
            <h1 className="enquire-title">
              Enquire <span>Now</span>
            </h1>

            <div className="enquire-content">
              {/* OPTION 1 */}
              <div
                className={`enquire-row ${selected === 1 ? "active" : ""}`}
                onClick={() => setSelected(1)}
              >
                <span className="radio-circle"></span>
                <p>
                  To protect your privacy and peace of mind, the VTP Direct
                  Program offers a no-follow-up experience. Customers enrolled
                  in the program will receive an additional discount over and
                  above all ongoing offers at VTP Realty. You will get exclusive
                  coupon code after form submission. Share it only at the
                  project site office reception. Program Guidelines
                </p>
              </div>

              {/* OPTION 2 */}
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
              Next <span>→</span>
            </button>
          </>
        ) : (
          <>
            {/* FORM */}
            <div className="form-header">
              <button className="back-btn" onClick={() => setShowForm(false)}>
                ←
              </button>

              <h1 className="enquire-title">
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
                <option>Select a Project*</option>
              </select>

              <div className="checkbox-group">
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">
                    You authorize, as per our <b>Privacy Policy</b>, Calls and
                    Communication via Calls, SMS, RCS, and WhatsApp.
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
                Submit <span>→</span>
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Enquire;
