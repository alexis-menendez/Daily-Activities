import './style.css';

// Explain each parameter in comments below.
const REQUEST_URL =
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc';

fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// ! Parameter explanation.

// The per_page parameter will limit the results base per page. In this case, it will return 10 results per page.
// The state parameter represents the current state of the issue. It can be open, closed, or all. In this case, it will return only open issues.
// Sort will order the results based on the parameter given, the date created, updated, or comments. In this case, it will sort the results based on the date created.
// Direction will determine the order of the sort. It can be either asc or desc. In this case, it will sort the results in descending order.

// Therefore, the fetch request will return the 10 most recent open issues from the Node.js repository in descending order based on the date created.
