import React from "react";
import "./index.css";

function IssueHeader() {
  return (
    <div className="issue-header-container">
      {/* <div className="left-container"> */}
      <span className="open-issue">
        <i className="fa fa-circle-o"></i>238 Open{" "}
      </span>
      <span className="close-issue">
        <i className="fa fa-check"></i>1690 Closed
      </span>
      {/* </div> */}
      <ul className="issue-header-list">
        <li>
          Author<i className="fa fa-caret-up"></i>
        </li>
        <li>
          Label<i className="fa fa-caret-up"></i>
        </li>
        <li>
          Projects<i className="fa fa-caret-up"></i>
        </li>
        <li>
          Milestones<i className="fa fa-caret-up"></i>
        </li>
        <li>
          Assinee<i className="fa fa-caret-up"></i>
        </li>
        <li>
          Sort<i className="fa fa-caret-up"></i>
        </li>
      </ul>
    </div>
  );
}

export default IssueHeader;
