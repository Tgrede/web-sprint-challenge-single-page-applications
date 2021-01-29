import React from "react";
import HomePage from './HomePage'
import PizzaCreatePage from './PizzaCreatePage'
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components'


export default function App() {
  return (
    <div>
      <StyledHeader>Lambda Eats</StyledHeader>
      <Route exact path={'/'}>
        <HomePage />
      </Route>
      <Route path={'/pizza'}>
        <PizzaCreatePage />
      </Route>
    </div>
  );
};

const StyledHeader = styled.h1`
  color: crimson;
  
`

