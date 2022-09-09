import {useLocation,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
const ComingSoon = () => {
    const {pathname,state}=useLocation()
    const navigate=useNavigate()

  return (
    <div className='comingpage' style={{background:"black"}}>
        <div className='soonPage'>
          ComingSoon
        </div>
        <div class="col-3">
        <div class="snippet" data-title=".dot-pulse">
          <div class="stage"> 
            <div class="dot-pulse"> </div>
          </div>
        </div>
      </div>
        <br/>
        <div >
        <Button variant="contained" onClick={()=>navigate(state,{state:pathname})}>Back</Button>
            </div>
        </div>
  )
}

export default ComingSoon