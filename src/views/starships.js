import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const Starships = props => {
    const { store, actions } = useContext(Context);
    const { starships } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.starships &&
                            store.starships.results.length > 0 ?
                                store.starships.results.map((starship, i) => {
                                    const img = starship.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card mt-3 p-1 mx-3 bg-dark" key={i} id="card-general">
                                        <div className="">
                                            <img src={"img/" + img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{starship.name}</h5>
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
                                    onClick={() => actions.getStarships(store.starships.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getStarships(store.starships.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.starships &&
                        store.starships.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getStarships(store.starships.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getStarships(store.starships.next)}>
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
