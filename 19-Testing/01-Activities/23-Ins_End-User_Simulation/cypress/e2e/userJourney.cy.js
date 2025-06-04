describe('User Journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("A user can arrive at the home page where other's thoughts are displayed on the screen", () => {
    cy.visit('http://localhost:3000/');
  }
);

  it('A user can click on the join discussion button and navigate to a Comments page', () => {
    cy.get('.card').eq(1).children().eq(2).click();
    cy.location('pathname').should('include', '/thoughts')
  })
});
