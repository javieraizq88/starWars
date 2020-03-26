import React, { useContext } from "react";
import { Context } from "../components/store/appContext";


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
                                    const img = vehicle.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="col-mb-4" key={i} >
                                            <div className="card-vehic">
                                                <img src={"img/" + img} className="card-img-top" id="imagen-vehicles" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{vehicle.name} </h5>
                                                    <p className="card-text">Model : {vehicle.model} </p>
                                                   
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

export default Vehicles;

