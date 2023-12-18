import React, { useContext, useEffect, useState } from 'react'
import './profile.css'
import { AppContext } from '../../App'

const Profile = () => {
const [ads,setAds]=useState([])
const [numForAd,setNumForAd]=useState(1)
const {token,setToken}=useContext(AppContext)
const {displayMessage}=useContext(AppContext)


const deleteAd =(id)=>{
    fetch("https://api3.sdcbm.com/api/destroy/ad/"+id,{
      method:"DELETE",
      headers:{
        'Authorization': `Bearer ${token}`
      }
  
    })
    .then(res=>res.json())
    .then(data=>{ displayMessage(data.status)
        
    })
  
  
    setNumForAd(numForAd+1)
  }
    useEffect(()=>{
        let id = sessionStorage.getItem("userId")
        let token =sessionStorage.getItem("token")
        fetch("https://api3.sdcbm.com/api/showMyAds",{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setAds(data.ads))
    },[numForAd])
  return (
    <div className="profile">
        <div className="container">
            <h3>اعلاناتي</h3>
                
            <div className="my-ads">
{ads.map((ad)=>{
    return(

        <div class="card card-5" key={ad.id}>
  <div class="card__icon">🏆</div>
  <p class="card__exit"  onClick={()=>deleteAd(ad.id)}>x</p>
  <div class="text"> {ad.comp_name} : اسم الشركة</div>
  <div class="text"> {ad.state} : حالة الاعلان</div>

</div>
      
    )
})}
            </div>
        </div>
    </div>
  )
}

export default Profile


