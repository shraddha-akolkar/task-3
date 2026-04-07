import React from "react";
import "./Terms.css";
import { motion } from "motion/react";

const Terms = () => {
  return (
    <div className="terms-section section-space side-space" id="terms">
      <motion.div
        className="terms-top heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="terms-heading heading">
          Terms and <br />
          <span className="span">Conditions</span>
        </h3>
      </motion.div>

      <div className="terms-bottom para">
        <ul>
          {[
            "Customers can opt for the Best Advantage Scheme based on their requirements with the available financial institutions. They are required to pay their own contribution as applicable under the selected scheme and as per the financial institution’s guidelines.",
            "Stamp duty and registration charges are to be paid separately.",
            "This scheme is applicable only for residential projects.",
            "The scheme is available with select financial institutions only.",
            "Loan eligibility, fund percentage, interest rates, and sanction are solely at the discretion of the financial institution.",
            "Disbursement of the due amount will take place within 7 days upon submission of the registered document.",
            "Loan application charges and fees will be applicable as per the financial institution’s policies.",
            "Processing fees, GST, TDS, and other government levies are applicable and to be borne by the customer.",
            "1% TDS (or as applicable) is to be paid by the customer within one month of Agreement registration. TDS is part of the agreement value. Non-payment of TDS and any penalties incurred will be the sole responsibility of the customer.",
            "VTP Realty reserves the right to modify or withdraw this scheme at any time without prior notice.",
            "Booking is subject to the clearance of the token/booking amount.",
            "In case of cancellation for any reason, applicable cancellation charges will apply and will be borne by the customer.",
            "Each financial institution's scheme has its own specific terms and conditions. Customers are required to consult with the bank representative for a detailed understanding of the applicable terms. Customers are advised to seek complete disclosure of all relevant terms and conditions from the financial institution representative prior to making any financial commitments or decisions.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Terms;
