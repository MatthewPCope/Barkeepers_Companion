import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const DisplayCocktail = (props) => {

    const {id} = useParams();
    const [displayCocktail, setDisplayCocktail] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/cocktail/${id}`)
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
        
        <h1>{displayCocktail.name}</h1>
        <p>{displayCocktail.ingredients}</p>
        <p>{displayCocktail.technique}</p>
        <Link to={`/cocktail/update/${displayCocktail._id}`}>Edit</Link>
        <DeleteButton cocktailById={displayCocktail._id} successCallback={() => removeFromDom(displayCocktail._id)} />
       <div>
        <Link to={'/cocktails'}>Back To All Cocktails</Link> 
        </div> 
    </div>

  )
}

export default DisplayCocktail;