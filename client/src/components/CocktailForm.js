import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CocktailForm = (props) => {
    const { initialName, initialIngredients, initialTechnique, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [ingredients, setIngredients] = useState(initialIngredients);
    const [technique, setTechnique] = useState(initialTechnique);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const isFormValid = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required';
        }

        if (!technique.trim()) {
            newErrors.technique = 'Technique is required';
        }

        setErrors(newErrors);

        // Form is valid if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const createCocktail = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            console.log('Form is not valid. Please check your inputs.');
            return;
        }

        try {
            const submissionResult = await onSubmitProp({ name, ingredients, technique });
            if (submissionResult) {
                navigate('/cocktails');
            } else {
                console.log('Submission was not successful.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className=''>
                <h1 className='font3 text-center mb-3 mt-5'>Create a Cocktail</h1>
                <div id="container2">
                    <div className='font1 box p-4 my-3'>
                        <form onSubmit={createCocktail}>
                            <div className="form-group mb-4">
                                <label className='form-label'>Cocktail Name:</label>
                                <input
                                    className='form-control'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    name="name"
                                    type="text"
                                />
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>

                            <div className="form-group mb-4">
                                <label className='form-label'>Ingredients</label>
                                <textarea
                                    className='form-control'
                                    onChange={(e) => setIngredients(e.target.value)}
                                    value={ingredients}
                                    name="ingredients"
                                    type="text"
                                    rows="4" cols="50"
                                />
                                {errors.ingredients && <div className="error">{errors.ingredients}</div>}
                            </div>

                            <div className="form-group mb-4">
                                <label className='form-label'>Technique</label>
                                <textarea
                                    className='form-control'
                                    onChange={(e) => setTechnique(e.target.value)}
                                    value={technique}
                                    name="technique"
                                    type="text"
                                    rows="4" cols="50"
                                />
                                {errors.technique && <div className="error">{errors.technique}</div>}
                            </div>
                            <div className='text-center'>
                                <input className="submit-input" type="submit" value="Submit" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CocktailForm;
