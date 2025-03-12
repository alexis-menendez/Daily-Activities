import { userAPI } from './api';
import type { User } from './api';
import './style.css';

const usersContainer = document.getElementById('users') as HTMLDivElement;
const postContainer = document.getElementById(
  'post-container'
) as HTMLDivElement;
const updateContainer = document.getElementById(
  'update-container'
) as HTMLDivElement;
const deleteContainer = document.getElementById(
  'delete-container'
) as HTMLDivElement;
const fetchButton = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;
const fetchOneButton = document.getElementById(
  'fetch-one-button'
) as HTMLButtonElement;
const deleteButton = document.getElementById(
  'delete-button'
) as HTMLButtonElement;
const userForm = document.getElementById('user-form') as HTMLFormElement;
const updateForm = document.getElementById('update-form') as HTMLFormElement;
const updateFirstNameInput = document.getElementById(
  'update-first-name'
) as HTMLInputElement;
const updateLastNameInput = document.getElementById(
  'update-last-name'
) as HTMLInputElement;
const updateEmailInput = document.getElementById(
  'update-email'
) as HTMLInputElement;
const updateButton = document.getElementById(
  'update-button'
) as HTMLButtonElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;

/*

  ! Render and Helper functions

*/

const renderAllUsers = async () => {
  resetPage();
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

  userName.textContent = `${user.id}: ${user.first_name} ${user.last_name}`;
  userEmail.innerHTML = user.email;

  const userButton = document.createElement('div');
  userButton.classList.add('card', 'card-rounded', 'col-5', 'text-center');

  userButton.append(userName);
  userButton.append(userEmail);

  return userButton;
};

const renderPostResponse = (response: any, user: User) => {
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
  resetPage();

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
  const user: User = await response.json();
  console.log('Fetch response:', user);

  renderPostResponse(response, user);
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
};

const handleUserSearch = async (event: any) => {
  event.preventDefault();

  const userId = Number.parseInt(searchInput.value);
  resetPage(userId);

  if (!userId) {
    throw new Error('Please enter a valid ID');
  }

  const response = await userAPI.getUser(userId);

  if (!response.ok) {
    alert(`User #${userId} not found`);
    searchInput.value = '';
    return;
  }

  const user = await response.json();

  hideUpdateForm(false);
  updateFirstNameInput.value = user.first_name;
  updateLastNameInput.value = user.last_name;
  updateEmailInput.value = user.email;
};

const hideUpdateForm = (state: boolean) => {
  if (state) {
    updateFirstNameInput.classList.add('hidden');
    updateLastNameInput.classList.add('hidden');
    updateEmailInput.classList.add('hidden');
    updateButton.classList.add('hidden');
  } else {
    updateFirstNameInput.classList.remove('hidden');
    updateLastNameInput.classList.remove('hidden');
    updateEmailInput.classList.remove('hidden');
    updateButton.classList.remove('hidden');
  }
};

const handleUserUpdate = async (event: any) => {
  event.preventDefault();

  const updatedUser: User = {
    first_name: updateFirstNameInput.value,
    last_name: updateLastNameInput.value,
    email: updateEmailInput.value,
    id: Number.parseInt(searchInput.value),
  };

  console.log(updatedUser);

  if (!updatedUser.first_name || !updatedUser.last_name || !updatedUser.email) {
    throw new Error('Please fill out all fields');
  }

  const response = await userAPI.updateUser(updatedUser);
  const user = await response.json();
  console.log('Fetch response:', user);

  resetPage();
  renderUpdateResponse(response, user);
};

const renderUpdateResponse = (response: any, user: User) => {
  const updateResponse = document.createElement('p');

  if (!updateContainer) {
    throw new Error('Could not find update container');
  }

  if (!response.ok) {
    updateResponse.classList.add('text-danger');
    updateResponse.textContent = 'Failed to update USER';
    updateContainer.append(updateResponse);
    return;
  }

  updateResponse.classList.add('text-success');
  updateResponse.textContent = `USER successfully updated at ID: ${user.id}`;
  updateContainer.append(updateResponse);
};

const renderDeleteResponse = (response: any, user: User) => {
  const deleteResponse = document.createElement('p');

  if (!deleteContainer) {
    throw new Error('Could not find delete container');
  }

  if (!response.ok) {
    deleteResponse.classList.add('text-danger');
    deleteResponse.textContent = 'Failed to delete USER';
    deleteContainer.append(deleteResponse);
    return;
  }

  deleteResponse.classList.add('text-success');
  deleteResponse.textContent = `USER successfully deleted at ID: ${user.id}`;
  deleteContainer.append(deleteResponse);
};

const handleUserDelete = async (event: any) => {
  event.preventDefault();
  resetPage();
  const deleteInput = document.getElementById(
    'delete-input'
  ) as HTMLInputElement;

  const userId = Number.parseInt(deleteInput.value);

  if (!userId) {
    throw new Error('Please enter a valid ID');
  }

  const findUserResponse = await userAPI.getUser(userId);
  const userToDelete = await findUserResponse.json();

  if (!userToDelete) {
    alert(`User #${userId} not found`);
  }

  const response = await userAPI.deleteUser(userId);
  console.log('Fetch response:', response.status);

  deleteInput.value = '';
  renderDeleteResponse(response, userToDelete);
};

const resetPage = (id?: number) => {
  usersContainer.innerHTML = '';
  postContainer.innerHTML = '';
  updateContainer.innerHTML = '';
  deleteContainer.innerHTML = '';
  hideUpdateForm(true);
  searchInput.value = id ? id.toString() : '';
};

/*

  ! Event Listeners

*/

fetchButton.addEventListener('click', renderAllUsers);
fetchOneButton.addEventListener('click', handleUserSearch);
userForm.addEventListener('submit', handleUserFormSubmit);
updateForm.addEventListener('submit', handleUserUpdate);
deleteButton.addEventListener('click', handleUserDelete);
