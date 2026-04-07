import React from "react";
import "./Footer.css";

import Phone from "../../assets/svg/Phone";
import Mail from "../../assets/svg/Mail";
import Facebook from "../../assets/svg/Facebook";
import Youtube from "../../assets/svg/Youtube";
import Linkedin from "../../assets/svg/Linkdin";
import Instagram from "../../assets/svg/Instagram";

import qr1 from "../../assets/images/qr1.webp";
import qr2 from "../../assets/images/qr2.webp";
import qr3 from "../../assets/images/qr3.webp";
import qr4 from "../../assets/images/qr4.webp";
import qr5 from "../../assets/images/qr5.webp";
import qr6 from "../../assets/images/qr6.webp";
import qr7 from "../../assets/images/qr7.webp";
import qr8 from "../../assets/images/qr8.webp";

const qrData = [
  { img: qr1, title: "VTP Sierra Phase 2", reg: "P52100029394" },
  { img: qr2, title: "Flamante By VTP Luxe", reg: "P52100051826" },
  { img: qr3, title: "VTP Dolce Vita Phase 1", reg: "P52100051819" },
  { img: qr4, title: "VTP Dolce Vita Phase 2", reg: "P52100055405" },
  { img: qr5, title: "VTP Dolce Vita Phase 3", reg: "P52100055407" },
  { img: qr6, title: "VTP Dolce Vita Phase 4", reg: "P52100055619" },
  { img: qr7, title: "VTP Euphoria Phase 1", reg: "P52100031691" },
  { img: qr8, title: "VTP Euphoria Phase 2", reg: "P52100045848" },
];

const Footer = () => {
  return (
    <footer className="footer side-space">
      <div className="footer__qr">
        {qrData.map((item, i) => (
          <div key={i} className="qr-card">
            <img src={item.img} alt="" />
            <p className="qr-title">{item.title}</p>
            <p className="qr-reg">MahaRERA Reg. No: {item.reg}</p>
          </div>
        ))}
      </div>

      <p className="footer__note">
        All projects are registered under MahaRERA and is available on website -
        http://maharera.mahaonline.gov.in/
      </p>

      <hr />

      <div className="footer__contact">
        <div className="footer__contact__info">
          <p>
            Sales : <Phone /> 07969292609
          </p>
        </div>

        <div className="footer__contact__info">
          <p>
            Head Office :<Phone /> 02066850000
          </p>
          <span>(Call Head Office for CRM, Marketing, Purchase)</span>
        </div>

        <div className="footer__contact__info">
          <p>
            HR : <Phone /> 8975004886 / 8378962303
          </p>
          <p>
            <Mail /> career@vtpgroup.in
          </p>
        </div>

        <div className="footer__social">
          <Facebook />
          <Youtube />
          <Linkedin />
          <Instagram />
        </div>
      </div>

      <hr />

      <div className="footer__bottom">
        <p>
          © Copyright 2026 Official VTP Realty Website. All Rights Reserved.
        </p>

        <div className="footer__bottom__right">
          <a href="#">Privacy Policy</a>|<a href="#"> Disclaimer</a>|
          <a href="#">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
