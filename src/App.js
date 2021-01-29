import React, {useState, useEffect} from "react";
import HomePage from './HomePage'
import PizzaCreatePage from './PizzaCreatePage'
import {Route, Link, Switch} from 'react-router-dom'
import styled from 'styled-components'
import PizzaConfirmation from "./PizzaConfirmation";
import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'


const initialPizzas = []
const initialFormValues = {
     username: '',
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
const initialFormErrors = {
  username: '',
}
const initialDisabled = true

export default function App() {

  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);

  const onChange = (name, value) =>{
   if(name === 'username') {
   yup
   .reach(schema, name)
   .validate(value)
   .then(() => {
     setFormErrors({
       ...formErrors,
       [name]: '',
     })
   })
   .catch((err) => {
     setFormErrors({
       ...formErrors,
       [name]: err.errors[0],
     })
   })
  }
   setFormValues({
     ...formValues,
     [name]: value,
   })
}
const postNewPizza = (newPizza) => {
  axios
  .post('https://reqres.in/api/users', newPizza)
  .then((res) => {
    setPizzas([res.data, ...pizzas])
    setFormValues(initialFormValues)
  })
  .catch((err) => {
    console.log(err)
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
   postNewPizza(newPizza)
} 
useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);

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
          <PizzaCreatePage disabled={disabled} values={formValues} submit={onSubmit} change={onChange} />
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

