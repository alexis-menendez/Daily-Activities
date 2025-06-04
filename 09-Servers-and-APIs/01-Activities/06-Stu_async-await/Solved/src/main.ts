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

const formSubmitHandler = async (event: any) => {
  event.preventDefault();

  const username = nameInputEl.value.trim();

  if (username) {
    repoContainerEl.textContent = '';
    nameInputEl.value = '';

    const userRepos = await getUserRepos(username);
    displayRepos(userRepos, username);
  } else {
    alert('Please enter a GitHub username');
  }
};

const buttonClickHandler = async (event: any) => {
  const language = event.target.getAttribute('data-language');

  if (language) {
    repoContainerEl.textContent = '';
    const featuredRepos = await getFeaturedRepos(language);

    displayRepos(featuredRepos.items, language);
  }
};

const getUserRepos = async (user: string) => {
  const apiUrl = `https://api.github.com/users/${user}/repos`;

  const userRepos = await fetch(apiUrl);

  if (!userRepos.ok) {
    alert(`Error:${userRepos.statusText}`);
  }

  return await userRepos.json();
};

const getFeaturedRepos = async (language: string) => {
  const apiUrl = `https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`;

  const featuredRepos = await fetch(apiUrl);

  if (!featuredRepos.ok) {
    alert(`Error:${featuredRepos.statusText}`);
  }

  return await featuredRepos.json();
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

  const repoEl = document.createElement('a');
  repoEl.classList.add(
    'list-item',
    'flex-row',
    'justify-space-between',
    'align-center'
  );
  repoEl.setAttribute('href', `./single-repo.html?repo=${repoName}`);

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
