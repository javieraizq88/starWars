import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const Filmsfilm = props => {
    const { store, actions } = useContext(Context);
    const { films } = store; //llamo a la info de films q esta en store en el AppContext.js
    const nombre = props.match.params.film; //llamo los paranmetros de films

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.films &&
                                store.films.results.length > 0 ?

                                store.films.results.map((film, i) => {
                                    if (JSON.stringify(film.title) === JSON.stringify(nombre)) {
                                        const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        //para linkear la imagen de cada film, hay q cambiar "img/" por URL
                                        //el boton vuelve a films por eso no tiene el "/" final
                                        return (
                                            <div className="row">
                                                <div className="card md-3" key={i} id="card-films">
                                                    <img src={"http://localhost:3000/img/" + img} className="card-img" />
                                                </div>
                                                <div className="card-md9" id="card-films">
                                                    <h5 className="card-title">{film.title}</h5>
                                                    <p>
                                                        &nbsp; Director : {film.director}<br />
                                                        &nbsp; Episode number : {film.episode_id}<br />
                                                        &nbsp; Created : {film.created}<br />
                                                        &nbsp; Opening crawl = {film.opening_crawl} <br />

                                                        <br />
                                                    </p>
                                                    <Link to="/films" class="btn btn-primary">Back to films</Link>
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

export default Filmsfilm;
