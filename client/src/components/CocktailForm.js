import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

const CocktailForm = (props) => {
    const {initialName, initialIngredients, initialTechnique, onSubmitProp} = props;
    const [ name , setName ] = useState(initialName);
    const [ ingredients , setIngredients ] = useState(initialIngredients);
    const [ technique , setTechnique ] = useState(initialTechnique);
    const navigate = useNavigate();

    const createCocktail = async (e) => {
        e.preventDefault();
        try {
            const submissionResult = await onSubmitProp({ name, ingredients, technique });
            // Add Validations here as well in order to fix my redirect problem
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
        
            {/* <form onSubmit={createCocktail}successcallback={() => navigate('/cocktails')} > */}
            <div className=''>
                <h1 className=' font3 text-center mb-3 mt-5'>Create a Cocktail</h1>
                <div id="container2">
                    <div  className= ' font1 box p-4 my-3'>
                        <form onSubmit={createCocktail} successcallback={() => navigate('/cocktails')} >
                            <div className="form-group mb-4">
                                <label className='form-label'>Cocktail Name:</label>
                                <input className='form-control'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    name="name"
                                    type="text"
                                />
                            </div>
                            
                            <div className="form-group mb-4">
                                <label className='form-label'>Ingredients</label>
                                <textarea className='form-control'
                                    onChange={(e) => setIngredients(e.target.value)}
                                    value={ingredients}
                                    name="ingredients"
                                    type="text"
                                    rows="4" cols="50"
                                />
                            </div>
                            
                            <div className="form-group mb-4">
                                <label className='form-label'>Technique</label>
                                <textarea className='form-control'
                                    onChange={(e) => setTechnique(e.target.value)}
                                    value={technique}
                                    name="technique"
                                    type="text"
                                    rows="4" cols="50"
                                />
                            </div>
                            <div className='text-center'>
                            <input className="submit-input" type="submit" value="Submit" />
                            </div>
                            
                        </form>
                        {/* <div className='text-center mt-3'> */}              
                    </div>
                </div>
            </div>
    </>
           
    );
}

export default CocktailForm;
