import {useLocation,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

const ComingSoon = () => {
    const {pathname,state}=useLocation()
    const navigate=useNavigate()

  return (
    <div className='comingpage'>
      <div className='under_process'>
      <p>Coming Soon ...</p>
<Button varient="primary" color='primary' onClick={()=>navigate(state)}>Back</Button>
      </div>

       
        
        </div>
  )
}

export default ComingSoon