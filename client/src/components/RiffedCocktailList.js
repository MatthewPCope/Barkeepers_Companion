import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import DeleteButton from './DeleteButton';
import {useNavigate} from 'react-router-dom';


const RiffedCocktailList = (props) => {

    const [riffedCocktail, setRiffedCocktail] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/cocktails?riffed=true")
        .then((res) => {
            console.log(res.data);
            setRiffedCocktail(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setRiffedCocktail])
// console.log(cocktail)
const deleteCocktail = (idFromBelow) => {
    axios.delete(`http://localhost:8000/cocktails/${idFromBelow}`)
        .then((res) => {
            navigate("/cocktails")
            
        })
        .catch((err) => {
            console.log(err);
        })
}
  return (
    <div>
            <div className='text-center mb-3 mt-5'>
                    <div id='container'>
                        <h1 className='font2 text-center '>{riffedCocktail.name}</h1>
                        <h4  className=' mb-5 mt-4 font1'>Ingredients: {riffedCocktail.ingredients}</h4>
                        <h4 className='font1 mt-5 mb-5'>Technique: {riffedCocktail.technique}</h4>
                    </div>
                        <div className='  mt-5'>
                                
                                <div className='d-flex align-items-center justify-content-md-center mb-2 mt-4'>
                                    
                                    <div>
                                        <Link to={`/cocktails/update/${riffedCocktail._id}`}>
                                            <button className=" font1 button">Edit </button>
                                        </Link>
                                    </div>
                                    <div>
                                    <button className=' font1 button' onClick={() => deleteCocktail(riffedCocktail._id)}>Delete</button>
                                    </div>
                                </div>
                                <div>
                                    <Link to={'/cocktails'}>
                                        <button className=' font1 button' >Back to Cocktails</button>
                                    </Link>
                                </div>
                            
                        </div>
            </div>
            <div className='text-center '>
                    <Link to={'/cocktails'}>
                        <button className='font1 button' >Home</button>
                    </Link>
                </div>
        </div>

  )
  
}

export default RiffedCocktailList;