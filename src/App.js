import Header from "./components/Header/Header";
import IssueHeader from "./components/IssueHeader";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <IssueHeader />
      </div>
      <Footer />
    </div>
  );
}

export default App;
