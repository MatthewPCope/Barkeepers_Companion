import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

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
        <div>
            
        <> 
        
            <form onSubmit={createCocktail}successcallback={() => navigate('/cocktails')} >

                <div className="form-fields">
                    <label>Cocktail Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text"
                    />
                </div>
  
                <br />
  
                <div className="form-fields">
                    <label>Ingredients</label>
                    <input
                        onChange={(e) => setIngredients(e.target.value)}
                        value={ingredients}
                        name="ingredients"
                        type="text"
                    />
                </div>

                <br />
  
                <div className="form-fields">
                    <label>Technique</label>
                    <input
                        onChange={(e) => setTechnique(e.target.value)}
                        value={technique}
                        name="technique"
                        type="textarea"
                    />
                </div>

  
                <br />
                <input className="submit-input" type="submit" value="Submit" />
            </form>
            </> 
        </div>
    );
};

export default CocktailForm;

