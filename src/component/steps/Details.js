import { AppContext } from "../../App";
import { StepperContext, useStepperContext } from "../../contexts/StepperContext";
import { useContext, useState } from "react";
import './steps.css'
export default function Details() {
  const { userData, setUserData } = useStepperContext();
  const { logo, setLogo } = useContext(StepperContext);
  
 
  const handleLogoChange = (event) => {
    const file = event.target.files[0];
if (file && file.type.startsWith('image/')) {
  setLogo(file);
} else {
  setLogo(null);
}
};


  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
         صورة اللوجو
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
           type="file"   onChange={handleLogoChange} required 
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
 
    </div>
  );
}

{/* <div className="w-full mx-2 flex-1">
<div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
  product photos
</div>
<div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
  
  <input type="file" onChange={handlePhotoSelect} />

</div>

</div> */}