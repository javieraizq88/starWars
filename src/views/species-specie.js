import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const SpeciesSpecie = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;
    const nombreSpecie = props.match.params.specie; //llamo los paranmetros de people


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.species &&
                            store.species.results.length > 0 ?
                                store.species.results.map((specie, i) => {
                                    if (JSON.stringify(specie.name) === JSON.stringify(nombreSpecie)) {

                                    const img = specie.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (

                                        <div className="card bg-dark text-white" key={i} >
                                            <img src={"img/" + img} className="card-img" alt="..." />
                                            <div className="row no-gutters">
                                                &nbsp;<h5 className="card-title">{specie.name}</h5>
                                                <div className="container ">
                                                    <p><Link to={"/species"} className=" btn btn-danger">Back to species</Link></p>
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
