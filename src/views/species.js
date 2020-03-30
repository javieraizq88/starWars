import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const Species = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.species &&
                            store.species.results.length > 0 ?
                                store.species.results.map((specie, i) => {
                                    const img = specie.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (

                                        <div className="card mt-3 p-1 mx-3 bg-dark" key={i} id="card-general">
                                            <div className="">
                                                <img src={"img/" + img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{specie.name}</h5>
                                                    <p><Link to={"/species/" + specie.name} className=" btn btn-danger">More...</Link></p>
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

            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    {
                        !!store.species &&
                        store.species.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getSpecies(store.species.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getSpecies(store.species.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.species &&
                        store.species.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getSpecies(store.species.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getSpecies(store.species.next)}>
                                    Next
                                </button>
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default Species;
