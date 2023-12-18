import React, { useContext, useState } from 'react'
import { StepperContext } from '../contexts/StepperContext';
import { AppContext } from '../App';

const StepperControl = ({ handleClick, currentStep, steps }) => {

  




  return (
    <div className='container  flex justify-around mt-5 mb-4'>
       {/*back button*/}
       <button
       onClick={() => handleClick()}
        className={`bg-white text-slate-400 font-semibold  uppercase px-5 py-2  rounded-xl
        cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out
        ${currentStep ===1 ? " cursor-not-allowed opacity-50 " : ""}`}>
       Back
       </button>
        {/*next button*/}

      {currentStep===steps.length - 1 ?  null :   <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        Next
      </button>}

        {/* <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button> */}
    </div>
  )
}

export default StepperControl


