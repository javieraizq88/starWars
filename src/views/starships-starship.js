import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const Starshipsstarship = props => {
    const { store, actions } = useContext(Context);
    const { starships } = store;
    const nombreStarship = props.match.params.starship; //llamo los paranmetros de people

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
                                        <div className="card mt-3" key={i} id="card-individual">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={"http://localhost:3000/img/" + img} id= "omagen-individual"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{starship.name}</h5>
                                                    <p>
                                                    &nbsp; Cargo capacity : {starship.cargo_capacity}<br />
                                                    &nbsp; Consumables : {starship.consumables}<br />
                                                    &nbsp; Cost in credits : {starship.cost_in_credits}<br />
                                                    &nbsp; Crew : {starship.crew}<br />
                                                    &nbsp; Model : {starship.model}<br />
                                                    &nbsp; Passengers : {starship.passengers}<br />
                                                    </p>
                                                    <Link to="/starships" className="btn btn-primary">Back to starships</Link>
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
