import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NoPage from "./NoPage";
import About from "./About";
import Services from "./Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
