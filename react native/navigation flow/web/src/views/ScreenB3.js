import React, {useState} from 'react'
import ScreenC2 from '../views/ScreenC2'

export default function ScreenB3() {
  
  const [nextScreen, setNextScreen] = useState("");

  const submitHandler = () => {
    setNextScreen("ScreenC2")
  }

  if(nextScreen)
    return <ScreenC2 />

  return (
    <div>
      <input type="button" onClick={submitHandler} value="Submit"/>
    </div>
  )
}
