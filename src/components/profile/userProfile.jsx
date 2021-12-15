import classes from "./profile.module.css"
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import UserInfo from "./userInfo/userInfo";
const UserProfile = (props) => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return(
        <div className={classes.profile}>
            <UserInfo />
        </div>
    )
}

export default UserProfile