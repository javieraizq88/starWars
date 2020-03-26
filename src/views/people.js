import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";

const People = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                                                                   <div className="col-md-4 " key={i} >
                                                <div className= "card container">
                                                <div className="card" id="card-people">
                                                    <img src={"img/" + img} className="card-img-top" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{character.name}</h5>
                                                        <Link to={"/people/" + character.name}  class="btn btn-info ">More</Link>
                                                    </div>
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