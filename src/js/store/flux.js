const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Planet:[],
			Character:[],
			favorites:[],

			
		},
		actions: {
			addFav:(name,id)=>{
				const store = getStore();
				//console.log("elemento será agregado a fav", name)
				// filtro si elemento ya está en fav, y solo agrega si es que no lo encuentra
				// .length para ver cantidad de coincidencias de elementos encontrados
				//0=false n=true - ! lo niega 
				//if(!store.favorites.filter((fav) => fav.id === id).length)
				console.log("elemento sera agregado a favoritos",name)
				setStore({favorites:[...store.favorites,name]})
				
			},	
			deleteFav: (index) => {
				const store = getStore();
				const newFavorites = [...store.favorites]; // crea una nueva matriz para evitar mutar la matriz original
				newFavorites.splice(index, 1); // elimina el elemento en el índice proporcionado
				setStore({ favorites: newFavorites });
			  },	
			// favorites.filter((value, i) => index != i))

			getCharacter:()=>{
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => setStore({Character:data.results}))

			},
			getPlanet:()=>{
				fetch("https://www.swapi.tech/api/planets")
				.then(response=>response.json())
				.then(data=>{ setStore({Planet:data.results}) 
				})
			 },
		}
	};
};

export default getState;
