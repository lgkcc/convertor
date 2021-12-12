import {useContext, useEffect, useState} from "react";
import classes from "./profile.module.css";
import PanelLogin from "./panel/panel";
import Info from "./info/info";
import {Context} from "../../../index";
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";

const Profile = () => {
    const {auth} = useContext(Context)

    const loginGoogle = async () => {
        try{
            const provider = new firebase.auth.GoogleAuthProvider()
            const {user} = await auth.signInWithPopup(provider)
            if (user) {
                setExit(false)
            }
            else {
                setExit(true)
            }
        }
        catch (e){

        }
    }
    const [exit, setExit] = useState(false)
    const exitPanel = () => {
        setExit(!exit)
    }

    useEffect(() => {
        setExit(JSON.parse(window.sessionStorage.getItem('exit')));
    }, []);
    useEffect(() => {
        window.sessionStorage.setItem('exit', exit);
    }, [exit]);
    return (
        <nav className={classes.profile__nav}>
            <Info exitPanel={exitPanel} />
            <PanelLogin exit={exit} exitPanel={exitPanel}  loginGoogle={loginGoogle} />
        </nav>
    )
}
export default Profile