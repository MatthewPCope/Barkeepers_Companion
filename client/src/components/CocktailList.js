import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
import {useNavigate} from 'react-router-dom';


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
// console.log(cocktail)
  return (
    <div>
            {
                cocktail.map((currentCocktail, index) => (
                    <div key={index}>
                        <h2 className="nameColor">{currentCocktail.name}</h2>
                        <Link to={`/cocktails/${currentCocktail._id}`}>Display Cocktail</Link>
                        <Link to={`/cocktails/update/${currentCocktail._id}`}>Edit</Link>
                        <DeleteButton cocktailById={currentCocktail._id} successCallback={() => navigate('/cocktails')} />
                    </div>
                ))
            }
        </div>
  )
}

export default CocktailList;