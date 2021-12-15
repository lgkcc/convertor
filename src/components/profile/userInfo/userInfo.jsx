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
    //const [photo, setPhoto] = useState([])
    const nameChange = event => (setName(event.target.value))
    //const photoChange = event => (setPhoto(event.target.value))
    const update = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(()=>{
            setProfile(`update on ${name}`)
        }).catch((error) =>{
            //error
        })
    }

    return(
        <div className={classes.userInfo}>
            <img width='200px' src={user.photoURL} alt="Нету фото"/>
            <span className={classes.userText}>Имя: {user.displayName}</span>
            <span className={classes.userText}>Email: {user.email}</span>
            <input type="text" onChange={nameChange}  placeholder='Введите имя, которое хотите установить'/>
            {/*<input type="text" onChange={photoChange}  placeholder='Вставьте ссылку на фото, которое хотите установить'/>*/}
            <button onClick={() => update()}>Обновить имя</button>
        </div>
    )
}

export default UserInfo