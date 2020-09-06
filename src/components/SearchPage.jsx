import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import PersonListItem from './PersonListItem.jsx';
import getIdFromUrl from '../module/getIdFromUrl.js';

function SearchPage() {

  const [searchPeople, setSearchPeople] = useState([]);
  const [loaded, setLoaded] = useState(false)

  let { searchTerm } = useParams();
  const searchUrl = 'https://swapi.dev/api/people/?search=';

  useEffect(() => {
    axios.get(searchUrl + searchTerm)
      .then((res) => {
        setSearchPeople(res.data.results);
        setLoaded(true)
      });
  }, [searchTerm]);

  return (
    <div>
      {
        loaded
        &&
        searchPeople.map(person =>
          <PersonListItem
            name={person.name}
            id={getIdFromUrl(person.url)}
            key={person.url}
          />)
      }
    </div>
  )
}

export default SearchPage;
