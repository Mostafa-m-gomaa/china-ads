import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { AppContext } from '../../App'

const Verify = () => {
    const {loader,setLoader}=useContext(AppContext)
    const {displayMessage}=useContext(AppContext)
    const {verifyFile,setVerifyFile}=useContext(StepperContext)
    const {country ,setCountry}=useContext(StepperContext)
    const {city,setCity}=useContext(StepperContext)
    const {subCategory,setSuCategory}=useContext(StepperContext);
    const {compName,setCompName}=useContext(StepperContext)
    const {compTagline,setCompTagline}=useContext(StepperContext)
    const {brief,setBrief}=useContext(StepperContext)
    const {products,setProducts}=useContext(StepperContext)
    const {logo, setLogo} = useContext(StepperContext);
    const {photos, setPhotos} = useContext(StepperContext);
    const {whatsApp,setWhatsapp}=useContext(StepperContext)
    const {Email,setEmail}=useContext(StepperContext)
    const {physicalAddress,setPhysicalAddress}=useContext(StepperContext)
    const {Website,setWebsite}=useContext(StepperContext)
    const {facebook,setFacebook}=useContext(StepperContext)
    const {twitter,setTwitter}=useContext(StepperContext)
    const {linkedIn,setLinkedIn}=useContext(StepperContext)
    const {instagram,setInstagram}=useContext(StepperContext)
    const {plan,setPlan}=useContext(StepperContext)
    const {canPay,setCanPay}=useContext(StepperContext)
    const {seo,setSeo}=useContext(StepperContext)
    const {token,setToken}=useContext(AppContext)

    const handleVerifyChange = (event) => {
        const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setVerifyFile(file);
    } else {
      setVerifyFile(null);
    }
    };



    const  confirmClick = async (e) => {
      setLoader(true)
      const formData = new FormData();
      photos.forEach((image, index) => {
        formData.append(`images[]`, image);
      });
      formData.append('subcateg_id', subCategory);
      formData.append('country_name',country);
      formData.append('city_name', city);
      formData.append('comp_name', compName);
      formData.append('comp_tagline',compTagline);
      formData.append('comp_desc', brief);
      formData.append('main_products',products);
      formData.append('seo_paragraph', seo);
      formData.append('logo', logo, logo.name);
      formData.append('whatsapp_naumber', whatsApp);
      formData.append('email_add',Email);
      formData.append('physical_add', physicalAddress);
      formData.append('plan', plan);
      // formData.append('images', photos);
      formData.append('facebook', facebook);
      formData.append('twitter', twitter);
      formData.append('linkedin', linkedIn);
      formData.append('instgram', instagram);
      formData.append('website', Website);
      formData.append('verify_file', verifyFile);
      try {
        const response = await fetch('https://api3.sdcbm.com/api/store/ad', {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${token}`
          }
      
        }).then(res=>res.json());
        if (response.status=="stored successfully") {
         setLoader(false)
          displayMessage(response.status)
        } else {
          console.log(response)
          displayMessage(response.errors.error)
          setLoader(false)
        }
      } catch (error) {
        console.log(error);
        setLoader(false)
       
      }
    }
  return (
    <div className="verify">
  

<button
      onClick={confirmClick}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        تأكيد
      </button>
    </div>
  )
}

export default Verify
