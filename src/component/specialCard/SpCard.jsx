import React, { useEffect, useState } from 'react'
import './spCard.css'
import { useParams } from 'react-router-dom'
import {GrLocation } from 'react-icons/gr';
import {TbWorld } from 'react-icons/tb';
import {AiOutlineMail } from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsFacebook} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';

const SpCard = () => {
const param =useParams()
const [ad,setAd]=useState({})

useEffect(()=>{
fetch("https://api3.sdcbm.com/api/show/ad/"+param.cardId)
.then(res=>res.json())
.then(data=>setAd(data.ad))
},[])

  return (
    <div className="sp-card">
        <div className="container">
            <div className="first">
              <div className="left">
              <div className="name">{ad.comp_name}</div>
              <div className="tag">{ad.comp_tagline}</div>
              <div className="address"> <GrLocation/> {ad.physical_add}</div>
              <div className="desc">{ad.comp_desc}</div>

              </div>
              <div className="right">
                <img src={"https://api3.sdcbm.com/storage/" +ad.logo} alt="" />
                <a target='_blank' href={ad.website}>website <TbWorld/></a>
                <a target='_blank' href={`mailto:${ad.email_add}`}> mail <AiOutlineMail /></a>
                <a target='_blank' href={ad.whatsapp_naumber}> <IoLogoWhatsapp />  { ad.whatsapp_naumber} </a>
                {ad.social_links && ad.social_links.map((soc) => {
  return (
    <div className="lnks">
      <a target='_blank' href={soc.facebook}> <BsFacebook/> </a>
      <a target='_blank' href={soc.instgram}> <FiInstagram/></a>
      <a target='_blank' href={soc.twitter}> <AiOutlineTwitter/></a>
      <a target='_blank' href={soc.linkedin}> <BsLinkedin /></a>
    </div>
  )
})}
              
              

              </div>
            </div>
            <div className="second">
  {ad.images && ad.images.map((img) => {
    return <img src={"https://api3.sdcbm.com/storage/" + img.image} key={img.id} />;
  })}
</div>
        </div>
    </div>
  )
}

export default SpCard
