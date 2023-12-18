import { useContext } from "react";
import { StepperContext, useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
 


  const {whatsApp,setWhatsapp}=useContext(StepperContext)
  const {Email,setEmail}=useContext(StepperContext)
  const {physicalAddress,setPhysicalAddress}=useContext(StepperContext)
  const {Website,setWebsite}=useContext(StepperContext)

  const handleWhatsapp =(e)=>{
    setWhatsapp(e.target.value)
  }
  const handleWebsite =(e)=>{
    setWebsite(e.target.value)
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handleAddress =(e)=>{
    setPhysicalAddress(e.target.value)
  }
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          رقم الواتساب
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleWhatsapp}
            value={whatsApp}
            
            placeholder="Whatsapp number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
         عنوان الايميل 
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleEmail}
            value={Email}
           
            placeholder="Email"
            type="email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          عنوان مقر الشركة
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleAddress}
            value={physicalAddress}
           
            placeholder="your address"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          الموقع الالكتروني
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleWebsite}
            value={Website}
           
            placeholder="اذا لم يكن لديك موقع الكتروني تواصل معنا لنوفر لك موقع متميز في اسرع وقت"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}