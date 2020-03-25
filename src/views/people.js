import React, { useContext } from "react";
import { Context } from "../components/store/appContext";

const People = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    console.log(people)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Characters</h1>
                    </div>
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    return (
                                        <div className="col-md-4" key={i} >
                                            <div className="card" >
                                                <img src="http://placehold.it/400x200" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
        </>
    )
}

export default People;