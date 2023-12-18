import React, { useContext, useEffect, useState } from 'react'
import './ads.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { AiFillHeart} from 'react-icons/ai';
import { AppContext } from '../../App';



const Ads = () => {
    const [categories,setCategories]=useState([])
    const [sub,setSub]=useState([])
    const [selectedCategory,setSelectedCategory]=useState(0)
    const [ads,setAds]=useState([])
    const [modalShow, setModalShow] = useState(false);
    const [num,setNum]=useState(0)
    const {token,setToken}=useContext(AppContext)
    const {login,setLogin}=useContext(AppContext)
    const [favourites,setFavourites]=useState([])
    const [countries,setCountries]=useState([])
    // var idsArray=favourites.map((object) => object.ad_id)
    const [idsArray,setIdsArray]=useState([])
    const [numForFav,setNumForFav]=useState(0)
    const [country,setCountry]=useState(" ")
    const [cityId,setCityId]=useState(null)
    const [masterAd,setMasterAd]=useState([])
    // const idsArray = []
     
const handleCityId =(e)=>{
  setCityId(e.target.value)
  console.log(cityId)
}
const handleCountry =(e)=>{
  setCountry(e.target.value)
}
const addToFavourite =(id)=>{
  fetch("https://api3.sdcbm.com/api/addToFavourites/"+id,{
    headers:{
      'Authorization': `Bearer ${token}`
    }

  })
  .then(res=>res.json())
  .then(data=>{ console.log(data) 
  })


  setNumForFav(numForFav+1)
}

const showCat =()=>{
  document.querySelector(".ads .left").classList.toggle("left-show")
}
    const clickOnCateg =(id)=>{  
      document.querySelector(".ads .left").classList.remove("left-show")
setSelectedCategory(id)

        fetch("https://api3.sdcbm.com/api/getrelated/categ/"+id)
        .then(res=>res.json())
        .then(data=>{
          setSub(data.subcategories)
          setAds(data.ads)
          
        })
    }
    const clickOnSubCateg =(id)=>{  


        fetch("https://api3.sdcbm.com/api/getrelatedSub/subcateg/"+id)
        .then(res=>res.json())
        .then(data=>{
          
          setAds(data.ads)
          
        })
    }

    const clickAllButton =()=>{
      setNum(num+1)
      setSelectedCategory(0)
      setSub([])
    }
    const clickSubAllButton =()=>{
      fetch("https://api3.sdcbm.com/api/getrelated/categ/"+selectedCategory)
      .then(res=>res.json())
      .then(data=>setAds(data.ads))
    }
    useEffect(()=>{
fetch("https://api3.sdcbm.com/api/showall/categ")
.then(res=>res.json())
.then(data=>setCategories(data))
fetch("https://api3.sdcbm.com/api/showallDesc/ads")
.then(res=>res.json())
.then(data=>setAds(data.ads))

    },[num])
    useEffect(()=>{
      

        let toke=sessionStorage.getItem("token")
        fetch("https://api3.sdcbm.com/api/showFavourites",{
          headers:{
            'Authorization': `Bearer ${toke}`
          }
      
        })
        .then(res=>res.json())
        .then(data=>{
          setFavourites(data.ads)
          setIdsArray(data.ads.map((object) => object.ad_id));
        })
      
    },[numForFav])
    useEffect(()=>{
      

    
        fetch("https://api3.sdcbm.com/api/showCountries")
        .then(res=>res.json())
        .then(data=>{
        setCountries(data)
        })
      
    },[])

    useEffect(()=>{
      fetch("https://api3.sdcbm.com/api/showall/masterAD")
      .then(res=>res.json())
      .then(data=>setMasterAd(data.data))
          },[])

    
  return (
<div className="ads">
    <div className="container">
      <div className="cat-show" onClick={showCat} >الفئات</div>
    
{/* start right side //////////////////////////////////////////////////////////////////// */}
      
    <div className="right">

      <div className="top">
        <div>اختر مدينتك</div>
        <select onChange={handleCountry}>
      <option value="">-اختر الدولة</option>
      {countries.map((count)=>{
        return(
          <option value={count.country_name} key={count.id}>{count.country_name}</option>
        )
      })}

        </select>
        <select onChange={handleCityId}>
      <option value="">-اختر المدينة</option>
      {countries.map((co,ind)=>
    { 
      if (co.country_name === country) {
        return co.cities.map((state,index)=>(
          <option value={state.id} key={index}>{state.city_name}</option>
        ))
      } else {
        return null;
      }
    })}

        </select>
      </div>
    <div className="mast">
      {masterAd.map((ad)=>{
        return(
        <a href={ad.web_link} target='_blank' key={ad.id}><img src={"https://api3.sdcbm.com/storage/"+ad.logo} alt="" /></a>
        )
      })}
    </div>

      <div className="down">
      {ads.map((ad)=>
                  ad.plan === 2 ? <div className="card" key={ad.id}>
                  <div className={idsArray.includes(ad.id)?"heart-checked ": "heart"} onClick={()=>addToFavourite(ad.id)}>

                  <AiFillHeart />
                  </div>
                 
                  <img src={"https://api3.sdcbm.com/storage/"+ad.logo} alt="" />
                  
                  <h5>{ad.comp_name}</h5>
                  <div>{ad.comp_tagline}</div>
                  
                 
                  
                  <div>المنتجات الرئيسية</div>
                  <div>{ad.main_products}</div>
                 
                  <div className="cont">
                  <div>{ad.whatsapp_naumber}</div>
                  <Link className='view-button' to={`/card/${ad.id}`}>عرض</Link>
                  
                  </div>
                  
                </div> :null
                )}
      </div>
    </div>

    {/* end right side //////////////////////////////////////////////////////////////////// */}
            {/* start the meduim side  */}


        <div className="med ">

            <div className="top">
                <h4>الفئات الفرعية</h4>
                <div className="sub-categories">
                <label >
                            <input type="radio" onClick={clickSubAllButton} name="sub" />
                            <span>الكل</span>
                          </label>
                    {sub.map((sub)=>{
                        return(
                            <label key={sub.id} onClick={()=>clickOnSubCateg(sub.id)} >
                            <input type="radio" name="sub" />
                            <span>{sub.SubCateg_name}</span>
                          </label>
                        )
                    })}
                </div>
            </div>
            <div className="down">
            {ads.map((ad) => 
  ad.plan === 2 ? null :
  cityId == null ?
    <div className="ad-card" key={ad.id}>
      <div className={idsArray.includes(ad.id) ? "heart-checked" : "heart"} onClick={() => addToFavourite(ad.id)}>
        <AiFillHeart />
      </div>
      <div className="desc">
        <img src={"https://api3.sdcbm.com/storage/" + ad.logo} alt="" />
        <div className="det">
          <h5>{ad.comp_name}</h5>
          <div className='tagline'>{ad.comp_tagline}</div>
        </div>
        <div className="prods">

        <div>{ad.whatsapp_naumber}</div>
        </div>
      </div>
      <div className="cont">
       
        <div className="prods">

<div>المنتجات الرئيسية</div>
<div className='prod'>{ad.main_products}</div>
</div>
        {ad.plan === 1 ? <Link className='view-button' to={`/card/${ad.id}`}>عرض</Link> : null}
      </div>
    </div>
  :
    cityId == ad.city_id ?
      <div className="ad-card" key={ad.id}>
        <div className={idsArray.includes(ad.id) ? "heart-checked" : "heart"} onClick={() => addToFavourite(ad.id)}>
          <AiFillHeart />
        </div>
        <div className="desc">
          <img src={"https://api3.sdcbm.com/storage/" + ad.logo} alt="" />
          <div className="det">
            <h5>{ad.comp_name}</h5>
            <span>{ad.comp_tagline}</span>
          </div>
          <div className="prods">

<div>المنتجات الرئيسية</div>
<div className='prod'>{ad.main_products}</div>
</div>
        </div>
        <div className="cont">
          <div>{ad.whatsapp_naumber}</div>
          {ad.plan === 1 ? <Link className='view-button' to={`/card/${ad.id}`}>عرض</Link> : null}
        </div>
      </div>
    :
      null
)}
                
            </div>
        </div>
            {/* end the meduim side  */}
        
          {/* start the left side ////////////////////////////////////// */}
          <div className="left card">
        <div class="bg">
            <h3>الفئات</h3>
            <form className="cat">
          

{categories.map((cat) => 
  cat.type === "normal" ?   
    <label key={cat.id} onClick={()=>clickOnCateg(cat.id)}>
      <input type="radio" name="radio" checked={cat.id === selectedCategory} />
      <div>{cat.Category_name}</div>
    </label>
    : null
)}

<h3>الفئات المميزة</h3>
{categories.map((cat) => 
  cat.type === "special" ?   
    <label key={cat.id} onClick={()=>clickOnCateg(cat.id)} >
      <input type="radio" name="radio" checked={cat.id === selectedCategory}/>
      <div>{cat.Category_name}</div>
    </label>
    : null
)}
                  <label >
                        <input type="radio" onClick={clickAllButton} name="radio" checked={selectedCategory===0} />
                        <div>الكل</div>
                    </label>
            </form>
        </div>
        <div class="blob"></div>
            
            </div>

            {/* end the left side ////////////////////////////////// */}
    </div>
</div>
  )
}

export default Ads




