describe('API Requests', () => {

  /*
  ! Uncomment during demo of incorrect intercept() usage to force all API responses to not be cached
  beforeEach(() => {
    cy.intercept(
      '/api/thought',
      { middleware: true },
      (req) => {
        req.on('before:response', (res) => {
          // force all API responses to not be cached
          res.headers['cache-control'] = 'no-store'
        })
      }
    )
  })

  */

  const mockThoughts = [
    {
      _id: '1',
      thoughtText: 'This is a test thought',
      thoughtAuthor: 'testAuthor',
      createdAt: 'January 1, 2024',
    },
  ];

  it('should GET all thoughts on page load', () => {
    cy.intercept('GET', '/api/thought', mockThoughts).as('getThoughts');
    cy.visit('/');
    cy.wait('@getThoughts')
      .its('response.body')
      .should('deep.equal', mockThoughts);
  });
});
