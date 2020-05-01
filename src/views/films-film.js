import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { useHistory } from "react-router-dom";
/* RESPONSIVE */
const FilmsFilm = props => {
    const { store, actions } = useContext(Context);
    const { films } = store; //llamo a la info de films q esta en store en el AppContext.js
    const nombrefilm = props.match.params.film; //llamo los paranmetros de films
    const history = useHistory();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.films ?
                                store.films.results.map((film, i) => {
                                    if (JSON.stringify(film.title) === JSON.stringify(nombrefilm)) {
                                        const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        //para linkear la imagen de cada film, hay q cambiar "img/" por URL
                                        //el boton vuelve a films por eso no tiene el "/" final
                                        return (
                                            <div className="card mt-3 text-white bg-secondary " key={i}>
                                                <div className="row no-gutters">
                                                    <div className="col-md-3 col-xs-3">
                                                        <img src={"http://localhost:3000/img/films/" + img} className="card-img"  />
                                                    </div>
                                                    <div className="col-md-9 col-xs-9">
                                                        <div className="card-body">
                                                            <h4 className="card-title">{film.title}</h4>
                                                            <p className="card-text ml-3">
                                                                &nbsp; Episode number : {film.episode_id}<br />
                                                            &nbsp; Release date : {film.release_date}<br />
                                                            &nbsp; Director : {film.director}<br />
                                                            &nbsp; Opening crawl : {film.opening_crawl}<br />
                                                            </p>
                                                            <button className="btn btn-primary" onClick={() => history.goBack()}>Back to Films</button>
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

export default FilmsFilm;
