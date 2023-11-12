
// import axios from 'axios';
import {Link} from 'react-router-dom'

const Index = (props) => {

    
    
    return (
        <div>
            <div className=''>
            <h1 className=' font2 mt-5 text-center'>Barkeeper's Companion</h1>
            
            <div className='text-center mt-3'>
                <div className=' '>
                    <div className=''>
                        <Link to={'/register'}>
                            <button className="font1 button"> <span>Become a Member</span></button>
                        </Link>
                    </div>
                </div> 
                <div className=' '>
                    <div className='columns1'>
                        <Link to={'/login'}>
                            <button className="font1 button"><span>Member Login</span></button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Index;