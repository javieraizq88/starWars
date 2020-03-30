import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const FilmsFilm = props => {
    const { store, actions } = useContext(Context);
    const { films } = store; //llamo a la info de films q esta en store en el AppContext.js
    const nombrefilm = props.match.params.film; //llamo los paranmetros de films

    return (
        <>
            <div className="container">
                <div className="card-growp">
                    <div className="row">
                        {
                            !!store.films ?
                                store.films.results.map((film, i) => {
                                    if (JSON.stringify(film.title) === JSON.stringify(nombrefilm)) {
                                        const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        //para linkear la imagen de cada film, hay q cambiar "img/" por URL
                                        //el boton vuelve a films por eso no tiene el "/" final
                                        return (
                                            <div className="card mt-3" key={i} id="card-individual">
                                                <div className="row no-gutters">
                                                    <div className="col-md-4">
                                                        <img src={"http://localhost:3000/img/" + img} id= "imagen-individual"/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{film.title}</h5>
                                                            <p>
                                                                &nbsp; Created : {film.created}<br />
                                                            &nbsp; Director : {film.director}<br />
                                                            &nbsp; Episode number : {film.episode_id}<br />
                                                            &nbsp; Ppening crawl : {film.opening_crawl}<br />
                                                            </p>
                                                            <Link to="/films" className="btn btn-primary">Back to films</Link>
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

export default FilmsFilm;
