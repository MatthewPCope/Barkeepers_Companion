const mongoose = require('mongoose');

const validateNameLength = (name) => {
    return String(name).length >= 2;
};

const validateIngredientsLength = (ingredients) => {
    return String(ingredients).length >= 2;
};

const validateTechniqueLength = (technique) => {
    return String(technique).length <= 255;
};



const CocktailSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Name is required'],
        validate: [validateNameLength, 'Name must contain at least 2 characters'],
    },
    Ingredients: {
        type: String,
        required: [true, 'Ingredients are required'],
        validate: [validateIngredientsLength, 'Ingredients must contain at least 2 characters'],
    },
    Technique: {
        type: String,
        required: [true, 'Technique is required'],
        validate: [validateTechniqueLength, 'Technique must be no more than 255 characters']
    },
}, { timestamps: true });

const Cocktail = mongoose.model('Cocktail', CocktailSchema);

module.exports = Cocktail;