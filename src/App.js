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
import VehiclesOne from './views/vehicles-one';
import PlanetsPlanet from './views/planets-planet';
import Films from './views/films';
import FilmsFilm from './views/films-film';
import Starships from './views/starships';
import Starshipsstarship from './views/starships-starship';
import Species from './views/species';
import SpeciesSpecie from './views/species-specie';


const App = props => {

  return (
    <>
      <BrowserRouter>
        <Titulo />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vehicles/:vehicle" component={VehiclesOne} />
          <Route exact path="/films/:film" component={FilmsFilm} />
          <Route exact path="/starships/:starship" component={Starshipsstarship} />
          <Route exact path="/people/:character" component={PeopleCharacter} />
          <Route exact path="/planets/:planet" component={PlanetsPlanet} />
          <Route exact path="/species/:specie" component={SpeciesSpecie} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/people" component={People} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
