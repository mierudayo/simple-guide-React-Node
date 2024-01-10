import react from "react";
import { BrowserRouter as BroweseRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Todo from "./components/Todo";

//
function App() {
  const headStyle = {
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={headStyle}>To do List</h1>
      <BroweseRouter>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
        </Routes>
      </BroweseRouter>
    </div>
  );
}

export default App;
