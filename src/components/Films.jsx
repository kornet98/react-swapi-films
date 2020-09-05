import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";

import FilmsItem from './FilmsItem.jsx'

function Films() {

	const [films, setfilms] = useState([]);



	useEffect(() => {
		axios.get(`https://swapi.dev/api/films/`)
			.then(res => res.data)
			.then(data => {
				setfilms(data.results);
			})
	}, [setfilms]);

	const toFilm = useCallback((film, index) => <FilmsItem title={film.title} filmId={index + 1} key={index} />);
	console.log(films);

	return (
		<div>
			<div>{films.map(toFilm)}</div>
		</div>
	)
}

export default Films;
