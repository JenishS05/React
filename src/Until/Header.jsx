/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Img/logo.png";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="navbar">
        <div className="container-fluid">
          <div className="logo">
          
            <img src={logo} alt="Logo" />
            <div className="navbar-okta">
              <span>Okta</span>
              <p className="navbar-okta">Oil & Gas Industry</p>
            </div>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <a href="/" className="hover-underline">
                  HOME
                </a>
              </li>
              <li>
                <a href="/" className="hover-underline">
                  PAGES<span className="ps-1">
                    <i className="fa-solid fa-greater-than"></i>
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Team</a>
                  </li>
                  <li>
                    <a href="/">Our History</a>
                  </li>
                  <li>
                    <a href="/">Coming Soon</a>
                  </li>
                  <li>
                    <a href="/">Partner Clients</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Elements</a>
                  </li>
                  <li>
                    <a href="/">Typography</a>
                  </li>
                  <li>
                    <a href="/">404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="hover-underline">
                  GALLERY<span className="ps-1">
                    <i className="fa-solid fa-greater-than"></i>
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="/">Gallery With Image</a>
                  </li>
                  <li>
                    <a href="/">Gallery With Image And Title</a>
                  </li>
                  <li>
                    <a href="/">Gallery With Image And Excerpt</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="hover-underline">
                  SERVICES<span className="ps-1">
                    <i className="fa-solid fa-greater-than"></i>
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="/">Single Service 1</a>
                  </li>
                  <li>
                    <a href="/">Single Service 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="hover-underline">
                  SHOP<span className="ps-1">
                    <i className="fa-solid fa-greater-than"></i>
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="/">Cart</a>
                  </li>
                  <li>
                    <a href="/">Checkout</a>
                  </li>
                  <li>
                    <a href="/">My Account</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="hover-underline">
                  BLOG
                </a>
              </li>
              <li>
                <a href="/" className="hover-underline">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
          <div className="contact-menu">
            <span className="phone-number-slider">800 123 4567</span>
            <div
              className="hamburger-menu"
              onClick={handleShow}
              role="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Content for the side panel.</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
