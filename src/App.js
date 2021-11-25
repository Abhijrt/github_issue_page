import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import IssueHeader from "./components/IssueHeader";
import Footer from "./components/Footer";
import Issue from "./components/Issue";

function App() {
  const [data, setData] = useState([]);

  const url = "https://api.github.com/repos/facebook/react/issues";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  {
    data.map((issue) => {
      return <Issue issue={issue} />;
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <IssueHeader />
        {data.map((issue) => {
          return <Issue key={issue.number} issue={issue} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
