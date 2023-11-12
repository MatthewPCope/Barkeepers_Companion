import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
import {useNavigate} from 'react-router-dom';


const RiffedCocktailList = (props) => {

    const [riffedCocktail, setRiffedCocktail] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/cocktails")
        .then((res) => {
            console.log(res.data);
            setRiffedCocktail(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setRiffedCocktail])
// console.log(cocktail)
  return (
    <div>
            {
                riffedCocktail.map((riffedCocktail, index) => (
                    <div key={index}>
                        <h2 className="nameColor">{riffedCocktail.name}</h2>
                        {/* <p>{cocktail.ingredients}</p> */}
                        <Link to={`/cocktails/${riffedCocktail._id}`}>Display Cocktail</Link>
                        <Link to={`/cocktails/update/${riffedCocktail._id}`}>Edit</Link>
                        <DeleteButton cocktailById={riffedCocktail._id} successCallback={() => navigate('/cocktails')} />
                    </div>
                ))
            }
        </div>
  )
}

export default RiffedCocktailList;