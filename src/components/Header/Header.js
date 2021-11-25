import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="main-container">
      <div className="heading-container">
        <p>
          facebook / react
          <span className="type">Public</span>
        </p>
        <ul className="left-header-container">
          <li>Notifications</li>
          <li>
            <span>Star</span>
            <span className="detail">21.4k</span>
          </li>
          <li>
            <span>Fork</span>
            <span className="detail">2.3k</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <ul className="list-container">
          <li>Code</li>
          <li>
            <i className="fa fa-circle-o"></i> Issues
          </li>
          <li>Pull requests</li>
          <li>
            <i className="fa fa-play-circle"></i> Actions
          </li>
          <li>Projects</li>
          <li>Wiki</li>
          <li>Security</li>
          <li>Insights</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
