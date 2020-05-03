import React, { useContext } from "react";
import { Context } from "../components/store/appContext";
import { Link } from "react-router-dom";


const VehiclesOne = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;
    const nombreVehiculo = props.match.params.vehicle;

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="row">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((vehicle, i) => {
                                    if (JSON.stringify(vehicle.name) === JSON.stringify(nombreVehiculo)) {
                                        const img = vehicle.name.replace("/", "-").split(" ").join("-").toLowerCase() + ".jpg";
                                        //para que lea el vehiculo que tiene el / dentro del nombre, se agrega REPLACE
                                        //para linkear la imagen de cada character, hay q cambiar "img/" por URL
                                        //el boton vuelve a people por eso no tiene el "/" final
                                        return (
                                            <div className="card m-3" key={i} id="card-planets" >
                                                <div className="row ">
                                                    <div className="col-md-4">
                                                        <img src={"/img/vehicles/" + img} className="card-img" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{vehicle.name}</h5>
                                                            <p className="card-text ml-5">
                                                            Cargo apacity: {vehicle.cargo_capacity} <br/>
                                                            Consumcables: {vehicle.consumables}  <br/> 
                                                            Cost in credits: {vehicle.cost_in_credits} <br/>
                                                            Class: {vehicle.vehicle_class}  <br/>
                                                            Crew: {vehicle.crew} <br/>
                                                            Length: {vehicle.length} <br/>
                                                            Manufacturer: {vehicle.manufacturer}  <br/> 
                                                            Max atmosphering speed: {vehicle.max_atmosphering_speed}<br/> 
                                                            Passengers: {vehicle.passengers} <br/> </p>
                                                            <Link to={"/vehicles"} class="btn btn-primary">Back to Vehicles</Link>
                                                        </div>
                                                    </div>
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

export default VehiclesOne;          