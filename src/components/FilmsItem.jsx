import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

function FilmsItem({ title, url }) {

	let filmId = url.slice(-2, -1);

	return (
		<Link to={`/films/${filmId}`} key={filmId}>
			<Wrapper>{title}</Wrapper>
		</Link>
	);
}

export default FilmsItem
