import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cite from "./components/Cite";
import About from "./components/About";
import Resources from "./components/Resources";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/cite" Component={Cite} />
          <Route path="/resources" Component={Resources} />
          <Route path="/login" Component={Login} />
          <Route path="/results" Component={Results} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
