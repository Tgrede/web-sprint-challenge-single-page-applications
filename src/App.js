import React from "react";
import HomePage from './HomePage'
import PizzaCreatePage from './PizzaCreatePage'
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components'


export default function App() {
  return (
    <div>
      <StyledHeader>
        <StyledHeaderText>Lambda Eats</StyledHeaderText>
        <Link to={'/'}><button>Home</button></Link>
      </StyledHeader>
      <Route exact path={'/'}>
        <HomePage />
      </Route>
      <Route path={'/pizza'}>
        <PizzaCreatePage />
      </Route>
    </div>
  );
};

const StyledHeaderText = styled.h1`
  color: crimson;
`
const StyledHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`

