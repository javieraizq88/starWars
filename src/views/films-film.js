import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, useHistory } from "react-router-dom";
import Titulo from "./titulo";
/* RESPONSIVE */
const FilmsFilm = props => {
    const { store } = useContext(Context);
    //const { films } = store; //llamo a la info de films q esta en store en el AppContext.js
    const nombrefilm = props.match.params.film; //llamo los paranmetros de films
    const history = useHistory();

    return (
<>
        <div id="container-starwars" >
            <Titulo />

            { /* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top "
                id="navbar-starwars" >
                <Link className="navbar-brand"
                    to="/projects/starwars" >
                    Star Wars
         </Link>
                <div className="collapse navbar-collapse "
                    id="navbarNav" >
                    <ul className="navbar-nav mr-auto border-right"
                        id="navbar-item" >
                        <li className="nav-item" >
                            <Link className="nav-link border-left"
                                to="/projects/starwars/people" >
                                People
         </Link>
                        </li>
                        <li className="nav-item active" >
                            <Link className="nav-link border-left"
                                to="/projects/starwars/films" >
                                Films
            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link border-left"
                                to="/projects/starwars/starships" >
                                Starships
        </Link>
                        </li>
                        <li className="nav-item " >
                            <Link className="nav-link border-left"
                                to="/projects/starwars/vehicles" >
                                Vehicles
        </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link border-left"
                                to="/projects/starwars/species" >
                                Species
        </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link border-left"
                                to="/projects/starwars/planets" >
                                Planets
        </Link>
                        </li>
                    </ul>
                    <Link type="button"
                        className="btn btn-success"
                        to="/"
                        id="back-to-jim" >
                        ack to JIM </Link>
                </div>
            </nav>


            <div className="container"
                id="container-film" >
                <div className="row" >
                    <div className="row" > {!!store.films &&
                        store.films.results.length > 0 ?
                        store.films.results.map((film, i) => {
                            const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                            return (

                                <div className="card "
                                    id="card-film"
                                    key={i} >
                                    <div className="row no-gutters" >
                                        <div className="col-md-3 col-xs-3" >
                                            <img src={"/img/films/" + img}
                                                className="card-img"
                                                id="card-img-film"
                                                alt="" />
                                        </div>
                                        <div className="col-md-9 col-xs-9" >
                                            <div className="card-body" >
                                                <h4 className="card-header text-center"
                                                    id="titulo-card-film" > {film.title}
                                                </h4>
                                                <p className="card-text ml-3 text-justify"
                                                    id="text-card-film" >
                                                    <br />
                    &nbsp; Episode number: {film.episode_id} < br />
                    &nbsp; Release date: {film.release_date} < br />
                    &nbsp; Director: {film.director} < br />
                    &nbsp; Producer: {film.producer} < br />
                    &nbsp; Opening crawl: {film.opening_crawl} < br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                        (
                            <div className="col-md-12 col-xs-12 text-center" >
                                <div className="spinner-grow"
                                    role="status" >
                                    <span className="sr-only" >
                                        Loading...
                </span>
                                </div>
                            </div>
                        )
                    } </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default FilmsFilm;
