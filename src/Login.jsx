import { useState } from "react";
import Nav from "./Nav";
import { NavLink, useNavigate } from "react-router-dom";
let token;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log(data)
      if (res.ok) {
        alert("Login Successful!!!!");
      } else {
        alert(data.message || "Login Failed :(");
      }
      token = data.token;
      localStorage?.setItem('login', token)
      let login = localStorage.getItem('login')
    if(login){
      navigate('/')
    }
    } catch (error) {
      console.error("Error loging in user:", error);
      alert("Failed to login. Please try again later.");
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
