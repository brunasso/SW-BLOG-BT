import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.PeopleFetch();
        console.log(store.people);
    }, []);

    return (
        <div>
            <h3 className="text-white" style={{ textAlign: "left", marginLeft: "28px" }}>Characters</h3>
            <div className="card-container">
                {store.people && store.people.length > 0 ? (
                    store.people.map((person, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "290px", height: "535px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={person.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300?text=No+Image')}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">
                                    <strong>Gender:</strong> {person.gender || "No existe informacion"} <br />
                                </p>
                                <Link to={`/detallesPerson/${index + 1}`}>
                                    <button type="button" className="btn btn-dark">See details</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-dark" style={{ marginLeft: "3px", color: "#f0e68c" }}
                                    onClick={() => actions.Favorite(person)}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <><p className="text-center text-white">Loading characters </p>
                        <p class="spinner-border spinner-border-sm text-light" style={{ marginTop: "5px" }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </p>
                    </>
                )}
            </div>
        </div >
    );
};