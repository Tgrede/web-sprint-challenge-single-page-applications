import React from 'react'
import styled from 'styled-components'

export default function PizzaConfirmation(props) {
     return (
          <StyledConfirm>
               <h2>Thank you <br /> for your order!</h2>
          </StyledConfirm>
     )
}

const StyledConfirm = styled.div`
     display:flex;
     font-size:3rem;
     flex-direction:column;
     text-align:center;
     align-items:center;
`
