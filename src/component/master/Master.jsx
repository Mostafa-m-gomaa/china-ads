import './master.css'
import React, { useEffect, useState } from 'react'

const Master = () => {
    const [masterAd,setMasterAd]=useState([])
    useEffect(()=>{
fetch("https://api3.sdcbm.com/api/showall/masterAD")
.then(res=>res.json())
.then(data=>setMasterAd(data.data))
    },[])
  return (
   <div className="master">
    <div className="container">
        {masterAd.map((ad)=>{
            return(
                <div className="ad" key={ad.id}>
                    <img src={"https://api3.sdcbm.com/storage/"+ad.logo} alt="" />
                    <div className="med">
                        <span>{ad.comp_name}</span>
                        <span>{ad.title}</span>
                        <button>

                        <a href={ad.web_link}>visit</a>
                        </button>
                    </div>
                    <div className='des'>{ad.Desc}</div>

                </div>
            )
        })}
    </div>
   </div>
  )
}

export default Master
