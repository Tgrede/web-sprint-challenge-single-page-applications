import React, {useState} from 'react'
import pizza from './Pizza.jpg'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'

export default function PizzaCreatePage(props) {
     const {values, submit, change, disabled} = props

     return (
          <StyledPizzaPage>
               <StyledHeader>Build Your Own Pizza</StyledHeader>
               <StyledPizzaPic src={pizza}/>
               <h2>Build Your Own Pizza</h2>
               <PizzaForm disabled={disabled} values={values} submit={submit} change={change}/> 
          </StyledPizzaPage>
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

const StyledPizzaPage = styled.div`
     width:70%;
     margin:auto;
`
