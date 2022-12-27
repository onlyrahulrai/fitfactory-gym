import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsChevronRight, BsFacebook, BsTelephoneFill, BsTwitch, BsTwitter } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer-container">
      <hr />

      <div className="row">
        <div className="col">
          <h4 className="mb-half">About Us</h4>
          <div
            className="bg-warning mb-2"
            style={{ width: "50%", height: "2px" }}
          ></div>
          <p>
            Fitfactory Fitness Hub is a premium gymnasium and fitness centre at
            Ayodhya in Uttar Pradesh. They know that goals vary from person to
            person and they have something to offer everyone. Whether you're
            excited to lift heavy and build new skills, condition yourself and
            look better, improve flexibility, improve in a marathon time, or
            become more agile by performing CrossFit training - you'll find the
            right pathways to meet your goals in our gym. Our coaches bring a
            wealth of fitness knowledge, years of athletic experience, and
            expertise in specialties ranging from Fat loss, Muscle gain, Back
            injuries, Rehab, conditioning to endurance training.
          </p>
        </div>
        <div className="col">
          <h4 className="mb-half">Our Address</h4>
          <div
            className="bg-warning mb-3"
            style={{ width: "50%", height: "2px" }}
          ></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14252.31359948314!2d82.13177768132459!3d26.74187413122165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a09557ac5fbad%3A0x77447881e21866e7!2sRam%20Lakhan%20Plaza!5e0!3m2!1sen!2sin!4v1672124056629!5m2!1sen!2sin"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="address"
          ></iframe>

          <div>
            <span className="my-half d-block">
              <ImLocation className="text-warning" /> Address: Manas Nagar,
              Faizabad Road
            </span>
            <span className="my-half d-block">
              <AiOutlineMail className="text-warning" /> Email:
              fitfactory@gmail.com
            </span>{" "}
            <span className="my-half d-block">
              <BsTelephoneFill className="text-warning" /> Mobile: +918921554827
            </span>
          </div>
        </div>
        <div className="col">
          <div>
            <h4 className="mb-half">Quick Links</h4>
            <div
              className="bg-warning mb-3"
              style={{ width: "50%", height: "2px" }}
            ></div>

            <ul type="none" className="p-0">
              <li className="cursor-pointer">
                <Link to="hero" span="true" smooth={true}>
                  <BsChevronRight className="text-warning" />
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="programs" span="true" smooth={true}>
                  <BsChevronRight className="text-warning" />
                  Programs
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="reasons" span="true" smooth={true}>
                  <BsChevronRight className="text-warning" />
                  Reasons
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="plans" span="true" smooth={true}>
                  <BsChevronRight className="text-warning" />
                  Plans
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="testimonials" span="true" smooth={true}>
                  <BsChevronRight className="text-warning" />
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <BsFacebook size={32} className="text-white cursor-pointer" />
          <img src={Instagram} alt="" className="cursor-pointer" />
          <BsTwitter size={32} className="text-white cursor-pointer" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </section>
  );
};

export default Footer;
