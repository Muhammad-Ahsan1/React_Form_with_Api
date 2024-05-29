import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://usmanlive.com/wp-json/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        alert("Registeration Successful!!!!");
        navigate("/");
      } else {
        alert(data.message || "Registeration Failed :(");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again later.");
    }
  };

  return (
    <>
      <Nav />
      <div className="main">
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="register-name">Name:</label>
              <br />
              <input
                type="text"
                id="register-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="register-email">Email:</label>
              <br />
              <input
                type="email"
                id="register-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="register-password">Password:</label>
              <br />
              {showPassword ? (
                <input
                  type="text"
                  id="register-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              ) : (
                <input
                  type="password"
                  id="register-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              )}
            </div>
            <div>
              <input type="checkbox" onClick={toggleShowPassword} />
              Show Password
            </div>
            <div>
              <input type="submit" value="Register" />
            </div>
            <div className="login-link">
              <p>
                Already a user?{" "}
                <NavLink className="login-link" to="/">
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
