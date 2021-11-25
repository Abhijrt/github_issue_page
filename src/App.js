import Header from "./components/Header/Header";
import IssueHeader from "./components/IssueHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <IssueHeader />
      </div>
    </div>
  );
}

export default App;
