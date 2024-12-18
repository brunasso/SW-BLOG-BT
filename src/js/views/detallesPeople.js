import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesPeople = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.PeopleDetailsFetch(id);
    }, [id]);

    const personDetails = store.peopleDetails;

    return (
        <div className="container d-flex justify-content-center mt-5">
            {personDetails ? (
                <div className="card mb-3" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)", //Fondo semi-transparente
                    borderColor: "black",
                    borderStyle: "solid"
                }}>

                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                                className="img-fluid rounded-start"
                                alt={personDetails.properties.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x500?text=No+Image')}
                            />
                        </div>
                        <div className="col-md-8 text-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{personDetails.properties.name}</h3> <br />
                                <p className="card-text">
                                    <br /><br />
                                    <table className="table text-white">
                                        <tbody>
                                            <tr>
                                                <td><strong>Height:</strong> {personDetails.properties.height} cm</td>
                                                <td><strong>Mass:</strong> {personDetails.properties.mass} kg</td>
                                                <td><strong>Hair Color:</strong> {personDetails.properties.hair_color}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Skin Color:</strong> {personDetails.properties.skin_color}</td>
                                                <td><strong>Eye Color:</strong> {personDetails.properties.eye_color}</td>
                                                <td><strong>Birth Year:</strong> {personDetails.properties.birth_year}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"><strong>Gender:</strong> {personDetails.properties.gender}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>

                                <p className="card-text text-center" style={{ paddingTop: "150px " }}>
                                    <button
                                        type="button"
                                        className="btn btn-dark" style={{ marginLeft: "180px", color: "#f0e68c" }}
                                        onClick={() => actions.Favorite({
                                            name: personDetails.properties.name,
                                            id: id,
                                            type: "person"
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
                <p className="text-white">Loading details......</p>
            )}
        </div>
    );
};