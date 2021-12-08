import {useContext, useEffect, useState} from "react";
import classes from "./profile.module.css";
import PanelLogin from "./panel/panel";
import Info from "./info/info";
import {Context} from "../../../index";
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";

const Profile = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const loginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        if (user) {
            setSystem(true)
            setExit(false)
        } else{
            console.log('Не удача')
        }
    }

    const [exit, setExit] = useState(false)
    const exitPanel = () => {
        setExit(!exit)
    }
    const [system, setSystem] = useState(false)
    const systemLogin = () => {
        setSystem(!system)
        setExit(false)
    }
    useEffect(() => {
        if (system === true) {
            console.log('Вход выполнен!')
        }
    }, [system])
    useEffect(() => {
        setExit(JSON.parse(window.localStorage.getItem('exit')));
        setSystem(JSON.parse(window.localStorage.getItem('system')));
    }, []);
    useEffect(() => {
        window.localStorage.setItem('exit', exit);
    }, [exit]);
    useEffect(() => {
        window.localStorage.setItem('system', system);
    }, [system]);
    return (
        <nav className={classes.profile__nav}>
            <Info exitPanel={exitPanel} system={system} systemLogin={systemLogin} />
            <PanelLogin exit={exit} exitPanel={exitPanel} systemLogin={systemLogin}  loginGoogle={loginGoogle} />
        </nav>
    )
}
export default Profile