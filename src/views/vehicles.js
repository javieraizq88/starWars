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
                                        <div className="card mt-3 p-1 mx-3 bg-dark text-white mb-3" key={i} id="card-general">
                                            <div className="">
                                                <img src={"img/vehicles/" + img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{vehicle.name}</h5>
                                                    <p><Link to={"/vehicles/" + vehicle.name} className=" btn btn-danger">More...</Link></p>
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
                        store.vehicles.next !== null ?
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

