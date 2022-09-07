import React from 'react'
import "./sidebar.css"
import {useNavigate} from 'react-router-dom'
import img from "./404.png"
const ErrorPage = () => {
  const navigate=useNavigate()
  return (
    <div className='errorPage'>
          <img src={img} />

              <div className='homeBtn' onClick={()=>navigate('/')}>Back To Home</div>
        </div >
  )
}

export default ErrorPage