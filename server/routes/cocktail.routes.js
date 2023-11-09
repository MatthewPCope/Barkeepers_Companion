const CocktailController = require('../controllers/cocktail.controller');

module.exports = (app) => {
    app.get('/cocktails', CocktailController.getAllCocktails)
    app.post('/cocktails', CocktailController.createCocktail)
    app.get('/cocktails/:id', CocktailController.getCocktailById)
    app.put('/cocktails/:id', CocktailController.updateCocktail)
    app.delete('/cocktails/:id', CocktailController.deleteCocktail)
}