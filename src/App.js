import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import People from './views/people';
import Vehicles from './views/vehicles';
import Planets from './views/planets';
import Titulo from './components/titulo';
import injectContext from './components/store/appContext';


const App = props => {

  return (
    <>
      <BrowserRouter>
        <Titulo />
        <Navbar />
        <Switch>
          <Route exact path="https://swapi.co/api/" component={People} />
          <Route exact path="https://swapi.co/api/" component={Planets} />
          <Route exact path="https://swapi.co/api/" component={Vehicles} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
