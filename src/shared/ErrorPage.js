import React from 'react'
import "./sidebar.css"
import {useNavigate,useLocation} from 'react-router-dom'
import img from "./404.png"
const ErrorPage = () => {
  const {pathname}=useLocation()
  const navigate=useNavigate()
  return (
    <div className='commonPage'>
          <img src={img} alt=""/>

              <div className='homeBtn' onClick={()=>navigate('/',{state:pathname})}>Back To Home</div>
        </div >
  )
}

export default ErrorPage