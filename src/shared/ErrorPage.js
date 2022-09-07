import React from 'react'
import "./sidebar.css"
import {useNavigate} from 'react-router-dom'
const ErrorPage = () => {
  const navigate=useNavigate()
  return (
    <div className='errorPage'>
          <img src='https://miro.medium.com/max/875/1*DeBkx8vjbumpCO-ZkPE9Cw.png' />

              <div className='homeBtn' onClick={()=>navigate('/')}>Back To Home</div>
        </div >
  )
}

export default ErrorPage