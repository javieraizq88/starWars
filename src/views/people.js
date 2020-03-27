import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const People = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="col-md-4 " key={i} >
                                            <div className="container ">
                                                <div className="card mb-4" id="card-people">
                                                    <img src={"img/" + img} className="card-img-top" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{character.name}</h5>
                                                        <p className= ""></p>
                                                        <Link to={"/people/" + character.name} class="btn btn-info ">More</Link>
                                                    </div>
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
                        !!store.people &&
                        store.people.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getPeople(store.people.previous)}>
                                    Previous
                                </button>
                            ) :( 
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
                            ) :( 
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

// Anakin Skywalker

// Wilhuff Tarkin

// Chewbacca

// Han Solo

// Greedo

// Jabba Desilijic Tiure

// Wedge Antilles

// Jek Tono Porkins

// Yoda

// Palpatine

// Boba Fett

// IG-88

// Bossk

// Lando Calrissian

// Lobot

// Ackbar

// Mon Mothma

// Arvel Crynyd

// Wicket Systri Warrick

// Nien Nunb

