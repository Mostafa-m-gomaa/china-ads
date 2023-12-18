
import { useContext, useEffect } from 'react'
import Ads from '../ads/Ads'
import Master from '../master/Master'
import './home.css'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history =useNavigate()

  const {login,setLogin}=useContext(AppContext)
  useEffect(()=>{
    if(login==true){
      window.onpopstate = () => {
        history("/")
      };
    }
else{
  console.log("ahmed")
}
  },[])

  return (
  <div className="home">
    {/* <Master /> */}
    <Ads />
  </div>
  )
}

export default Home
