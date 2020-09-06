import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';

import SearchForm from './SearchForm.jsx';


const HeaderComponent = styled.header`
	background-color: transparent;
	padding 30px 0;
`;
const Navigation = styled.div`
	display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const StyledLink = styled(Link)`
	width: 150px;
	padding: 8px 0;
	font-size: 16px;
	text-transform: uppercase;
	color: #fff;
	background-color: #df691a;
	border: 1px solid #df691a;
	padding: 8px;
	text-decoration: none;
  text-align: center;
  @media (max-width: 576px) {
    width: 100px;
  }
`;
const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  width: 150px;
  @media (max-width: 576px) {
    width: 100px;
  }
`

function Header({ toggle, side }) {
  return (
    <HeaderComponent>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <ToggleButton onClick={toggle}>{!side ? 'Dark' : 'Light'} side</ToggleButton>
      </Navigation>
      <SearchForm />
    </HeaderComponent>
  )
}

Header.propTypes = {
  toggle: PropTypes.func,
  side: PropTypes.bool
};

export default Header;
