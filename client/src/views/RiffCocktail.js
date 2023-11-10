import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import RiffedCocktailList from '../components/RiffedCocktailList';

const RiffCocktail = () => {
  const [riffedCocktailList, setRiffedCocktailList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8000/cocktails")
    .then((res) => {
        console.log(res.data);
        setCocktail(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}, [setCocktail])

    const removeFromDom = cocktailById => {
        axios.delete(`http://localhost:8000/cocktails/delete/${cocktailById}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setRiffedCocktailList(riffedCocktailList.filter(cocktail => cocktail._id !== cocktailById))
    })
        .catch((err) => console.log(err))
}  

    return (
        <div>
            <h1>RIFF COCKTAIL</h1>
            <Link to={'/cocktails/create'}>Create New Cocktail</Link>
            <br/>
            <Link to={'/cocktails'}>Back to All COCKTAILS</Link>
            <RiffedCocktailList riffedCocktailList={riffedCocktailList} removeFromDom={removeFromDom} />
        </div>
  );
}

export default RiffCocktail;