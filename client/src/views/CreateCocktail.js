import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import CocktailForm from '../components/CocktailForm';

const CreateCocktail = () => {
    const [cocktailList, setCocktailList] = useState ([]);
    const [errors, setErrors] = useState([]);

    const createCocktail = ( cocktailParam ) => {
       
        axios.post("http://localhost:8000/cocktails", cocktailParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setCocktailList([...cocktailList, res.data])
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }, [setErrors])
    }


  return (
        <div>
            {/* <header>
            Create A New Cocktail !
            </header> */}
            <CocktailForm onSubmitProp={createCocktail} initialName="" initialIngredients="" initialTechnique="" errors={errors}/>
            {errors.map((err, index) => 
                    <p key={index}>{err}</p> )}
            <br/>
            {/* <Link to={'/cocktails'}>Back to all Cocktail</Link> */}
        </div>
    )

}

export default CreateCocktail;