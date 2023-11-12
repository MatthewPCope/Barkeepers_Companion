import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import DisplayCocktail from './views/DisplayCocktail';
import UpdateCocktail from './views/UpdateCocktail';
import CreateCocktail from './views/CreateCocktail';
import RiffCocktail from './views/RiffCocktail';
import RiffedCocktailList from './components/RiffedCocktailList';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Index from './views/Index'
import DisplayRiffedCocktails from './views/DisplayRiffedCocktails';

const App = () => {
  return (
    <div className="App">

        <Routes>
          <Route index element={<Index/>}/> 
          <Route element={<Main/>} path="/cocktails" default />
          <Route element={<DisplayCocktail/>} path="/cocktails/:id" />
          <Route element={<UpdateCocktail/>} path="/cocktails/update/:id" />
          <Route element={<CreateCocktail/>} path="/cocktails/create" />
          <Route element={<RiffCocktail/>} path="/cocktails/riff/:id" />
          <Route element={<RiffedCocktailList/>} path="/cocktails/riffed" />
          <Route element={<RegisterForm/>} path="/register" />
          <Route element={<LoginForm  />} path="/login" />
          <Route element={<DisplayRiffedCocktails/>} path="/cocktails/rifflist" />
        </Routes>

    </div>
  );
}

export default App;
