import { useContext, useEffect, useState } from "react";
import { StepperContext, useStepperContext } from "../../contexts/StepperContext";
import '../../index.css'
import { countries } from "../../countries+states";

export default function Account() {
  const { category, setCategory } = useContext(StepperContext);
  const {country ,setCountry} = useContext(StepperContext);
  const { city,setCity } = useContext(StepperContext);
  const { subCategory,setSuCategory } = useContext(StepperContext);
  const { compName,setCompName} = useContext(StepperContext);
  const { compTagline,setCompTagline } = useContext(StepperContext);
  const { brief,setBrief } = useContext(StepperContext);
  const { products,setProducts } = useContext(StepperContext);
  const [categ,setCateg]=useState([])
  const [subCateg,setSubCateg]=useState([])
  const [id,setId]=useState(0)
  // const [country ,setCountry]=useState(" ")



  const handleCountry =(e)=>{
setCountry(e.target.value)
  }
  const handleCity =(e)=>{
setCity(e.target.value)
  }
  const handleSubCategory =(e)=>{
setSuCategory(e.target.value)
  }
  const handleCompanyName =(e)=>{
setCompName(e.target.value)
  }
  const handleCompanyTagline =(e)=>{
setCompTagline(e.target.value)
  }
  const handleBrief =(e)=>{
setBrief(e.target.value)
  }
  const handleProducts =(e)=>{
setProducts(e.target.value)
  }
  const clickOnCateg =(event)=>{  
    
      setId(event.target.value)
      console.log(subCateg)
        }
  useEffect(()=>{
    fetch("https://api3.sdcbm.com/api/showall/categ")
    .then(res=>res.json())
    .then(data=>setCateg(data))
  },[])
  useEffect(()=>{
    fetch("https://api3.sdcbm.com/api/getrelated/categ/"+id)
    .then(res=>res.json())
    .then(data=>{
      setSubCateg(data.subcategories)
      
    })
  },[id])
  console.log(compName)
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          الدولة
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
     <select onChange={handleCountry}>
      <option>اختر الدولة</option>
      {countries.map((co,ind)=>{
        return(
          <option value={co.name} key={ind}>{co.name}</option>
        )
      })}
     </select>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          المدينة
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
        <select onChange={handleCity}>
  <option>--اختار مدينة --</option>
  {countries.map((co,ind)=>
    { 
      if (co.name === country) {
        return co.states.map((state,index)=>(
          <option value={state.name} key={index}>{state.name}</option>
        ))
      } else {
        return null;
      }
    })}
</select>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          اختار الفئة
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
     <select onChange={clickOnCateg} >
      <option>--اختر الفئة--</option>
      {categ.map((cat)=>{
        return (
          <option value={cat.id} key={cat.id}>{cat.Category_name}</option>
        )
      })}
    
     </select>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
         اختار الفئة الفرعية
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
     <select onChange={handleSubCategory}>
      <option>-- اختار الفئة الفرعية--</option>
      {subCateg.map((sub)=>{
        return (
          <option value={sub.id} key={sub.id}>{sub.SubCateg_name}</option>
        )
      })}
    
     </select>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          اسم الشركة
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleCompanyName}
            value={compName}
            
            placeholder=""
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          العنوان الوصفي للشركة
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleCompanyTagline}
            value={compTagline}
            
            placeholder=""
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          عمل الشركة باختصار
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleBrief}
            value={brief}
            
            placeholder=""
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          المنتجات الاساسية
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleProducts}
            value={products}
            
            placeholder=""
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
}