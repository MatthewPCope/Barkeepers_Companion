import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import CocktailList from '../components/CocktailList';

const Main = () => {
    const [cocktailList, setCocktailList] = useState ([]);
    const cocktail = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/cocktails")
        .then((res) => {
            console.log(res.data);
            setCocktailList(res.data);
        })
        .catch((err) => console.log(err))
        
    }, [setCocktailList])

    const removeFromDom = cocktailById => {
        axios.delete(`http://localhost:8000/cocktails/delete/${cocktailById}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setCocktailList(cocktailList.filter(cocktail => cocktail._id !== cocktailById))
    })
        .catch((err) => console.log(err))
}  



    return (
        <div>
            <h1>
              WELCOME TO BARKEEPER'S COMPANION
            </h1>
            <Link to={'/cocktails/create'}>Create New Cocktail</Link>
            <br/>
            {/* <Link to={'/cocktails/riffs'}>Riff Cocktail</Link> */}
            <br/>
            <CocktailList cocktailList={cocktailList} removeFromDom={removeFromDom} initialName={cocktail.name} />
            
            
        </div>
    )
}

export default Main;