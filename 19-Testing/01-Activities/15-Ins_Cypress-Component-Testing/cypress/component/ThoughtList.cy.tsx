import React from 'react';
import ThoughtList from '../../client/src/components/ThoughtList';

const thoughts = [
  {
    _id: '1',
    thoughtText: 'I love learning about testing',
    thoughtAuthor: 'lernantino',
    createdAt: '2023-10-07T15:22:12Z',
    comments: [{
      _id: '1',
      createdAt: '2023-10-08T16:12:32Z',
      commentText: 'I agree!',
    }, {
      _id: '2',
      createdAt: '2023-10-09T16:12:32Z',
      commentText: 'Me too!',
    }],
  },
  {
    _id: '2',
    thoughtText: 'This is the coolest thing ever',
    thoughtAuthor: 'gamonrarza',
    createdAt: '2024-01-04T18:32:09Z',
    comments: [{
      _id: '3',
      createdAt: '2024-01-05T18:32:09Z',
      commentText: 'Wow, that is really cool!',
    }, {
      _id: '4',
      createdAt: '2024-01-05T18:32:09Z',
      commentText: "I can't wait to try it!",
    }],
  },
];

describe('<ThoughtList />', () => {
  it('should render the ThoughtList component', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ThoughtList 
      thoughts={thoughts} 
      title="Some Feed for Thought(s)..." />)
  });

  it('should render the ThoughtList component with the proper content', () => { 
    cy.mount(<ThoughtList 
      thoughts={thoughts} 
      title="Some Feed for Thought(s)..." />)
    cy.get('h3').should('have.text', 'Some Feed for Thought(s)...')
    cy.get('.card').should('have.length', 2)
    cy.get('.card').first().within(() => {
      cy.get('h4').should('have.text', 'lernantino had this thought on 2023-10-07T15:22:12Z')
      cy.get('p').should('have.text', 'I love learning about testing')
    })
    cy.get('.card').eq(1).within(() => {
      cy.get('h4').should('have.text', 'gamonrarza had this thought on 2024-01-04T18:32:09Z')
      cy.get('p').should('have.text', 'This is the coolest thing ever')
    });
  });
});
