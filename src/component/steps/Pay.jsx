import React, { useContext, useEffect } from 'react'
import './steps.css'
import { StepperContext } from '../../contexts/StepperContext'

const Pay = () => {
    const {plan,setPlan}=useContext(StepperContext)
    const {canPay,setCanPay}=useContext(StepperContext)

 
  return (
    <div className="pay">
        <div class="wrapper">
  <div class="card" onClick={()=>setPlan(0)}>
    <input class="input" type="radio" name="card" value="basic" />
    <span class="check"></span>
    <label class="label">
      <div class="title">BASIC</div>
      <div class="price">
        <span class="span">$</span>
        0
        <span class="span">/month</span>
      </div>
    </label>
  </div>
  <div class="card" onClick={()=>setPlan(1)}>
    <input class="input" type="radio" name="card" value="standart" />
    <span class="check"></span>
    <label class="label">
      <div class="title">STANDART</div>
      <div class="price">
        <span class="span">$</span>
        1
        <span class="span">/month</span>
      </div>
    </label>
  </div>
  <div class="card" onClick={()=>setPlan(2)}>
    <input class="input" type="radio" name="card" value="premium" />
    <span class="check"></span>
    <label class="label">
      <div class="title">PREMIUM</div>
      <div class="price">
        <span class="span">$</span>
        5
        <span class="span">/month</span>
      </div>
    </label>
  </div>
</div>
<div>can you pay online ?</div>
<div class="radio-inputs">

  <label class="radio" onClick={()=>setCanPay(true)}>
    <input type="radio" name="radio" />
    <span class="name">Yes</span>
  </label>
      
  <label class="radio" onClick={()=>setCanPay(false)}>
    <input type="radio" name="radio" />
    <span class="name">No</span>
  </label>
</div>
    </div>
  )
}

export default Pay
