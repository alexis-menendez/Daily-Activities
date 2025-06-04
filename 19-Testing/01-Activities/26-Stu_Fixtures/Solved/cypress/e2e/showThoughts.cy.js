describe('Tech Thoughts Website via Fixtures', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept({
        method: 'GET',
        url: '/api/thought'
      },
      {
        fixture: 'thoughts.json',
        statusCode: 200
      }
      ).as('fixtureThoughts')
    });

  it('should display different fixture thoughts on the homepage', () => {
    cy.findByText('Jessica').should('be.visible');
    cy.findByText('Paul').should('be.visible');
    cy.findByText('Jack').should('be.visible');
  })
});
