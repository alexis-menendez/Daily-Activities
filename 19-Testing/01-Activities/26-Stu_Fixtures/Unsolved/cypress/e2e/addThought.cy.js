describe('Tech Thoughts Website via Fixtures', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should add the new thought without hitting API endpoint', () => {
    cy.fixture('thought').then((fixture) => {
      cy.get('form div textarea').type(fixture.thoughtText);
      cy.get('form div').eq(1).children().eq(0).type(fixture.thoughtAuthor);
      cy.intercept('POST', '/api/thought', {
        statusCode: 201,
        body: fixture
      }).as('mockPostRequest');
    });
    cy.get('form div').eq(2).children().eq(0).click();
    cy.wait('@mockPostRequest').then((intercept) => {
      assert.isNotNull(intercept.response?.body, '1st API call has data');
      // Uncomment below to see the response body from mocked API call.
      // console.log(intercept.response?.body);
      expect(intercept.response?.body).to.have.property('thoughtAuthor', 'Jennifer');
    })
  })
});
