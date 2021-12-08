import classes from "./info.module.css";
import {useContext} from "react";
import {Context} from "../../../../index";

const Info = (props) => {
    const {auth} = useContext(Context)
    return (
        <div className={classes.flex}>
            <div onClick={props.exitPanel}
                 className={props.system ? `${classes.profile__login} ${classes.none}` : `${classes.profile__login}`}>
                Вход
            </div>
            <div className={props.system ? `${classes.profile__info}` : `${classes.profile__info} ${classes.none}`}>
                <div className={classes.profile__profile}>
                    <span className={`material-icons ${classes.material_fix}`}>
                        account_circle
                    </span>
                    <span>Профиль</span>
                </div>
                <div onClick={props.systemLogin} className={classes.profile__exit}>
                    <span className={`material-icons ${classes.material_fix}`}>
                    exit_to_app
                    </span>
                    <span onClick={() => auth.signOut()}>Выход</span>
                </div>
            </div>
        </div>
    )
}
export default Info