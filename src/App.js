import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import People from './views/people';
import Vehicles from './views/vehicles';
import Planets from './views/planets';
import Titulo from './components/titulo';
import injectContext from './components/store/appContext';
import Home from './views/home';
import PeopleCharacter from './views/people-character';


const App = props => {

  return (
    <>
      <BrowserRouter>
        <Titulo />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/people" component={People} />
          <Route exact path="/people/:character" component={PeopleCharacter} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/vehicles" component={Vehicles} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
