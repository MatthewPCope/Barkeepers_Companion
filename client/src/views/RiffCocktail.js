import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CocktailForm from '../components/CocktailForm';
import DeleteButton from '../components/DeleteButton';

const RiffCocktail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState({});
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
            .catch(err => console.error(err));
    }, [id]);

    const createRiffedCocktail = (cocktailParam) => {
        axios.post("http://localhost:8000/cocktails", cocktailParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/cocktails/riffed');
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div>
            {loaded && (
                <>
                    <h1 className='font3 text-center mb-3 mt-5'>RIFF COCKTAIL</h1>
                    <CocktailForm
                        onSubmitProp={createRiffedCocktail}
                        initialName={cocktail.name}
                        initialIngredients={cocktail.ingredients}
                        initialTechnique={cocktail.technique}
                        initialIsRiffed={cocktail.isRiffed}
                    />
                    {errors.map((err, index) =>
                        <p key={index}>{err}</p>
                    )}
                    <Link to={'/cocktails/create'}>Create New Cocktail</Link>
                    <br />
                    <Link to={'/cocktails'}>Back to All COCKTAILS</Link>
                    <DeleteButton cocktailById={cocktail._id} successCallback={() => navigate('/cocktails')} />
                </>
            )}
        </div>
    );
}

export default RiffCocktail;
