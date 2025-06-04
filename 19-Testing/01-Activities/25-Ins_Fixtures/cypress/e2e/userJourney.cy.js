describe('User Journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("A user can arrive at the home page where other's thoughts are displayed on the screen", () => {
    cy.visit('http://localhost:3000/');
  }
);
  it("A user can add text to the tech form and should add the content to the page", () => {
    cy.get('form div textarea').type('My thoughts about Cypress!');
    cy.get('form div').eq(1).children().eq(0).type('Paulie!');
    cy.get('form div').eq(2).children().eq(0).click();
    cy.get('.card .card-body').should(($el) => {
      const cards = $el.map((i, el) => {
        return Cypress.$(el).attr('card-body');
      });
      cards.each((i, cardNames) => {
        expect(cardNames).to('be.visible');
      })
    });
  })

  it('A user can click on the join discussion button and navigate to a Comments page', () => {
    cy.get('.card').eq(1).children().eq(2).click();
    cy.location('pathname').should('include', '/thoughts')
  })
});
