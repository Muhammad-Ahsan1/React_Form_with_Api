import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NoPage from "./NoPage";
import About from "./About";
import Services from "./Services";
import Protected from "./Protected";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/" element={<Protected Component={Home}/>}></Route>
          <Route path="/about" element={<Protected Component={About}/>}></Route>
          <Route path="/services" element={<Protected Component={Services}/>}></Route>
          <Route path="/*" element={<NoPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
