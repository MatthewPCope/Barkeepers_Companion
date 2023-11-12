import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
import CocktailForm from '../components/CocktailForm';
import DeleteButton from '../components/DeleteButton';

const UpdateCocktail = (props) => {

    const {id} = useParams();
    const [cocktail, setCocktail] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/cocktails/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setCocktail(res.data);
                setLoaded(true);
            })
        }, [id])
        const updateCocktail = cocktail => {
            axios.put(`http://localhost:8000/cocktails/${id}`, cocktail) 
                .then(res => {console.log(res)
                navigate('/cocktails');
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1 className='font3 text-center mb-3 mt-5'>Update Cocktail</h1>
        {loaded && (
            <>
            <CocktailForm onSubmitProp={updateCocktail} 
                        initialName={cocktail.name} 
                        initialIngredients={cocktail.ingredients} 
                        initialTechnique={cocktail.technique} />
            <DeleteButton cocktailById={cocktail._id} successCallback={() => navigate('/cocktails')} />
            <br/>
            <Link to={'/cocktails'}>Back to all Cocktails</Link>
            </>
        )}
    </div>
  )
}

export default UpdateCocktail;