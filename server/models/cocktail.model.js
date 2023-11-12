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
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: [validateNameLength, 'Name must contain at least 2 characters'],
    },
    ingredients: {
        type: String,
        required: [true, 'Ingredients are required'],
        validate: [validateIngredientsLength, 'Ingredients must contain at least 2 characters'],
    },
    technique: {
        type: String,
        required: [true, 'Technique is required'],
        validate: [validateTechniqueLength, 'Technique must be no more than 255 characters']
    },
    isRiffed: {
        type: Boolean,
        default: false, // Set default to false for regular cocktails
    },
    userId:{type: String}
}, { timestamps: true });

const Cocktail = mongoose.model('Cocktail', CocktailSchema);

module.exports = Cocktail;