import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link, StaticRouter } from "react-router-dom";

const Films = props => {
    const { store, actions } = useContext(Context);
    const { films } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.films ?
                                store.films.results.map((film, i) => {
                                    const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (

                                        <div className="card bg-dark text-white" key={i} id="card-films" >
                                            <img src={"img/" + img} className="card-img" alt="..." />
                                            <div className="row no-gutters">
                                                &nbsp;<h5 className="card-title">{film.title}</h5>
                                                <div className="container ">
                                                    <p><Link to={"/films/" + film.title} className=" btn btn-danger">More...</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
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

            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    {
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
                    }
                    {
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
                    }

                </div>
            </div>
        </>
    )
}


export default Films;
