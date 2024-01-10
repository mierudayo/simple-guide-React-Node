import "./App.css";
import Navbar from "./components/BlogNav";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="main-container" style={{ background: "#219ebc" }}>
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
