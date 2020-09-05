import React from 'react'

import PersonFilms from './PersonFilms.jsx'

function SinglePerson({ person }) {
	return (
		<div>
			<div>name: {person.name}</div>
			<div>gender: {person.gender}</div>
			<div>height: {person.height}</div>
			<div>hair: {person.hair_color}</div>
			{person.films && <PersonFilms filmsUrls={person.films} />}
		</div>
	)
}

export default SinglePerson
