import classes from "./info.module.css";
import Loader from "../panel/loader/loader";
import {useContext} from "react";
import {Context} from "../../../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Info = (props) => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    console.log(user)
    const signOut = () => {
        auth.signOut()
        console.log('Выход выполнен')
    }
    if (loading) {
        console.log('Загрузка')
        return <Loader />

    }
    else if (error){
        console.log('ошибка')
    }
    else if (user) {
        return (
            <div className={classes.flex}>
                <div className={classes.profile__info}>
                    <div className={classes.profile__profile}>
                    <span className={`material-icons ${classes.material_fix}`}>
                        account_circle
                    </span>
                        <span>Профиль</span>
                    </div>
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