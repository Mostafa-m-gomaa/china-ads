import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  {  createContext } from 'react';
import React, { useContext } from 'react';
import NavB from './component/navbar/Nav';
import Home from './component/Home/Home';
import Login from './component/login/Login';
import { MdOutlineDoneOutline} from 'react-icons/md';
import {BiError} from 'react-icons/bi';
import Form from './component/form/Form';
import SpCard from './component/specialCard/SpCard';
import Profile from './component/profile/Profile';
import MyFav from './component/myFav/MyFav';







export const AppContext = createContext();

function App() {
const [loader,setLoader]=useState(false)
const [showSuccess, setShowSuccess] = useState(false);
const [showError, setShowError] = useState(false);
const [login,setLogin]=useState(false)
const [token,setToken]=useState("")
const [showMessage,setShowMessage]=useState(false)
const [message,setMessage]=useState("hello") 


const displayMessage =(msg)=>{
  setMessage(msg)
  setShowMessage(true)
}



 

useEffect(()=>{
setToken(sessionStorage.getItem("token"))
setLogin(sessionStorage.getItem("login"))
},[login])
useEffect(() => {
  let timeout;
  if (showError) {
    timeout = setTimeout(() => {
      setShowError(false);
    }, 3000);
  }
  return () => clearTimeout(timeout);
}, [showError]);
useEffect(() => {
  let timeout;
  if (showError) {
    timeout = setTimeout(() => {
      setShowError(false);
    }, 3000);
  }
  return () => clearTimeout(timeout);
}, [showError]);
useEffect(() => {
  let timeout;
  if (showMessage) {
    timeout = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }
  return () => clearTimeout(timeout);
}, [showMessage]);

  return (
    <AppContext.Provider  value={{displayMessage,token,setToken,loader,setLoader,showError,setShowError ,showSuccess,setShowSuccess,login,setLogin}} >    
 <div className='App'>
 {showSuccess ?  <div className='success'>
          Done <MdOutlineDoneOutline />
        </div>
       :null}
      {showError?  <div className='wrong'>
          try again <BiError />
        </div>
       :null}
       {showMessage ?<div className='message'>{message}</div>:null}

{loader ? <div className='loader-cont'><div className='circle'>
  <svg height="108px" width="108px" viewBox="0 0 128 128" class="loader">
    <defs>
      <clipPath id="loader-eyes">
        <circle transform="rotate(-40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye1"></circle>
        <circle transform="rotate(40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye2"></circle>
      </clipPath>
      <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
        <stop stop-color="#000" offset="0%"></stop>
        <stop stop-color="#fff" offset="100%"></stop>
      </linearGradient>
      <mask id="loader-mask">
        <rect fill="url(#loader-grad)" height="128" width="128" y="0" x="0"></rect>
      </mask>
    </defs>
    <g stroke-dasharray="175.93 351.86" stroke-width="12" stroke-linecap="round">
      <g>
        <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(193,90%,50%)"></rect>
        <g stroke="hsl(193,90%,50%)" fill="none">
          <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
          <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
        </g>
      </g>
      <g mask="url(#loader-mask)">
        <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(223,90%,50%)"></rect>
        <g stroke="hsl(223,90%,50%)" fill="none">
          <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
          <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
        </g>
      </g>
    </g>
  </svg>
</div></div> :null}

  
<NavB />

<Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/ad-form" element={<Form/>} />
     <Route path="/profile" element={<Profile/>} />
     <Route path="/my-favourite" element={<MyFav/>} />
      <Route path='card/:cardId' element={<SpCard />} />
      </Routes>

 </div>
 </AppContext.Provider>

  
  
  );
}

export default App;
