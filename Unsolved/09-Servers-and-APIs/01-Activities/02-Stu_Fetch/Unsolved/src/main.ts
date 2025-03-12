// ! When dynamically generating elements in TypeScript, we need to cast the element to the correct type
const usersContainer = document.getElementById('users') as HTMLDivElement;
const fetchButton = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;

const REQUEST_URL = 'https://api.github.com/users?per_page=5';

const getUsers = () => {
  // TODO: Add a fetch call to the GitHub API
  // TODO: Then parse the JSON response
  // TODO: Then iterate over the data and generate your HTML
};

const createUserButton = (username: string, url: string) => {
  // Creating a h3 element and a p element
  const userName = document.createElement('h3');
  const userUrl = document.createElement('p');

  // Setting the text of the h3 element and p element.
  userName.textContent = username;
  userUrl.textContent = url;

  // Creating a link element that looks like a button
  const userButton = document.createElement('a');
  userButton.classList.add('btn', 'btn-primary');
  userButton.href = url;
  userButton.target = '_blank';

  // Append will attach the element as the bottom most child.
  userButton.append(userName);
  userButton.append(userUrl);

  return userButton;
};
