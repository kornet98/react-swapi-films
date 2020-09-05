import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleFilm(props) {
	const [film, setFilm] = useState();

	let { filmId } = useParams();


	//console.log(filmId);

	useEffect(() => {
		axios.get(`https://swapi.dev/api/films/${filmId}/`)
			.then((res) => {
				setFilm(res.data);
			});
	}, [setFilm]);

	if (!film) {
		return <div>Loading...</div>;
	}

	console.log(film);
	return (
		<div>
			<div>title: {film.title}</div>
			<div>director: {film.director}</div>
			<div>producer : {film.producer}</div>
		</div>
	);
}

export default SingleFilm
