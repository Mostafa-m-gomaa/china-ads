import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

const Social = () => {
    const {facebook,setFacebook}=useContext(StepperContext)
    const {instagram,setInstagram}=useContext(StepperContext)
    const {linkedIn,setLinkedIn}=useContext(StepperContext)
    const {twitter,setTwitter}=useContext(StepperContext)

    const handleFacebook =(e)=>{
        setFacebook(e.target.value)
    }
    const handleInsta =(e)=>{
        setInstagram(e.target.value)
    }
    const handleLinkedin =(e)=>{
        setLinkedIn(e.target.value)
    }
    const handleTwitter =(e)=>{
        setTwitter(e.target.value)
    }
  return (
   <div className="social">
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
         فيسبوك
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleFacebook}
            value={facebook}
            
            placeholder="facebook url"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        تويتر
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleTwitter}
            value={twitter}
           
            placeholder="twitter"
            type="twxt"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          لينكد ان
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleLinkedin}
            value={linkedIn}
           
            placeholder="linkedin company page url"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          انستاجرام
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleInsta}
            value={instagram}
           
            placeholder="inst"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Social
