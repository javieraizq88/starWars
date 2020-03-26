import React, { useContext } from "react";
import { Context } from "../components/store/appContext";

const Planets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;

    console.log(Planets)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((planet, i) => {
                                    const img = planet.name.split(" ").join("-").toLowerCase()+".jpg";
                                    return (
                                        <div className="card mb-3" key={i} id="card-planets" >
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img src={"img/"+img} className="card-img" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{planet.name}</h5>
                                                        <p className="card-text">Diameter: {planet.diameter}</p>
                                                        <p className="card-text">Orbital Period: {planet.orbital_period}</p>
                                                        <p className="card-text">Population: {planet.population}</p>
                                                        <p className="card-text">Terrain: {planet.terrain}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
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


export default Planets;



