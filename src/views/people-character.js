import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const PeopleCharacter = props => {
    const { store, actions } = useContext(Context);
    const { people } = store; //llamo a la info de people q esta en store en el AppContext.js
    const nombre = props.match.params.character; //llamo los paranmetros de People

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    if (JSON.stringify(character.name) === JSON.stringify(nombre)) {
                                        const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        //para linkear la imagen de cada character, hay q cambiar "img/" por URL
                                        //el boton vuelve a people por eso no tiene el "/" final
                                        return (
                                            <div className="row">
                                                <div className="card md-3" key={i} id="card-people">
                                                    <img src={"http://localhost:3000/img/" + img} className="card-img" />
                                                </div>
                                                <div className="card-md9" id="card-people">
                                                    <h5 className="card-title">{character.name}</h5>
                                                    <p>
                                                        &nbsp; Birth Year : {character.birth_year} <br />
                                                       &nbsp; Created : {character.created}<br />
                                                       &nbsp; Edited = {character.edited} <br />
                                                       &nbsp; Eye Color : {character.eye_color}<br />
                                                       &nbsp; Gender : {character.gender} <br />
                                                       &nbsp; Height : {character.height} <br />
                                                       &nbsp; Hair color : {character.hair_color}<br />
                                                       &nbsp; Mass : {character.mass} <br />
                                                       &nbsp; Hair color : {character.hair_color}<br />
                                                    </p>
                                                    <Link to="/people" class="btn btn-primary">Back to People</Link>
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
