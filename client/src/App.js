import React from 'react';
import Menu from './components/navbar';
import Products from './components/Products';
import Slider from './components/Carousel'
import Cart from './components/Cart';
import './App.css';
import {

  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Menu />
    <Slider />
  
        <Switch>
          <Route  exact path="/">
          <Products />
          </Route>
          <Route exact  path="/cart">
          <Cart />
          </Route>
        </Switch>

      
     
    </div>
  );
}

export default App;
