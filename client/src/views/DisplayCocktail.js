import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';

// import DeleteButton from '../components/DeleteButton';

const DisplayCocktail = (props) => {

    const {id} = useParams();
    const [displayCocktail, setDisplayCocktail] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/cocktails/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setDisplayCocktail(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])

    // const removeFromDom = cocktailById => {
    //     setDisplayCocktail(displayCocktail.filter(displayCocktail => displayCocktail._id !== cocktailById))
    // }
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
                        <h1 className='font2 text-center '>{displayCocktail.name}</h1>
                        <h4  className=' mb-5 mt-4 font1'>Ingredients: {displayCocktail.ingredients}</h4>
                        <h4 className='font1 mt-5 mb-5'>Technique: {displayCocktail.technique}</h4>
                    </div>
                        <div className='  mt-5'>
                                
                                <div className='d-flex align-items-center justify-content-md-center mb-2 mt-4'>
                                    <div>
                                    <Link to={`/cocktails/riff/${displayCocktail._id}`}>
                                            <button className=" font1 button">Riff Cocktail </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={`/cocktails/update/${displayCocktail._id}`}>
                                            <button className=" font1 button">Edit </button>
                                        </Link>
                                    </div>
                                    <div>
                                    <button className=' font1 button' onClick={() => deleteCocktail(displayCocktail._id)}>Delete</button>
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
                    <Link to={'/home'}>
                        <button className='font6 button3' >Home</button>
                    </Link>
                </div>
        </div>

  )
}

export default DisplayCocktail;