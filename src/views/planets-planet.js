import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { useHistory } from "react-router-dom";

const PlanetsPlanet = props => {
    const { store } = useContext(Context);
    // const { planets } = store;
    const nombrePlaneta = props.match.params.planet;
    const history = useHistory();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((planet, i) => {
                                    if (JSON.stringify(planet.name) === JSON.stringify(nombrePlaneta)) {
                                        const img = planet.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        //para linkear la imagen de cada character, hay q cambiar "img/" por URL
                                        //el boton vuelve a people por eso no tiene el "/" final
                                        return (
                                            <div className="card mt-3 mb-3" key={i} id="card-planets" >
                                                <div className="row no-gutters">
                                                    <div className="col-md-4">
                                                        <img src={"http://localhost:3000/img/" + img} className="card-img" alt="Planet img" />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{planet.name}</h5>
                                                            <p className="card-text">Climate: {planet.climate}</p>
                                                            <p className="card-text">Diameter: {planet.diameter}</p>
                                                            <p className="card-text">Gravity: {planet.gravity}</p>
                                                            <p className="card-text">Orbital Period: {planet.orbital_period}</p>
                                                            <p className="card-text">Population: {planet.population}</p>
                                                            <p className="card-text">Rotation period: {planet.rotation_period}</p>
                                                            <p className="card-text">Surface water: {planet.surface_water}</p>
                                                            <p className="card-text">Terrain: {planet.terrain}</p>
                                                            <button className="btn btn-primary" onClick={() => history.goBack()}>Back to Planets</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="col-md-12 text-center">
                                        <div className="spinner-grow" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default PlanetsPlanet;



