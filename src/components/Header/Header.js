import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="main-container">
      <div className="heading-container">
        <p>
          <i className="fa fa-desktop"></i> facebook <strong>/</strong> react
          <span className="type">Public</span>
        </p>
        <ul className="left-header-container">
          <li>
            <i className="fa fa-bell"></i>Notifications
          </li>
          <li>
            <span>
              <i className="fa fa-star"></i>Star
            </span>
            <span className="detail">21.4k</span>
          </li>
          <li>
            <span>
              <i className="fa fa-code-branch"></i>Fork
            </span>
            <span className="detail">2.3k</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <ul className="list-container">
          <li>
            <i className="fa fa-code"></i>Code
          </li>
          <li>
            <i className="fa fa-circle-o"></i> Issues
          </li>
          <li>
            <i className="fas fa-code-branch"></i>Pull requests
          </li>
          <li>
            <i className="fa fa-play-circle"></i> Actions
          </li>
          <li>
            <i className="fa fa-clipboard-list"></i>Projects
          </li>
          <li>
            <i className="fa fa-book-open"></i>Wiki
          </li>
          <li>
            <i className="fa fa-exclamation-triangle"></i>Security
          </li>
          <li>
            <i className="fa fa-chart-line"></i>Insights
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
