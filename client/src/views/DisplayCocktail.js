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
        <p className='nameColor'>Ingredients: {displayCocktail.ingredients}</p>
        <p className='nameColor'>Technique: {displayCocktail.technique}</p>
        <Link className='linkColor' to={`/cocktails/riff/${displayCocktail._id}`}>Riff Cocktail</Link>
        <br/>
        <Link className='linkColor' to={`/cocktails/update/${displayCocktail._id}`}>Edit</Link>
        <br/>
        <Link className='linkColor' to={'/cocktails'}>Back To All Cocktails</Link> 
        <br/>
        <DeleteButton cocktailById={displayCocktail._id} successCallback={() => removeFromDom(displayCocktail._id)} />
    </div>

  )
}

export default DisplayCocktail;