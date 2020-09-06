import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";


const Form = styled.form`
	display: flex;
	align-items: center;
`
const Input = styled.input`
	padding: 8px;
	background: #2b3e50;
	color:#fff;
	font-size: 16px;
	border: 1px solid rgba(0,0,0,.15);
		&:focus{
			outline: none;
			border-color: #ebebeb;
    }
`
const ButtonInput = styled.input`
	color: #fff;
	font-size: 16px;
	text-transform: uppercase;
	background-color: #4e5d6c;
	border: 1px solid #4e5d6c;
	padding: 8px;
		&:hover{
			border-color: #ebebeb;
    }
`


const SearchForm = () => {

  const [searchTerm, setSearchTerm] = useState('');

  let history = useHistory();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = event => {
    history.push(`/search/${searchTerm}`);
    setSearchTerm('');
    event.preventDefault();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={searchTerm} onChange={handleChange} min='2' placeholder="Search person..." />
        <ButtonInput type="submit" value='Search' />
      </Form>
    </div>
  )
}

export default SearchForm;
