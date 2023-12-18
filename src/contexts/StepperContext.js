import {createContext,useContext,useState} from 'react'
import StepperControl from '../component/StepperControl';
export const StepperContext=createContext();


export function UseContextProvider({children}){
const [userData,setUserData]=useState("");
const [country ,setCountry]=useState(" ")
const [city,setCity]=useState("")
const [category,setCategory]=useState("")
const [subCategory,setSuCategory]=useState("")
const [compName,setCompName]=useState("")
const [compTagline,setCompTagline]=useState("")
const [brief,setBrief]=useState("")
const [products,setProducts]=useState("")
const [logo, setLogo] = useState(null);
const [photos, setPhotos] = useState([]);
const [whatsApp,setWhatsapp]=useState("")
const [Email,setEmail]=useState("")
const [physicalAddress,setPhysicalAddress]=useState("")
const [Website,setWebsite]=useState("")
const [facebook,setFacebook]=useState("")
const [twitter,setTwitter]=useState("")
const [linkedIn,setLinkedIn]=useState("")
const [instagram,setInstagram]=useState("")
const [plan,setPlan]=useState(0)
const [canPay,setCanPay]=useState(false)
const [seo,setSeo]=useState("")
const [verifyFile,setVerifyFile]=useState(null)

return(
  <StepperContext.Provider value={{verifyFile,setVerifyFile,seo,setSeo,canPay,setCanPay,plan,setPlan,facebook,setFacebook,twitter,setTwitter,linkedIn,setLinkedIn,instagram,setInstagram,whatsApp,setWhatsapp,Email,setEmail,physicalAddress,setPhysicalAddress,Website,setWebsite,photos,setPhotos,logo,setLogo,userData,setUserData,country,setCountry,city,setCity,category,setCategory,subCategory,setSuCategory,compTagline,setCompTagline,compName,setCompName,brief,setBrief,products,setProducts}}>
  {children}
  
  </StepperContext.Provider>
)
}
export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}