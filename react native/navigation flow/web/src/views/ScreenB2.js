import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { submitChoices } from '../actions/choices'
import Loader from '../components/Loader';
import ScreenC2 from '../views/ScreenC1'

export default function ScreenB2() {
  const dispatch = useDispatch();
  const [showLoader , setShowLoader]  = useState(false)
  const [nextScreen, setNextScreen] = useState("");

  const [selectedChoice , setSelectedChoice] = useState("")

  const handleChange = (e) => {
    setSelectedChoice(e.target.value)
  }
  
  const submitHandler = () => {
    setShowLoader(true)
    dispatch(submitChoices()).then(response => {
      setShowLoader(false)
      setNextScreen("ScreenC2");
    })
  }

  if(nextScreen)
    return <ScreenC2 choice={selectedChoice} />

  return (
    <div>
      {
        !showLoader ? (
          <>
            <input onChange={handleChange} type="radio" name="choice" value="Choice A" /> Choice A
            <input onChange={handleChange} type="radio" name="choice" value="Choice B" /> Choice B
            <input onChange={handleChange} type="radio" name="choice" value="Choice C" /> Choice C
            <input onChange={handleChange} type="radio" name="choice" value="Choice D" /> Choice D
            <input onChange={handleChange} type="radio" name="choice" value="Choice E" /> Choice E

            <input type="button" onClick={submitHandler} value="Submit"/>
          </>
        ) : <Loader />
      }
    </div>
  )
}
