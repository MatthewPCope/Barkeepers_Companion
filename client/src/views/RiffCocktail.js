import React , {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import CocktailForm from '../components/CocktailForm';
// import RiffedCocktailList from '../components/RiffedCocktailList';

const RiffCocktail = () => {

    const {id} = useParams();
    const [cocktail, setCocktail] = useState();
    const [cocktailList, setCocktailList] = useState ([]);
    const [riffedCocktailList, setRiffedCocktailList] = useState ([]);
    const [errors, setErrors] = useState([]);
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
            {loaded && (
                <>
            <h1 className='font3 text-center mb-3 mt-5'>RIFF COCKTAIL</h1>
            <CocktailForm onSubmitProp={createCocktail} 
                        initialName={cocktail.name} 
                        initialIngredients={cocktail.ingredients} 
                        initialTechnique={cocktail.technique} />
            {errors.map((err, index) => 
                    <p key={index}>{err}</p> )}
            <Link to={'/cocktails/create'}>Create New Cocktail</Link>
            <br/>
            <Link to={'/cocktails'}>Back to All COCKTAILS</Link>
            {/* <RiffedCocktailList riffedCocktailList={riffedCocktailList} removeFromDom={removeFromDom} /> */}
            </>
        )}
        </div>
  );
}

export default RiffCocktail;