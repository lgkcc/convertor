import classes from "./nav.module.css"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../../index";
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";

const linkActive = ({isActive}) => isActive ? `${classes.nav__item} ${classes.active}` : `${classes.nav__item}`
const linkActiveMobile = ({isActive}) => isActive ? `${classes.nav__item} ${classes.mobile} ${classes.active}` : `${classes.nav__item} ${classes.mobile}`
const Nav = (props) => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const loginGoogle = async () => {
        try{
            const provider = new firebase.auth.GoogleAuthProvider()
            const {user} = await auth.signInWithPopup(provider)
            props.handle()
        }
        catch (e){
        }
    }
    const signOut = () => {
        auth.signOut()
        props.handle()
    }
    return(
        <nav className={props.toggle ? `${classes.nav__link}` : `${classes.nav__link} ${classes.active}`}>
            <NavLink onClick={props.handle} to="/" className={linkActive}>Конвертер</NavLink>
            <NavLink onClick={props.handle} to="/coursevalut" className={linkActive}>Курсы валют</NavLink>
            <NavLink onClick={props.handle} to="/coursekripti" className={linkActive}>Курсы криптовалют</NavLink>
            <NavLink onClick={props.handle} to="/profile" className={linkActiveMobile}>Профиль</NavLink>
            {user
                ?
                <NavLink onClick={signOut} to="/coursekripti" className={linkActiveMobile `${classes.mobile}`}>Выйти</NavLink>
                :
                <NavLink onClick={loginGoogle} to="/coursekripti" className={linkActiveMobile `${classes.mobile}`}>Войти</NavLink>
            }

        </nav>
    )
}

export default Nav