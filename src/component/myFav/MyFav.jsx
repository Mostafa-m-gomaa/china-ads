import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart} from 'react-icons/ai';
import'./myFav.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App';

const MyFav = () => {
    const [ads,setAds]=useState([])
    const {token,setToken}=useContext(AppContext)
    const [numForFav,setNumForFav]=useState(0)
    const {displayMessage}=useContext(AppContext)


    const removeFromFavourite =(id)=>{
      fetch("https://api3.sdcbm.com/api/removeFromFavourites/"+id,{
        headers:{
          'Authorization': `Bearer ${token}`
        }
    
      })
      .then(res=>res.json())
      .then(data=>{ displayMessage(data.status)
      })
    
    
      setNumForFav(numForFav+1)
    }

    useEffect(()=>{
let token =sessionStorage.getItem("token")

fetch("https://api3.sdcbm.com/api/showFavourites",{
    headers: {
        'Authorization': `Bearer ${token}`
      }
})
.then(res=>res.json())
.then(data=>setAds(data.ads))
    },[numForFav])
  return (
 <div className="my-fav">
    <div className="container">
        <h3>اعلاناتي المفضلة</h3>

        <div className="fav-ads">
        {ads.map((ad)=>
                  ad.ad.plan === 2 ? null : <div className="ad-card" key={ad.id}>
                    <div className="heart" onClick={()=>removeFromFavourite(ad.ad_id)}>

                    <AiFillHeart />
                    </div>
                    <div className="desc">
                    <img src={"https://api3.sdcbm.com/storage/"+ad.ad.logo} alt="" />
                    <div className="det">
                    <h5>{ad.ad.comp_name}</h5>
                    <span>{ad.ad.comp_tagline}</span>
                    
                    </div>
                    <div className="prods">

                    <div>{ad.ad.whatsapp_naumber}</div>
                    </div>
                    </div>
                    <div className="cont">
                   
                    <div className="prods">

<div>المنتجات الرئيسية</div>
<div className='prod'>{ad.ad.main_products}</div>
</div>
                    {ad.ad.plan===1?   <Link className='view-button' to={`/card/${ad.id}`}>عرض</Link>:null}
                    
                    </div>
                    
                  </div>
                )}
        </div>
    </div>
 </div>
  )
}

export default MyFav
