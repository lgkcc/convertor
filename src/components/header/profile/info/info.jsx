import classes from "./info.module.css";
import Loader from "../panel/loader/loader";
import {useContext} from "react";
import {Context} from "../../../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {NavLink} from "react-router-dom";

const Info = (props) => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user)
    const signOut = () => {
        auth.signOut()
        console.log('Выход выполнен')
    }
    if (user) {
        return (
            <div className={classes.flex}>
                <div className={classes.profile__info}>
                    <NavLink to="/profile" className={classes.profile__profile}>
                        <span className={`material-icons ${classes.material_fix}`}>
                        account_circle
                    </span>
                        <span>Профиль</span>
                    </NavLink>
                    <div onClick={signOut} className={classes.profile__exit}>
                    <span className={`material-icons ${classes.material_fix}`}>
                    exit_to_app
                    </span>
                        <span>Выход</span>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className={classes.flex}>
                <div onClick={props.exitPanel}
                     className={classes.profile__login}>
                    Вход
                </div>
            </div>
        )
    }

}
export default Info