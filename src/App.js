import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Convertor from "./components/convertor/main";
import Course from "./components/coursevalute/main";
import Crypto from "./components/coursecrypto/main";
import {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "./index";
import UserProfile from "./components/profile/userProfile";
import IsUser from "./components/isUser/isUser";
import Loader from "./components/header/profile/panel/loader/loader";
function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        console.log('Загрузка')
        return <Loader />
    }
    else if (error){
        console.log('ошибка')
    }
    else {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path='/' element={<Convertor />}/>
                        <Route path='/coursevalut' element={<Course />}/>
                        <Route path="/coursekripti" element={<Crypto />}/>
                        {user ? <Route path="/profile" element={<UserProfile />} /> : <Route path="/profile" element={<IsUser />} />}
                        <Route path="/profile" element={<UserProfile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
