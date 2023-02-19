const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Planet:[],
			Character:[]
			
		},
		actions: {
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
