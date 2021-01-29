import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import pizza from './Pizza.jpg'

export default function HomePage(props) {
     return (
          <div>
               <StyledPizzaBanner >
                    <StyledHeader>Your favorite food, delivered while coding</StyledHeader>
                    <StyledPizzaPic src={pizza} />
                    <Link to='/pizza'><StyledPizzaButton>Want Pizza?</StyledPizzaButton></Link>
               </StyledPizzaBanner>
          </div>
     )
}

const StyledPizzaBanner = styled.div`
     position:relative;
     display:flex;
     flex-direction:column;
     align-items:center;
`
const StyledPizzaPic = styled.img`
     max-width:80%;
     height:auto;
     border-radius:5px;
     box-shadow:2px 2px 2px 2px; 
`
const StyledHeader = styled.h2`
     text-align: center;
`
const StyledPizzaButton = styled.button`
     position: absolute;
     top:60%;
     left:50%;
     transform: translate(-50%, -50%);
     padding: 8px 16px;
`
