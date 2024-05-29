import { useState } from "react";
import Nav from "./Nav";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://usmanlive.com/wp-json/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Login Successful!!!!");
        navigate("/home");
      } else {
        alert(data.message || "Login Failed :(");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again later.");
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="main">
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="login-email">Email:</label>
              <br />
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="login-password">Password:</label>
              <br />
              {showPassword ? (
                <input
                  type="text"
                  id="login-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              ) : (
                <input
                  type="password"
                  id="login-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              )}
            </div>
            <div>
              <input type="checkbox" onClick={toggleShowPassword} />
              Show Password
            </div>
            <div>
              <input type="submit" />
            </div>
            <div className="login-link">
              <p>
                Not a User?
                <NavLink className="login-link" to="/register">
                  Register
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
