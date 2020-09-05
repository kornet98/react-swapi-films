import React, { useState } from 'react';
//import axios from "axios";

//import SearchPage from '../SearchPage.jsx';
import { Redirect } from 'react-router-dom';

const SearchForm = () => {

	const [searchTerm, setSearchTerm] = useState('');
	const [isSubmited, setIsSubmited] = useState(false);

	const handleChange = event => {
		setSearchTerm(event.target.value)
	}



	const handleSubmit = event => {
		setIsSubmited(true)
		//console.log(searchPeople);
		event.preventDefault();
	}
	//const id = Number(match.params.id)
	//const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} key={index} />);
	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="search-form">
				<input type="text" value={searchTerm} onChange={handleChange} min='2' />
				<input type="submit" value="Search" />
			</form>
			{isSubmited &&
				<Redirect to={{
					pathname: '/search',
					state: {
						searchTerm: searchTerm
					}
				}} />
			}
			{/* {searchPeople.length > 0 &&
				<Redirect to={{
					pathname: '/search',
					state: { dataItems: searchPeople }
				}} />
			} */}
		</div>
	)
}

export default SearchForm;
