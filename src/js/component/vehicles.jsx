import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import vehiculo1 from "../../img/Sandcrawler.webp";
import vehiculo2 from "../../img/T-16_Skyhopper.webp";
import vehiculo3 from "../../img/X-34 landspeeder.webp";
import vehiculo4 from "../../img/Snowspeeder.webp";
import vehiculo5 from "../../img/Storm IV Twin-Pod cloud car.png";
import vehiculo6 from "../../img/Sail_Barge.webp";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.VehiclesFetch();
    }, [actions]);

    return (
        <div>
            <h3 className="text-white" style={{ textAlign: "left", marginLeft: "28px" }}>Vehicles</h3>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "290px", height: "560px", position: "relative" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={vehicle.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    if (vehicle.name === "Sand Crawler") {
                                        e.target.src = vehiculo1;
                                    } else if (vehicle.name === "T-16 skyhopper") {
                                        e.target.src = vehiculo2;
                                    } else if (vehicle.name === "X-34 landspeeder") {
                                        e.target.src = vehiculo3;
                                    } else if (vehicle.name === "Snowspeeder") {
                                        e.target.src = vehiculo4;
                                    } else if (vehicle.name === "Storm IV Twin-Pod cloud car") {
                                        e.target.src = vehiculo5;
                                    } else if (vehicle.name === "Sail barge") {
                                        e.target.src = vehiculo6;
                                    }
                                }}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">
                                    <strong>URL:</strong> {vehicle.url || "No se encuentra"} <br />
                                </p>
                            </div>
                            <div style={{ position: "absolute", display: "flex", justifyContent: "center", bottom: "1px", left: "50%", transform: "translateX(-50%)", width: "100%" }}>
                                <Link to={`/detallesVehicles/${index + 1}`}>
                                    <button type="button" className="btn btn-dark" style={{ marginBottom: "10px" }}>See details</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-dark" style={{ marginLeft: "3px", color: "#f0e68c", marginBottom: "10px" }}
                                    onClick={() => actions.Favorite(vehicle)}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>

                            </div>
                        </div>
                    ))
                ) : (
                    <><p className="text-center text-white">Loading vehicles </p>
                        <p class="spinner-border spinner-border-sm text-light" style={{ marginTop: "5px" }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </p>
                    </>
                )}
            </div >
        </div >
    );
};