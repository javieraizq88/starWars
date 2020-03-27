import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, StaticRouter } from "react-router-dom";

const Planets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((planet, i) => {
                                    const img = planet.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (

                                        <div className="card bg-dark text-white" key={i} id="card-planets" >
                                            <img src={"img/" + img} className="card-img" alt="..." />
                                            <div className="row no-gutters">
                                                &nbsp;<h5 className="card-title">{planet.name}</h5>
                                                <div className="container ">
                                                    <p><Link to={"/planets/" + planet.name} className=" btn btn-danger">More...</Link></p>
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
                        !!store.planets &&
                        store.planets.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getPlanets(store.planets.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getPlanets(store.planets.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.planets &&
                        store.planets.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getPlanets(store.planets.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getPlanets(store.planets.next)}>
                                    Next
                                </button>
                            )
                    }

                </div>
            </div>
        </>
    )
}


export default Planets;



