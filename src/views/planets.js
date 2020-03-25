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
                    <div className="col">
                        <h1>Planets</h1>
                    </div>
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((planet, i) => {
                                    return (
                                        <div className="col-md-4" key={i} >
                                            <div className="card" >
                                                <img src="http://placehold.it/400x200" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
