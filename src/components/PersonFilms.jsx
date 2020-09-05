import React, { useState, useEffect } from 'react'
import axios from "axios";
import FilmsItem from './FilmsItem.jsx'

function PersonFilms({ filmsUrls }) {
	const [films, setfilms] = useState([]);

	useEffect(() => {
		axios.all(filmsUrls.map(url => axios.get(url)))
			.then(axios.spread(function (...res) {
				setfilms(res)
			}));

	}, [setfilms]);



	return (
		<div>
			{films && films.map(film =>
				<FilmsItem
					title={film.data.title}
					url={film.data.url}
					key={film.data.episode_id}
				/>)}
		</div>
	)
}

export default PersonFilms
