import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../components/store/appContext";
/* RESPONSIVE */
const People = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    console.log(store.people);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people &&
                                store.people.results.length > 0 ?
                                store.people.results.map((character, i) => {
                                    const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card mt-3 p-1 mx-3 bg-dark" key={i} id="card-general">
                                            <div className="" id="card-general">
                                                <img src={"img/people/" + img} className="card-img-top" alt="Character img" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{character.name}</h5>
                                                    <p><Link to={"/people/" + character.name} className=" btn btn-danger">More...</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                : (
                                    <div className="col-md-12 col-xs-12 text-center">
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
                <div className="col-md-12 col-xs-12 d-flex justify-content-between">
                    {
                        !!store.people &&
                            store.people.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md" 
                                    onClick={() => actions.getPeople(store.people.previous)}>
                                    Previous
                                </button>
                            ) : (
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getPeople(store.people.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.people &&
                            store.people.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getPeople(store.people.next)}>
                                    Next
                                </button>
                            ) : (
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getPeople(store.people.next)}>
                                    Next
                                </button>
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default People;
