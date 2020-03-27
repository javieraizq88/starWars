import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";


const Vehicles = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((vehicle, i) => {
                                    const img = vehicle.name.replace("/", "-").split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="col-mb-4" key={i} >
                                            <div className="card-vehic">
                                                <img src={"img/" + img} className="card-img-top" id="imagen-vehicles" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{vehicle.name} </h5>
                                                    <Link to={"/vehicles/" + vehicle.name}  class="btn btn-primary">More</Link>
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
                        !!store.vehicles &&
                        store.vehicles.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getVehicles(store.vehicles.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getVehicles(store.vehicles.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.vehicles &&
                        store.vehicles.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getVehicles(store.vehicles.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getVehicles(store.vehicles.next)}>
                                    Next
                                </button>
                            )
                    }

                </div>
            </div>

        </>
    )

}

export default Vehicles;

