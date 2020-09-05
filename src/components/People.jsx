import React, { useState, useEffect, useCallback } from 'react'
import axios from "axios";
// import { Link } from "react-router-dom";

import getIdFromUrl from '../module/getIdFromUrl.js'

import PersonListItem from './PersonListItem.jsx'
import SearchForm from './SearchForm.jsx'

function People() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		axios.get('https://swapi.dev/api/people/')
			.then((res) => {
				setPeople(res.data.results);
			});
	}, [setPeople]);



	const toPerson = useCallback(person => <PersonListItem name={person.name} id={getIdFromUrl(person.url)} key={getIdFromUrl(person.url)} />);

	return (
		<div>
			<SearchForm />
			{people.map(toPerson)}
		</div>
	);
}

export default People
