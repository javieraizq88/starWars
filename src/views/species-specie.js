import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, useHistory } from "react-router-dom";
/* RESPONSIVE */
const SpeciesSpecie = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;
    const nombreSpecie = props.match.params.specie; //llamo los paranmetros de species
    const history = useHistory();

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="row">
                        {
                            !!store.species ?
                                store.species.results.map((specie, i) => {
                                    if (JSON.stringify(specie.name) === JSON.stringify(nombreSpecie)) {
                                        const img = specie.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="card mt-3" key={i} id="card-film" >
                                                <div className="row no-gutters">
                                                    <div className="col-md-3 col-xs-3">
                                                        <img src={"http://localhost:3000/img/species/" + img} className="card-img" alt="..." />
                                                    </div>
                                                    <div className="col-md-9 col-xs-9">
                                                        <div className="card-body" >
                                                            <h5 className="card-title">{specie.name}</h5>
                                                            <br />
                                                            <p className="card-text ml-5">
                                                                &nbsp; Diameter: {specie.diameter}<br />
                                                        &nbsp; Average lifespan: {specie.average_lifespan} <br />
                                                        &nbsp; Designation: {specie.designation}<br />
                                                        &nbsp; Classification: {specie.classification}<br />
                                                        &nbsp; Language: {specie.language} <br />
                                                        &nbsp; Eye colors: {specie.eye_colors} <br />
                                                        &nbsp; Hair colors: {specie.hair_colors}<br />
                                                        &nbsp; Skin color: {specie.skin_colors}<br />
                                                            </p>
                                                            <button className="btn btn-primary" onClick={() => history.goBack()}>Go back</button>

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

export default SpeciesSpecie;
