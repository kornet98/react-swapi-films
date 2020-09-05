import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

import PersonFilms from './PersonFilms.jsx'


function Person() {

	const [person, setPerson] = useState({});

	//const [isShow, setIsShow] = useState(false);

	let { personId } = useParams();

	useEffect(() => {
		axios.get(`https://swapi.dev/api/people/${personId}/`)
			.then((res) => {
				setPerson(res.data);
			});
	}, [setPerson]);


	if (!person) {
		return <div>Loading...</div>;
	}



	//const toggleFilms = () => setIsShow(true);

	return (
		<div>
			<div>name: {person.name}</div>
			<div>gender: {person.gender}</div>
			<div>height: {person.height}</div>
			<div>hair: {person.hair_color}</div>
			{/* <button onClick={toggleFilms}>Show/Hide Films</button> */}
			{person.films && <PersonFilms filmsUrls={person.films} />}
			{/* {isShow ? <PersonFilms filmsUrls={person.films} /> : null} */}

		</div>
	);
}

export default Person;
