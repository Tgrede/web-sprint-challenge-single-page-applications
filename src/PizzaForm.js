import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

export default function PizzaForm(props) {
     const {values, change, submit} = props
     const history = useHistory()

     const onChange = (e) => {
          const {name, value, type, checked} = e.target
          const valueToUse = type === 'checkbox' ? checked : value;
          change(name, valueToUse)
     }

     const onSubmit = (e) =>{
          e.preventDefault()
          submit()
     }

     return (
          <StyledForm onSubmit={onSubmit}>

               <h3>Choose Size</h3>
               <label>Size:
                  <select name='size' onChange={onChange}>
                       <option value=''>--- Select ---</option>
                       <option value='small'>Small (8")</option>
                       <option value='medium'>Medium (12")</option>
                       <option value='large'>Large (14")</option>
                       <option value='extra'>Extra (18")</option>
                  </select>
               </label>

               
               <h3>Choose Sauce</h3>
               <StyledLabel>
                    Original Red
                    <input type='radio' name='sauce' onChange={onChange} value='originalRed' />
               </StyledLabel>
               <StyledLabel>
                    Garlic Ranch
                    <input type='radio' name='sauce' onChange={onChange} value='garlicRanch' />
               </StyledLabel>
               <StyledLabel>
                    BBQ Sauce
                    <input type='radio' name='sauce' onChange={onChange} value='bbq' />
               </StyledLabel>
               <StyledLabel>
                    Spinach Alfredo
                    <input type='radio' name='sauce' onChange={onChange} value='spinachAlfredo' />     
               </StyledLabel> 

               <h3>Choose Toppings</h3>
               <label>
                    Pepperoni
                    <input type='checkbox' name='pepperoni' onChange={onChange} checked={values.pepperoni}></input>
               </label>
               <label>
                    Sausage
                    <input type='checkbox' name='sausage' onChange={onChange}checked={values.sausage}></input>
               </label>
               <label>
                    Canadian Bacon
                    <input type='checkbox' name='canadianBacon' onChange={onChange} checked={values.canadianBacon}></input>
               </label>
               <label>
                    Spicy Italian Sausage
                    <input type='checkbox' name='spicyItalianSausage' onChange={onChange} checked={values.spicyItalianSausage}></input>
               </label>
               <label>
                    Grilled Chicken
                    <input type='checkbox' name='grilledChicken' onChange={onChange} checked={values.grilledChicken}></input>
               </label>
               <label>
                    Onions
                    <input type='checkbox' name='onions' onChange={onChange} checked={values.onions}></input>
               </label>
               <label>Green Pepper
                    <input type='checkbox' name='greenPepper' onChange={onChange} checked={values.greenPepper}></input>
               </label>
               <label>Diced Tomatos
                    <input type='checkbox' name='dicedTomatos' onChange={onChange} checked={values.dicedTomatos}></input>
               </label>
               <label>Black Olives
                    <input type='checkbox' name='blackOlives' onChange={onChange} checked={values.blackOlives}></input>
               </label>
               <label>Roasted Garlic
                    <input type='checkbox' name='roastedGarlic' onChange={onChange} checked={values.roastedGarlic}></input>
               </label>
               <label>Artichoke Hearts
                    <input type='checkbox' name='artichokeHearts' onChange={onChange} checked={values.artichokeHearts}></input>
               </label>
               <label>Three Cheese
                    <input type='checkbox' name='threeCheese' onChange={onChange} checked={values.threeCheese}></input>
               </label>
               <label>Pineapple
                    <input type='checkbox' name='pineapple' onChange={onChange} checked={values.pineapple}></input>
               </label>
               <label>Extra Cheese
                    <input type='checkbox' name='extraCheese' onChange={onChange} checked={values.extraCheese}></input>
               </label>

               <h3>Substitution</h3>
               <label>Gluten Free Crust (+ $1.00)
                    <input type='checkbox' name='gluten_free' onChange={onChange}></input>
               </label>

               <h3>Special Instructions</h3>
               <label>
                    <input type='text' name='special' onChange={onChange}></input>
               </label>
               <div>
                    <label>
                         <h3>Add item to order</h3>
                         <input type='number' name='quantity' onChange={onChange}></input>
                    </label>

                    <button type='submit' onClick={() => {
                         submit()
                         history.push('/pizza/confirmation')
                         }} >Add to Order!</button>
               </div>
          </StyledForm>
     )
}

const StyledForm = styled.form`
     display:flex;
     flex-direction:column;
     
     border:1px solid black;
`
const StyledLabel = styled.label`
     display:flex;
     align-items:center;
`