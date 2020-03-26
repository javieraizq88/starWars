import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const People = props => {
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
                                            <div className="card-md-3" key={i}>
                                                <div className="row no-gutters" id="card-people">
                                                    <div className="card-md-4">
                                                        <img src={"http://localhost:3000/img/" + img} className="card-img" /> 
                                                        <div className="col-md-8">
                                                            <h5 className="card-title">{character.name}</h5>
                                                            <p className="card-text">Birth Year : {character.birth_year} </p>
                                                            <p className="card-text">Created : {character.created} </p>
                                                            <p className="card-text">Edited = {character.edited} </p>
                                                            <p className="card-text">Eye Color : {character.eye_color} </p>
                                                            <p className="card-text">Gender : {character.gender} </p>
                                                            <p className="card-text">Height : {character.height} </p>
                                                            <p className="card-text">Hair color : {character.hair_color} </p>
                                                            <p className="card-text">Mass : {character.mass} </p>
                                                            <p className="card-text">Hair color : {character.hair_color} </p>
                                                            <Link to="/people" class="btn btn-primary">Back to People</Link>
                                                        </div>
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

export default People;
