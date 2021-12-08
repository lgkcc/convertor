import classes from "./header.module.css"
import {useState} from "react";
import Nav from "./nav/nav";
import Profile from "./profile/profile";
const Header = () => {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle(!toggle)
    }
    const vanClick = () => {
        setToggle(true)
    }
    return(
        <header className={classes.header}>
            <div onClick={handleClick} className={classes.header__burger}>
                <span className={toggle ? `` : `${classes.active}`}>

                </span>
            </div>
            <div className={classes.header__inner}>
                <Nav toggle = {toggle} handle = {vanClick}/>
                <Profile />
            </div>
        </header>
    )
}
export default Header