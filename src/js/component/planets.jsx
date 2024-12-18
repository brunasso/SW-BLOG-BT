import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Tatooine from "../../img/Tatooine.webp";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.PlanetsFetch();
    }, [actions]);

    return (
        <div>
            <h3 className="text-white" style={{ textAlign: "left", marginLeft: "28px" }}>Planets</h3>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "290px", height: "535px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={planet.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = Tatooine;
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                    <strong>url:</strong> {planet.url || "No existe URL"} <br />
                                </p>
                                <div style={{ position: "absolute", display: "flex", justifyContent: "center", bottom: "1px", left: "50%", transform: "translateX(-50%)", width: "100%" }}>
                                    <Link to={`/detallesPlanets/${index + 1}`}>
                                        <button type="button" className="btn btn-dark" style={{ marginBottom: "10px" }}>See details</button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn btn-dark" style={{ marginLeft: "3px", color: "#f0e68c", marginBottom: "10px" }}
                                        onClick={() => actions.Favorite(planet)}
                                    >
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <><p className="text-center text-white">Loading planets </p>
                        <p class="spinner-border spinner-border-sm text-light" style={{ marginTop: "5px" }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};