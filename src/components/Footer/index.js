import React from "react";
import "./index.css";

function Footer() {
  return (
    <>
      <div className="footer-detail-container">
        <p className="footer-detail">
          <i className="fa fa-lightbulb"></i>
          <strong>PropTip!</strong>
          What's not been updated in a month :<span>updated:2021-08-17.</span>
        </p>
      </div>
      <div className="main-footer-container">
        <ul className="footer-list">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>Docs</li>
          <li>
            <i className="fa fa-github"></i>
          </li>
          <li>Contact GitHub</li>
          <li>Pricing</li>
          <li>API</li>
          <li>Training</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
