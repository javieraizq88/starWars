import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, useHistory } from "react-router-dom";
/* RESPONSIVE */

const Starshipsstarship = props => {
    const { store, actions } = useContext(Context);
    const { starships } = store;
    const nombreStarship = props.match.params.starship; //llamo los paranmetros de people
    const history = useHistory();


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.starships &&
                            store.starships.results.length > 0 ?
                                store.starships.results.map((starship, i) => {
                                    if (JSON.stringify(starship.name) === JSON.stringify(nombreStarship)) {

                                    const img = starship.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card mt-3" key={i} >
                                        <div className="row no-gutters">
                                            <div className="col-md-4 col-xs-4">
                                                <img src={"http://localhost:3000/img/starships/" + img} className="card-img-top"  />
                                            </div>
                                            <div className="col-md-5 col-xs-5 ">
                                                <div className="card-body">
                                                    <h4 className="card-title">{starship.name}</h4>
                                                    <p className="card-text ml-3">
                                                    &nbsp; Cargo capacity: {starship.cargo_capacity}<br />
                                                    &nbsp; Consumables: {starship.consumables}<br />
                                                    &nbsp; Cost in credits: {starship.cost_in_credits}<br />
                                                    &nbsp; Crew: {starship.crew}<br />
                                                    &nbsp; Model: {starship.model}<br />
                                                    &nbsp; Passengers: {starship.passengers}<br />
                                                    &nbsp; Manufacturer: {starship.manufacturer}<br />
                                                    </p>
                                                    <button className="btn btn-primary" onClick={() => history.goBack()}>Back to starships</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
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

export default Starshipsstarship;
