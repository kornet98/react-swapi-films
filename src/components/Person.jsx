import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import PersonFilms from './PersonFilms.jsx';


const Wrapper = styled.div`
	width: 100%;
	display: flex;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const PersonWrapper = styled.div`
  width: 500px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const FilmsWrapper = styled.div`
	text-align: center;
  width:100%;
  background: ${({ theme }) => theme.right};
  opacity: 0.8;
`;
const Photo = styled.div`
	max-width: 100%;
	height: 350px;
	background: ${({ theme }) => theme.background};
  margin: 20px;
  @media (max-width: 576px) {
    height: 250px;
  }
`;
const Name = styled.h3`
  font-size: 25px;
  color: #df691a;
  margin: 30px;
`;
const Data = styled.p`
	font-size: 20px;
	margin: 15px;
	color: #df691a;
`;
const Title = styled.h2`
	font-size: 30px;
	margin: 30px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 992px) {
    margin: 15px;
  }
`;


function Person() {

  const [person, setPerson] = useState({});
  let { personId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
      .then((res) => {
        setPerson(res.data);
      });
  }, [setPerson, personId]);


  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <PersonWrapper>
        <Name>{person.name}</Name>
        <Photo></Photo>
        <Data>gender: {person.gender}</Data>
        <Data>height: {person.height}</Data>
        <Data>hair: {person.hair_color}</Data>
      </PersonWrapper>
      <FilmsWrapper>
        <Title>Films</Title>
        {person.films && <PersonFilms filmsUrls={person.films} />}
      </FilmsWrapper>
    </Wrapper>
  );
}

export default Person;
