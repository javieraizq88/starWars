import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";
/* RESPONSIVE */
const Films = props => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.films &&
                            store.films.results.length > 0 ?
                                store.films.results.map((film, i) => {
                                    const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (

                                        <div className="card mt-3" id="card-film" key={i} /*id="card-general-film"*/ >
                                            <div className="row no-gutters" >
                                            <div className="col-md-3 col-xs-3">
                                            <img src={"http://localhost:3000/img/films/" + img} className="card-img"  />
                                            </div>
                                            <div className="col-md-9 col-xs-9">
                                                <div className="card-body">
                                                    <h4 className="card-header text-center">{film.title}</h4>
                                                    <p className="card-text ml-3 text-justify">
                                                        <br/>
                                                    &nbsp; Episode number: {film.episode_id}<br /> 
                                                    &nbsp; Release date: {film.release_date}<br />
                                                    &nbsp; Director: {film.director}<br />
                                                    &nbsp; Producer: {film.producer}<br />
                                                    &nbsp; Opening crawl: {film.opening_crawl}<br />
                                                    </p>

                                                    {/* <p><Link to={"/films/" + film.title} className=" btn btn-danger">More...</Link></p> */}
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
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

            <div className="row">
                <div className="col-md-12 col-xs-12 d-flex justify-content-between">
                    {/* {
                        !!store.films &&
                        store.films.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getFilms(store.films.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getFilms(store.films.previous)}>
                                    Previous
                                </button>
                            )
                    } */}
                    {/* {
                        !!store.films &&
                        store.films.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getFilms(store.films.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getFilms(store.films.next)}>
                                    Next
                                </button>
                            )
                    } */}

                </div>
            </div>
        </>
    )
}

export default Films;
