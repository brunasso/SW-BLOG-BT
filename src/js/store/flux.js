const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: null,
			vehicles: [],
			vehicleDetails: null,
			planets: [],
			planetDetails: null,
			favorites: [],
		},
		actions: {
			PeopleFetch: async () => {
				try {
					const res = await fetch("https://swapi.tech/api/people");
					const data = await res.json();
					console.log("Datos de People:", data);
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error fetching people list:", error);
				}
			},

			PeopleDetailsFetch: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await res.json();
					setStore({ peopleDetails: data.result });
				} catch (error) {
					console.error("Error fetching person details:", error);
				}
			},

			VehiclesFetch: async () => {
				try {
					const res = await fetch("https://swapi.tech/api/vehicles");
					const data = await res.json();
					setStore({ vehicles: data.results });
					console.log(vehicles)
				} catch (error) {
					console.error("Error fetching vehicles list:", error);
				}
			},

			VehiclesDetailsFetch: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
					const data = await res.json();
					setStore({ vehicleDetails: data.result });
				} catch (error) {
					console.error("Error fetching vehicle details:", error);
				}
			},

			PlanetsFetch: async () => {
				try {
					const res = await fetch("https://swapi.tech/api/planets");
					if (res.ok) {
						const data = await res.json();
						setStore({ planets: data.results });
					}
				} catch (error) {
					console.error("Error fetching planets list:", error);
				}
			},

			PlanetsDetailsFetch: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const data = await res.json();
					setStore({ planetDetails: data.result });
				} catch (error) {
					console.error("Error fetching planet details:", error);
				}
			},

			Favorite: (item) => {
				const store = getStore();
				const isFavorite = store.favorites.some(fav => fav.name === item.name);

				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter(fav => fav.name !== item.name)
					});
				} else {
					setStore({
						favorites: [...store.favorites, item]
					});
				}
			}
		}
	};
};

export default getState;