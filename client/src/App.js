import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import DisplayCocktail from './views/DisplayCocktail';
import UpdateCocktail from './views/UpdateCocktail';
import CreateCocktail from './views/CreateCocktail';
import RiffCocktail from './views/RiffCocktail';
import RiffedCocktailList from './components/RiffedCocktailList';
const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/cocktails" default />
          <Route element={<DisplayCocktail/>} path="/cocktails/:id" />
          <Route element={<UpdateCocktail/>} path="/cocktails/update/:id" />
          <Route element={<CreateCocktail/>} path="/cocktails/create" />
          <Route element={<RiffCocktail/>} path="/cocktails/riff/:id" />
          <Route element={<RiffedCocktailList/>} path="/cocktails/riffed" />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
