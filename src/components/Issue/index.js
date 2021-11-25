import React from "react";
import moment from "moment";

import "./index.css";

class Issue extends React.Component {
  render() {
    // console.log(this.props.issue);
    const { title, number, updated_at, labels } = this.props.issue;
    const { login } = this.props.issue.user;

    return (
      <div className="issue-container">
        <div className="icon">
          <i className="fa fa-circle-o"></i>
        </div>
        <div className="data-container">
          <div className="title">
            {title}
            <span>
              {labels.map((item) => {
                return (
                  <span
                    className="feature"
                    key={item.id}
                    style={{ background: "#" + item.color }}
                  >
                    {item.name}
                  </span>
                );
              })}
            </span>
          </div>
          <div className="content">
            <span>#{number} </span>
            <span>opened {moment(updated_at).fromNow()} by </span>
            <span>{login} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Issue;
