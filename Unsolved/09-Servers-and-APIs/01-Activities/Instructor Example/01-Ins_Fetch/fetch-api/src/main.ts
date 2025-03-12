// ! With Vite we can import styles directly into our TypeScript files
import './style.css';

// ! When dynamically generating elements in TypeScript, we need to cast the element to the correct type
const tableBody = document.getElementById(
  'repo-table'
) as HTMLTableSectionElement;
const fetchButton = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  const requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
      for (const repo of data) {
        // Creating elements, tablerow, tabledata, and anchor
        const createTableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = repo.html_url;
        link.href = repo.html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);
