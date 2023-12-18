import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { StepperContext } from '../../contexts/StepperContext'

const Seo = () => {
    const {seo,setSeo}=useContext(StepperContext)
    const handleSeo =(e)=>{
        setSeo(e.target.value)
    }
  return (
    <div className="seo">
        <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        تحسين اداء اعلانك

        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
   <textarea value={seo} name="seo" placeholder='optional' onChange={handleSeo} cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Seo
