import React from 'react'
import Footer from '../../client/src/components/Footer/index'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })
})
