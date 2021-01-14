import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import Head from "next/head";
import axios from "axios";

import Router from "next/router";

import { toast } from "react-toastify";


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mes: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.mes]: e.target.value,
    });
  };
  async handleOnSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://send-email-strapsessions.herokuapp.com/api/contact",
      data: this.state,
    }).then((response) => {
      if (response.data === "success") {
        toast.success('Message Has Been Sent Successfully', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
      });
        this.resetForm();
        
        setTimeout(function(){ Router.push('/'); }, 4000);
      } else if (response.data === "badddd") {
        toast.success('Message did not deliver: Please Check if you entered a valid email', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
      });
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", mes: "" });
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>STRAPSESSIONS </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Navbar />
        <Breadcrumb title="Contact Us" />
        <section className="contact-area ptb-60">
          <div className="container">
            <div className="section-title">
              <h2>
                <span className="dot"></span> Contact Us
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="contact-info">
                  <h3>Here to Help</h3>
                  <p>
                    Have a question? You may find an answer in our FAQs. But you
                    can also contact us.
                  </p>

                  <ul className="contact-list">
                    <li>
                      <i className="fas fa-phone"></i> Call Us/Whatsapp:{" "}
                      <a href="https://api.whatsapp.com/send?phone=16193243574">+1(619) 324-3574</a>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i> Email Us:{" "}
                      <a href="#">support@strapsessions.com</a>
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      Address: San Diego CA
                    </li>
                  </ul>

                  <h3>Opening Hours:</h3>
                  <ul className="opening-hours">
                    <li>
                      <span>Monday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Tuesday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Wednesday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Thursday - Friday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Sunday:</span> Closed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="contact-form">
                  <h3>Drop Us A Line</h3>
                  <p>
                    We’re happy to answer any questions you have or provide you
                    with an estimate. Just send us a message in the form below
                    with any questions you may have.
                  </p>

                  <form
                    id="contactForm"
                    name="contact"
                    onSubmit={this.handleOnSubmit}
                  >
                    <input type="hidden" name="form-name" value={this.state.name} />
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Name <span>(required)*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required={true}
                            data-error="Please enter your name"
                            placeholder="Enter your name"
                            value={this.state.name}
                onChange={this.handleOnChange.bind(this)}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Email <span>(required)*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required={true}
                            value={this.state.email}
                onChange={this.handleOnChange.bind(this)}
                required
                            data-error="Please enter your email"
                            placeholder="Enter your Email Address"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Your Message <span>(required)*</span>
                          </label>
                          <textarea
                            name="mes"
                            id="mes"
                            cols="30"
                            rows="8"
                            value={this.state.mes}
                            onChange={this.handleOnChange.bind(this)}
                            required={true}
                            data-error="Please enter your message"
                            className="form-control"
                            placeholder="Enter your Message"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="btn btn-primary">
                          Send Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Facility />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
