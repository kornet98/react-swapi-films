import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';


const PersonItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  list-style-type: none;
  background: ${({ theme }) => theme.background};
  opacity: 0.7;
  transition: all 0.50s ease;
  &:hover {
    opacity: 0.9;
  }
  &:last-child {
    border-bottom: none;
  }
`;
const Photo = styled.div`
  margin: 20px;
  width: 100px;
  height: 100px;
  background: #000;
`;
const Name = styled.h3`
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
	text-decoration: none;
  display: flex;
`

function PersonListItem({ name, id }) {
  return (
    <PersonItem>
      <StyledLink to={`/people/${id}`} key={id}>
        <Photo>
        </Photo>
        <Name>{name}</Name>
      </StyledLink>
    </PersonItem>
  );
}

PersonListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

export default PersonListItem
