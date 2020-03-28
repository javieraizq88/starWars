import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const PeopleCharacter = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const nombreCharacter = props.match.params.character; //llamo los paranmetros de people

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people  ?
                                store.people.results.map((character, i) => {
                                    if (JSON.stringify(character.name) === JSON.stringify(nombreCharacter)) {
                                    const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card bg-dark text-white" key={i} >
                                            <img src={"http://localhost:3000/img/" + img} className="card-img" alt="..." />
                                            <div className="row no-gutters">
                                                &nbsp;<h5 className="card-title">{character.name}</h5>
                                                <div className="container ">
                                                    <p><Link to={"/people"} className=" btn btn-danger">Back to People</Link></p>
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

export default PeopleCharacter;
