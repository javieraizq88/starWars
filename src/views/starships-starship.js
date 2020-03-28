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

                                        <div className="card bg-dark text-white" key={i} >
                                            <img src={"img/" + img} className="card-img" alt="..." />
                                            <div className="row no-gutters">
                                                &nbsp;<h5 className="card-title">{starship.name}</h5>
                                                <div className="container ">
                                                    <p><Link to={"/starships"} className=" btn btn-danger">Back to starships</Link></p>
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
