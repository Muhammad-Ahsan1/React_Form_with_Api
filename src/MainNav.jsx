import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <div>
      <nav className={styles["main-nav"]}>
        <div className={styles["nav-left"]}>
          <div>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "lightCoral" : "",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
              to="/home"
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "lightCoral" : "",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "lightCoral" : "",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
              to="/services"
            >
              Services
            </NavLink>
          </div>
        </div>
        <div className={styles["nav-right"]}>
          {/* <div>
                    <NavLink style={({isActive}) => {
                        return {color: isActive ? 'lightCoral' : '', textDecoration: isActive ? 'underline' : ''}
                    }} to='/login'>Login</NavLink>
                </div>
                <div>
                    <NavLink style={({isActive}) => {
                        return {color: isActive ? 'lightCoral' : '', textDecoration: isActive ? 'underline' : ''}
                    }} to='/register'>Register</NavLink>
                </div> */}
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
