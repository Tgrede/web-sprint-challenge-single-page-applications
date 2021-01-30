describe('tests', () => {
     beforeEach(() => {
          cy.visit('http://localhost:3000')
     })

     const nameInput = () => cy.get('[data-cy=username]')
     const pizzaButton = () => cy.get('[data-cy=pizzaButton]')
     const pepperoniBox = () => cy.get('[data-cy=pepperoni]')
     const submit = () => cy.get('[data-cy=submit]')

     it('sanity test', () => {
          expect(2+2).to.equal(4)
     })

     it('can type into box', () => {
          pizzaButton().click()
          nameInput().should('exist')
          nameInput().should('have.value', '')
          .type('Trenten')
          .should('have.value', 'Trenten')
     })
     it('can select multiple toppings', () => {
          pizzaButton().click()

          pepperoniBox()
          .should('exist')
          pepperoniBox().check()
          .should('have.value', 'on')

     })
     it('can submit form', () => {
          pizzaButton().click()

          nameInput()
          .should('have.value', '')
          .type('Trenten')
          .should('have.value', 'Trenten')

          submit().click()
     })
})