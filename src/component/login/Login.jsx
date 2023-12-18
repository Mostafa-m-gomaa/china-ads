import React, { useContext, useState } from 'react'
import './login.css'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    // start variables

    const history = useNavigate()
    const {loader,setLoader}=useContext(AppContext)
    const {login,setLogin}=useContext(AppContext)
    const {showError,setShowError}=useContext(AppContext)
    const {showSuccess,setShowSuccess}=useContext(AppContext)
    const {displayMessage}=useContext(AppContext)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const [loginEmail,setLoginEmail]=useState("")
    const[loginPassword,setLoginPassword]=useState("")

    // start functions 

    const handleName=(e)=>{
    setName(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handlephone=(e)=>{
    setPhone(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}
const handleLoginEmail =(e)=>{
    setLoginEmail(e.target.value)
}
const handleLoginPassword =(e)=>{
    setLoginPassword(e.target.value)
}

const handleRegister =async (e)=>{
    e.preventDefault()
    setLoader(true)

    const formData =new FormData()

    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('password',password)

    try{
        const response = await  fetch("https://api3.sdcbm.com/api/register" ,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json());
        if(response.status=="Success"){
            setLoader(false)
            // setShowSuccess(true)
            displayMessage(response.status)
            console.log(response)
        }
        else{
            setLoader(false)
           
            displayMessage(response.errors.error)
            console.log(response)
        }
    }
    catch{
        setLoader(false)
    }

   
}
const handleLogin =async (e)=>{
    e.preventDefault()
    setLoader(true)

    const formData =new FormData()

    formData.append('email',loginEmail)
    formData.append('password',loginPassword)
 

    try{
        const response = await  fetch("https://api3.sdcbm.com/api/login" ,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json());
        if(response.status=="Success"){
            setLoader(false)
            // console.log(response)
            setLogin(true)
            sessionStorage.setItem("token",response.token)
            sessionStorage.setItem("login",true)
            sessionStorage.setItem("userName",response.user.name)
            sessionStorage.setItem("userId",response.user.id)
            history("/")
        }
        else{
            setLoader(false)
            setShowError(true)
            console.log(response)
            
        }
    }
    catch{
        setLoader(false)
    }

   
}


  return (
  <div className="login-main">
    <div className="container">
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="login">
				<form className="form" onSubmit={handleLogin}>
					<label for="chk" aria-hidden="true">تسجيل الدخول</label>
					<input className="input" value={loginEmail} onChange={handleLoginEmail} type="email" name="email" placeholder="Email" required="" />
					<input className="input" value={loginPassword} onChange={handleLoginPassword} type='password' name="pswd" placeholder="Password" required="" />
					<button type='submit'>تسجيل الدخول</button>
				</form>
			</div>

      <div className="register">
				<form className="form" onSubmit={handleRegister}>
					<label for="chk" aria-hidden="true">انشاء حساب </label>
					<input className="input" value={name} onChange={handleName} type="text" name="txt" placeholder="اسم المستخدم" required="" />
					<input className="input" value={email} onChange={handleEmail} type="email" name="email" placeholder="ايميل" required="" />
					<input className="input" value={phone} onChange={handlephone} type="text" name="phone" placeholder="رقم الهاتف" required="" />
					<input className="input" value={password} onChange={handlePassword} type="password" name="pswd" placeholder="كلمة السر" required="" />
					<button type='submit'>تسجيل</button>
				</form>
			</div>
	</div>
    </div>
  </div>
  )
}

export default Login
