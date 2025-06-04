// ! This file will hold all of our API integration tests. Within this test suite will be multiple contexts.
describe('API Requests', () => {

  // ! We define our Types here to ensure that our mock data is structured correctly. In the future we can import these types from a shared location.
  interface Thought {
    _id: string;
    thoughtText: string;
    thoughtAuthor: string;
    createdAt: string;
    comments?: Comment[];
  }

  interface Comment {
    _id: string;
    commentText: string;
  }

  // ! We need to define some mock data for use in our tests
  const mockThoughts: Thought[] = [
    {
      _id: '1',
      thoughtText: 'This is a test thought',
      thoughtAuthor: 'testAuthor',
      createdAt: 'January 1, 2024',
      comments: [
        {
          _id: '1',
          commentText: 'This is a test comment',
        },
      ],
    },
    {
      _id: '2',
      thoughtText: 'This is another test thought',
      thoughtAuthor: 'testAuthor2',
      createdAt: 'January 2, 2024',
    },
  ];

  const newThought = {
    _id: '3',
    thoughtText: 'This is a new test thought',
    thoughtAuthor: 'newTestAuthor',
  };

  // ! This test suite tests the different API requests focused on the Thought model. This suite assumes that data exists when the tests are run.
  context('Thought Requests with starting data', () => {

    // ! This test will run before each test in this context
    beforeEach(() => {
      cy.intercept('GET', '/api/thought', mockThoughts).as('getThoughts');
      cy.visit('/');
    });

    // ! This will test the GET request for all thoughts
    it('should GET all thoughts on page load', () => {

      // ! Since we are intercepting the GET request before each test, we can wait for the request to complete and then check that the response body matches our mock data
      cy.wait('@getThoughts')
        .its('response.body')
        .should('deep.equal', mockThoughts);
    });

    // ! With this test we intercept the GET request for a single thought and then click on a card to navigate to the single thought page and ensure the URL includes the correct ID
    it('should GET a single thought on card click', () => {
      cy.intercept('GET', '/api/thought/1', mockThoughts[0]).as('getThought');

      cy.get('a[href="/thoughts/1"]').click();

      cy.wait('@getThought')
        .its('response.body')
        .should('deep.equal', mockThoughts[0]);

      cy.url().should('include', `/thoughts/${mockThoughts[0]._id}`);
    });

    // ! This test will intercept the POST request for a new thought and ensure that the new thought is added to the list
    it('should POST a new thought to the existing list', () => {

      // ? Since we are avoiding making a request to the server, we need to update our mock data with the new thought
      const updatedThoughts = [...mockThoughts];

      // ? Since the GET interception in the beforeEach always returns the same data, we need to override the GET interception to include the new thought
      cy.intercept('GET', '/api/thought', [...updatedThoughts, newThought]).as('getUpdatedThoughts'); // ? This interception is specifically here so that we can visually see the new thought added to the list when we run the test in the Cypress GUI

      // ! Since we are testing a successful POST request, and we know what the successful response should contain, we can force the response we expect using `req.reply()`
      cy.intercept('POST', '/api/thought', (req) => {
        req.reply({ statusCode: 201, body: req.body });
      }).as('postThought');

      // ? We interact with the page to add a new thought through the form submission
      cy.get('textarea[name="thoughtText"]').type(newThought.thoughtText);
      cy.get('input[name="thoughtAuthor"]').type(newThought.thoughtAuthor);
      // ? When selecting an element in Cypress, it is recommended to use a `data-*` attribute to ensure that the element is unique and and easy to find for testing purposes.
      cy.get('[data-cy="thought-form"]').submit();

      // ! We wait for the POST request to complete and then check that the response status and body matches our expectations.
      cy.wait('@postThought').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        expect(response.body.thoughtText).to.eq(newThought.thoughtText);
        expect(response.body.thoughtAuthor).to.eq(newThought.thoughtAuthor);
      });
    });

    // ! It's good practice to also test for error cases. This test will intercept the POST request and force a 500 status code to simulate a server error
    it('should return an error when POST request fails', () => {
        cy.intercept('POST', '/api/thought', {
          statusCode: 500,
          body: { message: 'Server Error' },
        }).as('postThought');

        // ? We interact with the page to add a new thought through the form submission
        cy.get('textarea[name="thoughtText"]').type(newThought.thoughtText);
        cy.get('input[name="thoughtAuthor"]').type(newThought.thoughtAuthor);
        cy.get('[data-cy="thought-form"]').submit();

        // ! We wait for the POST request to complete and then check that the response status and body matches our expectations.
        cy.wait('@postThought').then(({ response }) => {
          expect(response.statusCode).to.equal(500);
          expect(response.body.message).to.eq('Server Error');
        });
    })
  });
});
