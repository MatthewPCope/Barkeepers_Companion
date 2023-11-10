import React from 'react';
import { Link } from 'react-router-dom';

const RiffedCocktailList = ({ riffedCocktailList, removeFromDom }) => {
    return (
        <div>
            {
                riffedCocktailList.map((cocktail, index) => (
                    <div key={index}>
                        <h2>{cocktail.name}</h2>
                        <p>{cocktail.ingredients} // {cocktail.technique}</p>
                        <Link to={`/cocktails/update/${cocktail._id}`}>Edit</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default RiffedCocktailList;