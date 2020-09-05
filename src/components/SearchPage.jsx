import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";

import PersonListItem from './PersonListItem.jsx'

import getIdFromUrl from '../module/getIdFromUrl.js'

function SearchPage({ location }) {

	const [searchPeople, setSearchPeople] = useState([]);
	const { searchTerm } = location.state;
	const searchUrl = 'https://swapi.dev/api/people/?search='

	useEffect(() => {
		axios.get(searchUrl + searchTerm)
			.then((res) => {
				console.log(res.data);
				setSearchPeople(res.data.results);
			});
	}, [setSearchPeople]);


	const toPerson = useCallback(person => <PersonListItem name={person.name} id={getIdFromUrl(person.url)} key={person.url} />);

	return (
		<div>
			{searchPeople.length > 0 ? searchPeople.map(toPerson) : 'Sorry!!! There is no person whis such name:((('}
		</div>
	)
}

export default SearchPage;
