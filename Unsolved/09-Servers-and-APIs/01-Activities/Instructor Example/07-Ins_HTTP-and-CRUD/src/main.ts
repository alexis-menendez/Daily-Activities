import { userAPI } from './api';
import type { User } from './api';
import './style.css';

const usersContainer = document.getElementById('users') as HTMLDivElement;
const postContainer = document.getElementById(
  'post-container'
) as HTMLDivElement;
const fetchButton = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;
const userForm = document.getElementById('user-form') as HTMLFormElement;

/*

  ! Render and Helper functions

*/

const renderAllUsers = async () => {
  const users = await userAPI.getAllUsers();

  for (const user of users) {
    const userButton = createUserCard(user);
    usersContainer.appendChild(userButton);
  }
};

const createUserCard = (user: User) => {
  const userName = document.createElement('h3');
  userName.classList.add('card-header');
  const userEmail = document.createElement('p');
  userEmail.classList.add('card-body');

  userName.textContent = `${user.first_name} ${user.last_name}`;
  userEmail.textContent = user.email;

  const userButton = document.createElement('div');
  userButton.classList.add('card', 'card-rounded', 'col-5', 'text-center');

  userButton.append(userName);
  userButton.append(userEmail);

  return userButton;
};

const renderPostResponse = (response: any, user: any) => {
  const postResponse = document.createElement('p');

  if (!postContainer) {
    throw new Error('Could not find post container');
  }

  if (!response.ok) {
    postResponse.classList.add('text-danger');
    postResponse.textContent = 'Failed to add USER';
    postContainer.append(postResponse);
    return;
  }

  postResponse.classList.add('text-success');
  postResponse.textContent = `USER successfully added at ID: ${user.id}`;
  postContainer.append(postResponse);
};

const handleUserFormSubmit = async (event: any) => {
  event.preventDefault();

  const firstNameInput = document.getElementById(
    'first-name-input'
  ) as HTMLInputElement;
  const lastNameInput = document.getElementById(
    'last-name-input'
  ) as HTMLInputElement;
  const emailInput = document.getElementById('email-input') as HTMLInputElement;

  const newUser: User = {
    first_name: firstNameInput.value,
    last_name: lastNameInput.value,
    email: emailInput.value,
  };

  console.log(newUser);

  if (!newUser.first_name || !newUser.last_name || !newUser.email) {
    throw new Error('Please fill out all fields');
  }

  const response = await userAPI.createUser(newUser);
  const user = await response.json();
  console.log('Fetch response:', user);

  renderPostResponse(response, user);
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
};

fetchButton.addEventListener('click', renderAllUsers);
userForm.addEventListener('submit', handleUserFormSubmit);
