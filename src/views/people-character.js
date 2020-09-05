import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { useHistory } from "react-router-dom";
/* RESPONSIVE */
const PeopleCharacter = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const nombreCharacter = props.match.params.character; //llamo los paranmetros de people
    const history = useHistory();


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    if (JSON.stringify(character.name) === JSON.stringify(nombreCharacter)) {
                                        const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="card mt-3 text-white bg-secondary " >
                                                <div className="row no-gutters">
                                                    <div className="col-md-4 col-xs-4">
                                                        <img src={"http://localhost:3000/img/people/" + img} className="card-img-top" alt="..." />
                                                    </div>
                                                    <div className="col-md-5 col-xs-5 ">
                                                        <div className="card-body ">
                                                            <h4 className="card-title">{character.name}</h4>
                                                            <p className="card-text ml-3">
                                                                &nbsp; Gender : {character.gender} <br />
                                                            &nbsp; Eye color : {character.eye_color}<br />
                                                            &nbsp; Hair color : {character.hair_color}<br />
                                                            &nbsp; Mass : {character.mass}<br />
                                                            &nbsp; Height : {character.height}<br />
                                                            &nbsp; Birth year : {character.birth_year}<br />
                                                            </p>
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={() => history.goBack()}
                                                            >
                                                                Back to People
                                                                </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
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

        </>
    )
}

export default PeopleCharacter;


