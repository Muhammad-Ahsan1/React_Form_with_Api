import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div>
        <nav className={styles["main-nav"]}>
            <div className={styles["nav-left"]}>
  
            </div>
            <div className={styles["nav-right"]}>
                <div>
                    <NavLink style={({isActive}) => {
                        return {color: isActive ? 'lightCoral' : '', textDecoration: isActive ? 'underline' : ''}
                    }} to='/login'>Login</NavLink>
                </div>
                <div>
                    <NavLink style={({isActive}) => {
                        return {color: isActive ? 'lightCoral' : '', textDecoration: isActive ? 'underline' : ''}
                    }} to='/register'>Register</NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
