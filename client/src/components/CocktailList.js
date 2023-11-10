import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
import {useNavigate, useParams} from 'react-router-dom';


const CocktailList = (props) => {

    const [cocktail, setCocktail] = useState([]);
    const navigate = useNavigate();

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

  return (
    <div>
            {
                cocktail.map((cocktail, index) => (
                    <div key={index}>
                        <h2>{cocktail.name}</h2>
                        <p>{cocktail.ingredients} // {cocktail.technique}</p>
                        <Link to={`/cocktails/update/${cocktail._id}`}>Edit</Link>
                        <DeleteButton cocktailById={cocktail._id} successCallback={() => navigate('/cocktails')} />
                    </div>
                ))
            }
        </div>
  )
}

export default CocktailList;