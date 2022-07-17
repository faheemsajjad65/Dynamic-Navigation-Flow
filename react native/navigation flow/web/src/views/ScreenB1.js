import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { submitChoices } from '../actions/choices'
import Loader from '../components/Loader';
import ScreenC1 from '../views/ScreenC1'

export default function ScreenB1() {
  
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
      setNextScreen("ScreenC1");
    })
  }
  

  if(nextScreen)
    return <ScreenC1 choice={selectedChoice} />

  return (
    <div>
      {
        !showLoader ? (
          <>
            <select onChange={handleChange} >
              <option value="Choice A" > Choice A</option>
              <option value="Choice B" > Choice B</option>
              <option value="Choice C" > Choice C</option>
              <option value="Choice D" > Choice D</option>
              <option value="Choice E" > Choice E</option>
            </select>

            <input type="button" onClick={submitHandler} value="Submit"/>
          </>
        ) : <Loader />
      }
    </div>
  )
}
