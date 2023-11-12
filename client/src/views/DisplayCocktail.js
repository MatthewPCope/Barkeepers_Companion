import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const DisplayCocktail = (props) => {

    const {id} = useParams();
    const [displayCocktail, setDisplayCocktail] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/cocktails/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setDisplayCocktail(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])

    const removeFromDom = cocktailById => {
        setDisplayCocktail(displayCocktail.filter(displayCocktail => displayCocktail._id !== cocktailById))
    }

  return (
    <div>
        
        <h1 className='nameColor'>{displayCocktail.name}</h1>
        <p className='nameColor'>{displayCocktail.ingredients}</p>
        <p className='nameColor'>{displayCocktail.technique}</p>
        <Link to={`/cocktails/riff/${displayCocktail._id}`}>Riff Cocktail</Link>
        <Link to={`/cocktails/update/${displayCocktail._id}`}>Edit</Link>
        <DeleteButton cocktailById={displayCocktail._id} successCallback={() => removeFromDom(displayCocktail._id)} />
       <div>
        <Link to={'/cocktails'}>Back To All Cocktails</Link> 
        </div> 
    </div>

  )
}

export default DisplayCocktail;