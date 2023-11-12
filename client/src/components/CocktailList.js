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
                cocktail.map((cocktail, index) => (
                    <div key={index}>
                        <h2 className="nameColor">{cocktail.name}</h2>
                        {/* <p>{cocktail.ingredients}</p> */}
                        <Link to={`/cocktails/update/${cocktail._id}`}>Edit</Link>
                        <DeleteButton cocktailById={cocktail._id} successCallback={() => navigate('/cocktails')} />
                    </div>
                ))
            }
        </div>
  )
}

export default CocktailList;