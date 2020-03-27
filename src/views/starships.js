import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, StaticRouter } from "react-router-dom";

const Starships = props => {
    const { store, actions } = useContext(Context);
    const { starships } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.starships ?
                                store.starships.results.map((starship, i) => {
                                    const img = starship.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (

                                        <div className="card bg-dark text-white" key={i} id="card-starships" >
                                            <img src={"img/" + img} className="card-img" alt="..." />
                                            <div className="row no-gutters">
                                                &nbsp;<h5 className="card-title">{starship.name}</h5>
                                                <div className="container ">
                                                    <p><Link to={"/starships/" + starship.name} className=" btn btn-danger">More...</Link></p>
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
                        !!store.starships &&
                        store.starships.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getstarships(store.starships.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getstarships(store.starships.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.starships &&
                        store.starships.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getstarships(store.starships.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getstarships(store.starships.next)}>
                                    Next
                                </button>
                            )
                    }

                </div>
            </div>
        </>
    )
}


export default Starships;



