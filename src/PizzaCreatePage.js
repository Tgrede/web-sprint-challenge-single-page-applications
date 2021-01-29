import React, {useState} from 'react'
import pizza from './Pizza.jpg'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'
import {Link, Route} from 'react-router-dom'
import PizzaConfirmation from './PizzaConfirmation'

const initialPizzas = []
const initialFormValues = {
     size: '',
     sauce: 'originalRed',
     pepperoni: false,
     sausage: false,
     canadianBacon: false,
     spicyItalianSausage: false,
     grilledChicken: false,
     onions: false,
     greenPepper: false,
     dicedTomatos: false,
     blackOlives: false,
     roastedGarlic: false,
     artichokeHearts: false,
     threeCheese: false,
     pineapple: false,
     extraCheese: false,
     glutenFree: false,
     quantity: '1',
}

export default function PizzaCreatePage(props) {
     const [pizzas, setPizzas] = useState(initialPizzas)
     const [formValues, setFormValues] = useState(initialFormValues)

     const onChange = (name, value) =>{
          setFormValues({
               ...formValues,
               [name]: value
          })
     }
     const onSubmit = () => {
          const newPizza = {
               size: formValues.size,
               sauce: formValues.sauce.trim(),

               pepperoni: formValues.pepperoni,
               sausage: formValues.sausage,
               canadian_bacon: formValues.canadianBacon,
               spicyItalianSausage: formValues.spicyItalianSausage,
               grilledChicken: formValues.grilledChicken,
               onions: formValues.onions,
               greenPepper: formValues.greenPepper,
               dicedTomatos: formValues.dicedTomatos,
               blackOlives: formValues.blackOlives,
               roastedGarlic: formValues.roastedGarlic,
               artichokeHearts: formValues.artichokeHearts,
               threeCheese: formValues.threeCheese,
               pineapple: formValues.pineapple,
               extraCheese: formValues.extraCheese,
               glutenFree: formValues.glutenFree,
               quantity: formValues.quantity,
          }
          setPizzas([newPizza, ...pizzas])
          setFormValues(initialFormValues)
     } 

     return (
          <StyledPizzaPage>
               <StyledHeader>Build Your Own Pizza</StyledHeader>
               <StyledPizzaPic src={pizza}/>
               <h2>Build Your Own Pizza</h2>
               <PizzaForm values={formValues} submit={onSubmit} change={onChange}/>
               
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
