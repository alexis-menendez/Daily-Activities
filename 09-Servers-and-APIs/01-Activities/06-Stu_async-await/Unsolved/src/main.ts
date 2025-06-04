import './style.css';

const userFormEl = document.getElementById('user-form') as HTMLFormElement;
const languageButtonsEl = document.getElementById(
  'language-buttons'
) as HTMLDivElement;
const nameInputEl = document.getElementById('username') as HTMLInputElement;
const repoContainerEl = document.getElementById(
  'repos-container'
) as HTMLDivElement;
const repoSearchTerm = document.getElementById(
  'repo-search-term'
) as HTMLSpanElement;

const formSubmitHandler = (event: any) => {
  event.preventDefault();

  const username = nameInputEl.value.trim();

  if (username) {
    repoContainerEl.textContent = '';
    nameInputEl.value = '';

    getUserRepos(username);
  } else {
    alert('Please enter a GitHub username');
  }
};

const buttonClickHandler = (event: any) => {
  const language = event.target.getAttribute('data-language');

  if (language) {
    repoContainerEl.textContent = '';
    getFeaturedRepos(language);
  }
};

const getUserRepos = (user: string) => {
  const apiUrl = `https://api.github.com/users/${user}/repos`;

  fetch(apiUrl).then((response) => {
    if (!response.ok) {
      alert(`Error:${response.statusText}`);
    } else {
      response.json().then((data) => {
        displayRepos(data, user);
      });
    }
  });
};

const getFeaturedRepos = (language: string) => {
  const apiUrl = `https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`;

  fetch(apiUrl).then((response) => {
    if (!response.ok) {
      alert(`Error:${response.statusText}`);
    } else {
      response.json().then((data) => {
        displayRepos(data.items, language);
      });
    }
  });
};

const displayRepos = (repos: any[], searchTerm: string) => {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (const repoObj of repos) {
    createRepoCard(repoObj);
  }
};

const createRepoCard = (repo: any) => {
  const repoName = `${repo.owner.login}/${repo.name}`;

  const repoEl = document.createElement('div');
  repoEl.classList.add(
    'list-item',
    'flex-row',
    'justify-space-between',
    'align-center'
  );

  const titleEl = document.createElement('span');
  titleEl.textContent = repoName;

  repoEl.appendChild(titleEl);

  const statusEl = document.createElement('span');
  statusEl.classList.add('flex-row', 'align-center');

  if (repo.open_issues_count > 0) {
    statusEl.innerHTML = `<i class='fas fa-times status-icon icon-danger'></i>${repo.open_issues_count} issue(s)`;
  } else {
    statusEl.innerHTML =
      "<i class='fas fa-check-square status-icon icon-success'></i>";
  }

  repoEl.appendChild(statusEl);

  repoContainerEl.appendChild(repoEl);
};

userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);
