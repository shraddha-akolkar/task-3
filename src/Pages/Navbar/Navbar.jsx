import React, { useState, useEffect } from "react";
import "./Navbar.css";

import Logo from "../../assets/svg/Logo";
import Call from "../../assets/svg/Call";
import Person from "../../assets/svg/Person";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Steps", href: "#steps" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "About VTP", href: "#about" },
  { label: "Enquire Now", href: "#enquire" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="side-space main-nav">
        <nav className={`navbar ${isVisible ? "" : "navbar--hidden"}`}>
          <a href="/" className="navbar__logo">
            <Logo />
          </a>

          <button
            className={`navbar__hamburger${menuOpen ? " open" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);

              document.body.style.overflow = !menuOpen ? "hidden" : "auto";
            }}
          >
            <span />
            <span />
            <span />
          </button>

          <ul
            className={`navbar__links ${
              menuOpen ? " navbar__links--open" : ""
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={() => {
                    setMenuOpen(false);
                    document.body.style.overflow = "auto";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a href="tel:07969292609" className="navbar__phone">
              <span className="icon-circle">
                <Call />
              </span>
              <span className="phone-text">07969292609</span>
            </a>

            <button className="navbar__expert-btn">
              <span>Expert Assist</span>
              <span className="divider"></span>
              <Person />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
