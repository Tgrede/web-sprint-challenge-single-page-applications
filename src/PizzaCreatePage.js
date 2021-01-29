import React from 'react'
import pizza from './Pizza.jpg'
import styled from 'styled-components'

export default function PizzaCreatePage(props) {
     return (
          <div>
               <StyledHeader>Build Your Own Pizza</StyledHeader>
               <StyledPizzaPic src={pizza}/>
               <h2>Build Your Own Pizza</h2>
               
          </div>
     )
}

const StyledPizzaPic = styled.img`
     max-width:100%;
     height:auto;
     border-radius:5px;
     box-shadow:2px 2px 2px 2px; 
`

const StyledHeader = styled.h2`
     text-align: center;
`
