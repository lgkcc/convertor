import classes from "./userInfo.module.css"
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {updateProfile} from "@firebase/auth";
const UserInfo = (props) => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [profile, setProfile] = useState([])
    const handleChange = event => (setName(event.target.value))
    const update = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: '',
            email: '',
        }).then(()=>{
            setProfile(`update on ${name}`)
        }).catch((error) =>{
            //error
        })
    }

    return(
        <div className={classes.userInfo}>
            <img width='200px' src={user.photoURL} alt="123"/>
            <span className={classes.userText}>Имя: {user.displayName}</span>
            <span className={classes.userText}>Email: {user.email}</span>
            <input type="text" value={name} onChange={handleChange}  placeholder='Введите имя, которое хотите установить '/>
            <button onClick={() => update()}>Обновить имя пользователя</button>
        </div>
    )
}

export default UserInfo