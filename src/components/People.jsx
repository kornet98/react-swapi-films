import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

import getIdFromUrl from '../module/getIdFromUrl.js';
import PersonListItem from './PersonListItem.jsx';

const PeopleList = styled.ul`
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 0;
`

function People() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        setPeople(res.data.results);
      });
  }, [setPeople]);

  return (
    <PeopleList>
      {people.map(person =>
        <PersonListItem
          name={person.name}
          id={getIdFromUrl(person.url)}
          key={getIdFromUrl(person.url)} />)}
    </PeopleList>
  );
}

export default People
