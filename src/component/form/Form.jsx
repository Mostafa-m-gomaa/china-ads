import { useState } from "react";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";
import '../../index.css'
import Account from "../steps/Account";
import Details from "../steps/Details";
import Payment from "../steps/Payment";
import Final from "../steps/Final";
import { UseContextProvider } from "../../contexts/StepperContext";
import './form.css'
import Social from "../steps/Social";
import Pay from "../steps/Pay";
import Seo from "../steps/Seo";
import Verify from "../steps/Verify";
import Photos from "../steps/Photos";

const Form=()=> {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "معلومات الشركة",
    "لوجو الشركة",
    "صور المنتجات",
    "معلومات التواصل",
    "وسائل التواصل الاجتماعي ",
    "سيو",
    "اتمام التسجيل",
    "شكرا لك",
   
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Photos/>;
      case 4:
        return <Payment />;
      case 5:
        return <Social />;
      case 6:
        return <Seo />;
      case 7:
        return <Verify />;
     
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="ad-form">
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-3/4">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper 
        steps={steps}
        currentStep={currentStep} />
        <div className="my-10 p-10">
        <UseContextProvider>
        {displayStep(currentStep)}
        </UseContextProvider>
        </div>

    
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
        
      )}
    </div>
    </div>
  );
}

export default Form;