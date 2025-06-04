describe('Tech Thoughts Website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the title text on the screen', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('heading', { name: 'Tech Thoughts' }).should('be.visible');
  });

  it('should display a card on the screen if data is retrieved', () => {
    // TODO: Fill in test logic where test passes if a card is visible.
  });

  it('should display the correct number of cards based on data retrieved', () => {
    cy.get('.card .card-body').should(($el) => {
      const cards = $el.map((i, el) => {
        return Cypress.$(el).attr('card-body');
      });
      cards.each((i, cardNames) => {
        expect(cardNames).to('be.visible');
      })
    })
  });

  it('should not display any content in the thought submission form', () => {
    cy.get('form').findByPlaceholderText('Here\'s a new thought...').should('be.visible');
    cy.get('form div textarea').should('be.empty');
  });

  it('should not display any Comments on the page', () => {
    // TODO: Fill in test logic where Comments should NOT display anywhere. 
  });

});
