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

function App() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    //console.log(user)
  return (
      <BrowserRouter>
          <div className="container">
              <Header />
              <Routes>
                  <Route path='/' element={<Convertor />}/>
                  <Route path='/coursevalut' element={<Course />}/>
                  <Route path="/coursekripti" element={<Crypto />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
