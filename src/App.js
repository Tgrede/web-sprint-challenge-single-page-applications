import React, {useState} from "react";
import HomePage from './HomePage'
import PizzaCreatePage from './PizzaCreatePage'
import {Route, Link, Switch} from 'react-router-dom'
import styled from 'styled-components'
import PizzaConfirmation from "./PizzaConfirmation";


const initialPizzas = []
const initialFormValues = {
     size: '',
     sauce: '',
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

export default function App() {

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
    <div>
      <StyledHeader>
        <StyledHeaderText>Lambda Eats</StyledHeaderText>
        <Link to={'/'}><button>Home</button></Link>
      </StyledHeader>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route path={'/pizza/confirmation'}>
          <PizzaConfirmation details={pizzas}/>
        </Route>
        <Route path={'/pizza'}>
          <PizzaCreatePage values={formValues} submit={onSubmit} change={onChange} />
        </Route>

      </Switch>
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

