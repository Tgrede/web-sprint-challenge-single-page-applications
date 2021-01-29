import React from 'react'
import styled from 'styled-components'

export default function PizzaForm(props) {
     return (
          <StyledForm>

               <h3>Choose Size</h3>
               <label>
                  <select>
                       <option>--- Select ---</option>
                       <option>Small (8")</option>
                       <option>Medium (12")</option>
                       <option>Large (14")</option>
                       <option>Extra (18")</option>
                  </select>
               </label>

               
               <h3>Choose Sauce</h3>
               <StyledLabel>
                    Original Red
                    <input type='radio' />
               </StyledLabel>
               <StyledLabel>
                    Garlic Ranch
                    <input type='radio' />
               </StyledLabel>
               <StyledLabel>
                    BBQ Sauce
                    <input type='radio' />
               </StyledLabel>
               <StyledLabel>
                    Spinach Alfredo
                    <input type='radio' />     
               </StyledLabel> 

               <h3>Choose Toppings</h3>
               <label>
                    Pepperoni
                    <input type='checkbox'></input>
               </label>
               <label>
                    Sausage
                    <input type='checkbox'></input>
               </label>
               <label>
                    Canadian Bacon
                    <input type='checkbox'></input>
               </label>
               <label>
                    Spicy Italian Sausage
                    <input type='checkbox'></input>
               </label>
               <label>
                    Grilled Chicken
                    <input type='checkbox'></input>
               </label>
               <label>
                    Onions
                    <input type='checkbox'></input>
               </label>
               <label>Green Pepper
                    <input type='checkbox'></input>
               </label>
               <label>Diced Tomatos
                    <input type='checkbox'></input>
               </label>
               <label>Black Olives
                    <input type='checkbox'></input>
               </label>
               <label>Roasted Garlic
                    <input type='checkbox'></input>
               </label>
               <label>Artichoke Hearts
                    <input type='checkbox'></input>
               </label>
               <label>Three Cheese
                    <input type='checkbox'></input>
               </label>
               <label>Pineapple
                    <input type='checkbox'></input>
               </label>
               <label>Extra Cheese
                    <input type='checkbox'></input>
               </label>

               <h3>Substitution</h3>
               <label>Gluten Free Crust (+ $1.00)
                    <input type='checkbox'></input>
               </label>

               <h3>Special Instructions</h3>
               <label>
                    <input type='text'></input>
               </label>
               <div>
                    <label>#
                         <input type='number'></input>
                    </label>

                    <button>Submit Order!</button>
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