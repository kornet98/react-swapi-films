import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import styled from "styled-components";

import FilmsItem from './FilmsItem.jsx';



const FilmList = styled.ul`
  margin: 0;
  padding: 0;
`

function PersonFilms({ filmsUrls }) {

  const [films, setfilms] = useState([]);

  useEffect(() => {
    axios.all(filmsUrls.map(url => axios.get(url)))
      .then(axios.spread(function (...res) {
        setfilms(res)
      }));
  }, [setfilms, filmsUrls]);

  return (
    <FilmList>
      {films && films.map(film =>
        <FilmsItem
          title={film.data.title}
          url={film.data.url}
          key={film.data.episode_id}
        />)}
    </FilmList>
  )
}

PersonFilms.propTypes = {
  filmsUrls: PropTypes.arrayOf(PropTypes.string)
};

export default PersonFilms
