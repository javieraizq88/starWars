import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, useHistory } from "react-router-dom";

const SpeciesSpecie = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;
    const nombreSpecie = props.match.params.specie; //llamo los paranmetros de species
const history = useHistory;

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="row">
                        {
                            !!store.species  ?
                                store.species.results.map((specie, i) => {
                                    if (JSON.stringify(specie.name) === JSON.stringify(nombreSpecie)) {
                                    const img = specie.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card m-3" key={i} id="card-planets" >
                                            <div className="row ">
                                                <div className="col-md-4">
                                                    <img src={"http://localhost:3000/img/"+img} className="card-img" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body" key={i}>
                                                        <h5 className="card-title">{specie.name}</h5>
                                                        <p className="card-text ml-5">Diameter: {specie.diameter}</p>
                                                        <p className="card-text">average lifespan: {specie.average_lifespan}</p>
                                                        <p className="card-text">Designation: {specie.designation}</p>
                                                        <p className="card-text">Classification: {specie.classification}</p>
                                                        <p className="card-text">Language: {specie.language}</p>
                                                        <p className="card-text">Eye colors: {specie.eye_colors}</p>
                                                        <p className="card-text">hair colors: {specie.hair_colors}</p>
                                                        <p className="card-text">Skin color: {specie.skin_colors}</p>
                                                        <Link to={"/species"}  class="btn btn-primary">Back to species </Link>
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

export default SpeciesSpecie;
