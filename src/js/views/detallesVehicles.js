import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vehiculo1 from "../../img/Sandcrawler.webp";
import vehiculo2 from "../../img/T-16_Skyhopper.webp";
import vehiculo3 from "../../img/X-34 landspeeder.webp";
import vehiculo4 from "../../img/Snowspeeder.webp";
import vehiculo5 from "../../img/Storm IV Twin-Pod cloud car.png";
import vehiculo6 from "../../img/Sail_Barge.webp";

export const DetallesVehicles = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.VehiclesDetailsFetch(id);
    }, [id]);

    const vehicleDetails = store.vehicleDetails;
    const properties = vehicleDetails?.properties;

    return (
        <div className="container d-flex justify-content-center mt-5">
            {properties ? (
                <div className="card mb-3" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    borderColor: "black",
                    borderStyle: "solid"
                }}>
                    <div className="row g-0">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                                className="img-fluid"
                                alt={vehicleDetails.properties.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    const vehicleName = vehicleDetails.properties.name.toLowerCase();
                                    e.target.src =
                                        vehicleName === "sand crawler" ? vehiculo1 :
                                            vehicleName === "t-16 skyhopper" ? vehiculo2 :
                                                vehicleName === "x-34 landspeeder" ? vehiculo3 :
                                                    vehicleName === "snowspeeder" ? vehiculo4 :
                                                        vehicleName === "storm iv twin-pod cloud car" ? vehiculo5 :
                                                            vehicleName === "sail barge" ? vehiculo6 : "";
                                }}
                            />
                        </div>
                        <div className="col-md-6 text-center d-flex align-items-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{properties.name}</h3>
                                <br />
                                <p className="card-text">
                                    <h6>
                                        <small>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </small>
                                    </h6>
                                    <br /><br />
                                    <table className="table text-white">
                                        <tbody>
                                            <tr>
                                                <td><strong>Model:</strong> {properties.model}</td>
                                                <td><strong>Manufacturer:</strong> {properties.manufacturer}</td>
                                                <td><strong>Cost in Credits:</strong> {properties.cost_in_credits}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Length:</strong> {properties.length} meters</td>
                                                <td><strong>Max Speed:</strong> {properties.max_atmosphering_speed} km/h</td>
                                                <td><strong>Crew:</strong> {properties.crew}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"><strong>Passengers:</strong> {properties.passengers}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                                <p className="card-text text-center" style={{ paddingTop: "150px " }}>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        style={{ marginLeft: "80px", color: "#f0e68c" }}
                                        onClick={() => actions.Favorite({
                                            name: properties.name,
                                            id: id,
                                            type: "vehicle"
                                        })}
                                    >
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-white">Loading details...</p>
            )}
        </div>
    );
};