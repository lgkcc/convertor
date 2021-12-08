import classes from "./nav.module.css"
import {NavLink} from "react-router-dom";

const linkActive = ({isActive}) => isActive ? `${classes.nav__item} ${classes.active}` : `${classes.nav__item}`

const Nav = (props) => {
    return(
        <nav className={props.toggle ? `${classes.nav__link}` : `${classes.nav__link} ${classes.active}`}>
            <NavLink onClick={props.handle} to="/" className={linkActive}>Конвертер</NavLink>
            <NavLink onClick={props.handle} to="/coursevalut" className={linkActive}>Курсы валют</NavLink>
            <NavLink onClick={props.handle} to="/coursekripti" className={linkActive}>Курсы криптовалют</NavLink>
        </nav>
    )
}

export default Nav