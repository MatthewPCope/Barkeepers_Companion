const Cocktail = require('../models/cocktail.model')

module.exports.createCocktail = (request, response) => {
    Cocktail.create(request.body) 
        .then(cocktail => response.json(cocktail))
        .catch(err => response.status(400).json(err));
};

module.exports.getAllCocktails = (request, response) => {
    Cocktail.find({})
        .then((allCocktails) => response.json(allCocktails))
        .catch((err) => console.log(err))
}

module.exports.getCocktailById = (request, response) => {
    Cocktail.findOne({_id: request.params.id})
        .then(displayCocktail => {
            console.log(displayCocktail)
            response.json(displayCocktail)
        })
}

module.exports.updateCocktail = (request, response) => {
    Cocktail.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedCocktail => response.json(updatedCocktail))
        .catch(err => response.json(err))
}

module.exports.deleteCocktail = (request, response) => {
    Cocktail.deleteOne({ _id: request.params.id })
        .then((deletedId) => response.json(deletedId))
        .catch((err) => console.log(err));
}

module.exports.riffCocktail = (request, response) => {
    Cocktail.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedCocktail => response.json(updatedCocktail))
        .catch(err => response.json(err))
}

