import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
	width:100%;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const PosterWrapper = styled.div`
	width: 500px;
  color: #ebebca;
  background-color: ${({ theme }) => theme.left};
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const FilmWrapper = styled.div`
	width:100%;
  background: ${({ theme }) => theme.right};
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
    width:100%;
  }
`;
const Poster = styled.div`
	max-width: 100%;
	height: 350px;
	background: #000;
	margin: 20px;
`;
const Data = styled.p`
	font-size: 20px;
	margin: 20px;
	color: #df691a;s
`;
const Title = styled.h2`
	font-size: 30px;
	margin: 30px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    margin: 15px;
  }
  @media (max-width: 576px) {
    font-size: 25px;
  }
`;
const Description = styled.p`
	font-size: 20px;
	margin: 20px;
	color: ${({ theme }) => theme.text};
`;


function SingleFilm() {

  const [film, setFilm] = useState();

  let { filmId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${filmId}/`)
      .then((res) => {
        setFilm(res.data);
      });
  }, [setFilm, filmId]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <PosterWrapper>
        <Poster></Poster>
        <Data>Director: {film.director}</Data>
        <Data>Producers : {film.producer}</Data>
        <Data>Release date  : {film.release_date}</Data>
      </PosterWrapper>
      <FilmWrapper>
        <Title>
          Episod {film.episode_id}: {film.title}
        </Title>
        <Description>
          {film.opening_crawl}
        </Description>
      </FilmWrapper>
    </Wrapper>
  );
}

export default SingleFilm;
