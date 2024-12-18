import React from "react";
import "../../styles/home.css";
import { People } from "../component/people.jsx";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<People />
		<Planets />
		<Vehicles />
	</div>
);