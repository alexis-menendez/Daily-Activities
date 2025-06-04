describe('Tech Thoughts Website via Fixtures', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // TODO: Add an intercept that will replace the GET request by targeting the fixtures rather than making a full API request. 
    });

  it('should display different fixture thoughts on the homepage', () => {
    // TODO: Add tests to check if the users from the fixtures are visible
  })
});
