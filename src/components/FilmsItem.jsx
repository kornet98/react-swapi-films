import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';

import getIdFromUrl from '../module/getIdFromUrl.js'

const FilmItem = styled.li`
  padding: 20px;
  border-bottom: 1px solid #fff;
  list-style-type: none;
  cursor: pointer;
  display: flex;
  background: transparent;
  transition: all 0.50s ease;
  &:hover {
    background: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.text};
  }
  &:last-child {
	  border-bottom: none;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.text};
	text-decoration: none;
  display: flex;
  width: 100%;
`;
const Poster = styled.div`
	width: 150px;
	height: 150px;
	background: ${({ theme }) => theme.text};
  margin-right: 25px;
  @media (max-width: 768px) {
    margin-right: 10px;
    width: 80px;
	  height: 80px;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  @media (max-width: 992px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function FilmsItem({ title, url }) {
  return (
    <FilmItem>
      <StyledLink to={`/films/${getIdFromUrl(url)}`} key={getIdFromUrl(url)}>
        <Poster>
        </Poster>
        <Title>{title}</Title>
      </StyledLink>
    </FilmItem>
  );
}


FilmsItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default FilmsItem;
