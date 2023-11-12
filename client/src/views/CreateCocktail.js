import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import axios from "axios";
import CocktailForm from '../components/CocktailForm';


const CreateCocktail = () => {
    const [cocktailList, setCocktailList] = useState ([]);
    
    const [errors, setErrors] = useState([]);
    
    const navigate = useNavigate();

    const createCocktail = ( cocktailParam ) => {

        axios.post("http://localhost:8000/cocktails", cocktailParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                
                setCocktailList([...cocktailList, res.data])
                navigate('/cocktails');
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
            <h1 className='font3 text-center mb-3 mt-5'>Create a Cocktail</h1>
            <CocktailForm onSubmitProp={createCocktail} successcallback={() => navigate('/cocktails')} initialName="" initialIngredients="" initialTechnique="" errors={errors}/>
            {errors.map((err, index) => 
                    <p key={index}>{err}</p> )}
            <br/>
            <Link to={'/cocktails'}>Back to all Cocktails</Link>
        </div>
    )

}

export default CreateCocktail;