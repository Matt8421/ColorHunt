import React from 'react'
import './App.css'
import Google from "../src/Imagenes/Google.png"
import ButtonBorder from './Components/ButtonBorder/ButtonBorder'
import NavBar from './Components/NavBar/NavBar'
import { ColorCard } from './Components/Index'

const App=()=> {
  

  return (
    <>
    <div>
      
        <ButtonBorder>
          <img src={Google} alt="GoogleIcon" />
          <span>Add to Chrome</span>
        </ButtonBorder>
        <ColorCard  likes={60} hours={3} colors={["001C30","176B87","64CCC5","DAFFFB"]}/>
        <ColorCard  likes={100} hours={50} colors={["001A30","176C87","64BCC5","DAAFFB"]}/>
    </div>
      
    </>
  )
}

export default App
