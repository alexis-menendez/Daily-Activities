import React from 'react'
import Footer from '../../client/src/components/Footer/index'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })

  it('renders the footer component with the proper content', () => {
    cy.mount(<Footer />)
    cy.get('h4').should('have.text', 'Made with ❤️ by the Tech Thoughts team.');
  })
})
