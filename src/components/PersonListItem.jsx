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

function PersonListItem({ name, id }) {
  return (
    <Link to={`/people/${id}`} key={id}>
      <Wrapper>{name}</Wrapper>
    </Link>
  );
}

export default PersonListItem
