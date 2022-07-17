import React,{useState, useEffect} from 'react'
import ScreenD from '../views/ScreenD' 

export default function ScreenC2({choice}) {
  
  const [nextScreen, setNextScreen] = useState("");

  useEffect(() => {
    setTimeout(()=>{
      setNextScreen("ScreenD")
    },3000)
  })

  if(nextScreen)
    return <ScreenD />
  
  
  return (
    <div>
      <h3>{choice}</h3>
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
    </div>
  )
}
