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
                <div className="card-group">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    if (JSON.stringify(character.name) === JSON.stringify(nombreCharacter)) {
                                        const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                                <div className="row " key={i} id="card-individual">
                                                    <div className="col-md-5">
                                                        <img src={"http://localhost:3000/img/" + img} />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{character.name}</h5>
                                                            <p>
                                                                &nbsp; Gender : {character.gender} <br />
                                                            &nbsp; Eye color : {character.eye_color}<br />
                                                            &nbsp; Hair color : {character.hair_color}<br />
                                                            &nbsp; Mass : {character.mass}<br />
                                                            &nbsp; Height : {character.height}<br />
                                                            &nbsp; Birth year : {character.birth_year}<br />
                                                            </p>
                                                            <Link to="/people" className="btn btn-primary">Back to People</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    }
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
