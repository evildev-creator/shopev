import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  yy;
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src={require("../../images/logo.png")} alt="logo" />
                    </a>
                  </Link>
                </div>

                <p>
                  Biggest Online gun deals. One of the largest online gun stores
                  with the selection of handguns, rifles, shotguns, ammo, optics
                  & firearm accessories.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/faq">
                      <a>Faq's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/customer-service">
                      <a>Customer Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Information</h3>

                <ul className="information-links">
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/customer-service">
                      <a>Customer Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="fas fa-phone"></i>
                    Call Us/Whatsapp:{" "}
                    <a href="https://api.whatsapp.com/send?phone=16193243574">+1(619) 324-3574</a>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    Email Us:{" "}
                    <a href="support@strapsessions.com">
                      support@strapsessions.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Address:{" "}
                   San Diego CA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>Copyright @ 2020 Strapsessions. All Rights Reserved </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul className="payment-card">
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/visa.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/mastercard.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/mastercard2.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/visa2.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/expresscard.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
