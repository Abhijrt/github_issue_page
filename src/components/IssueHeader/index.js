import React from "react";
import "./index.css";

function IssueHeader() {
  return (
    <div className="issue-header-container">
      {/* <div className="left-container"> */}
      <span className="open-issue">238 Open </span>
      <span className="close-issue">1690 Closed</span>
      {/* </div> */}
      <ul className="issue-header-list">
        <li>Author</li>
        <li>Label</li>
        <li>Projects</li>
        <li>Milestones</li>
        <li>Assinee</li>
        <li>Sort</li>
      </ul>
    </div>
  );
}

export default IssueHeader;
