import React from 'react';
import Header from '../../client/src/components/Header';

describe('<Header />', () => {
  it('shoud render the header component', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });

  it('should render the header component with the proper content', () => {
    cy.mount(<Header />);
    cy.get('h1').should('have.text', 'Tech Thoughts');
    cy.get('p').should('have.text', 'Get into the mind of a programmer.');
  });
});
