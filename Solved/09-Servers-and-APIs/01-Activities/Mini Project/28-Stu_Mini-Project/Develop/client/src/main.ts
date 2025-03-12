import './style.css';

// * All necessary DOM elements selected
const searchForm: HTMLFormElement = document.getElementById(
  'search-form'
) as HTMLFormElement;
const searchInput: HTMLInputElement = document.getElementById(
  'search-input'
) as HTMLInputElement;
const eventsContainer = document.getElementById(
  'events-body'
) as HTMLDivElement;
const parksContainer = document.getElementById('parks') as HTMLDivElement;
const searchHistoryContainer = document.getElementById(
  'history'
) as HTMLDivElement;

interface Park {
  id: string;
  fullName: string;
  description: string;
  url: string;
  designation: string;
  images: ParkImage[];
}

interface ParkImage {
  url: string;
  title: string;
  altText: string;
}

interface ParkEvent {
  id: string;
  title: string;
  location: string;
  description: string;
  infourl: string;
  datestart: string;
  dateend: string;
}

interface State {
  id: string;
  name: string;
}

/*

API Calls

*/

// * Function to get parks by state
const getParksByState = async (state: string) => {
  try {
    //TODO: update this function to take in the name of a state and fetch all national parks in that state.  Return the resulting array of parks.
    console.log(
      'complete the `getParksByState` function in cilent/src/main.ts'
    );
  } catch (err) {
    console.log('Error:', err);
    return err;
  }
};

//*Function to delete state from history
const deledStateFromHistory = async (id: string) => {
  //TODO: update this function to take in the id of a saved state and delete that state from search history.
  console.log(
    'complete the `deleteStateFromHistory` function in cilent/src/main.ts'
  );
};

// * Function to get future events by state

const getEventsByState = async (state: string) => {
  //TODO: update this function to take in a state and fetch all events happening in national parks in that state. Return the resulting array of events.
  console.log('complete the `getEventsByState` function in cilent/src/main.ts');
};
// * Function to get saved searches

const getHistory = async () => {
  try {
    //TODO: update this function to fetch all previously searched states. Return the resulting array of states.
    console.log('complete the `getHistory` function in cilent/src/main.ts');
  } catch (err) {
    console.log('Error:', err);
    return err;
  }
};
/*

Render Functions

*/

// * Function to render parks

const renderParks = (parks: Park[]) => {
  parksContainer.innerHTML = '';

  for (const park of parks) {
    const parkCard = createParkCard(park);
    parksContainer.appendChild(parkCard);
  }
};

// * Function to render events

const renderEvent = (event: ParkEvent) => {
  eventsContainer.innerHTML = '';

  const eventHTML = createEventHTML(event);
  eventsContainer.innerHTML = eventHTML;
};

const renderHistory = async (history: State[]) => {
  try {
    if (searchHistoryContainer) {
      searchHistoryContainer.innerHTML = '';

      if (!history.length) {
        searchHistoryContainer.innerHTML =
          '<p class="col-12 text-center">No Previous Search History</p>';
      }

      // * Start at end of history array and count down to show the most recent cities at the top.
      for (let i = history.length - 1; i >= 0; i--) {
        const historyBtn = buildHistoryListItem(history[i]);
        searchHistoryContainer.append(historyBtn);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getAndRenderHistory = async () => {
  try {
    const history = await getHistory();
    renderHistory(history);
  } catch (err) {
    console.log(err);
  }
};

/*

Helper Functions

*/

// * Function to create the park cards

const createParkCard = (park: Park) => {
  const parkCard = document.createElement('div');
  parkCard.classList.add('card', 'mb-3', 'card-rounded');

  const parkCardImage = document.createElement('img');
  parkCardImage.classList.add('card-image');
  parkCardImage.src = park.images[0].url;
  parkCardImage.alt = park.images[0].altText;

  parkCard.appendChild(parkCardImage);

  const parkCardHeader = document.createElement('div');
  parkCardHeader.classList.add('card-header');

  const parkCardLink = document.createElement('a');
  parkCardLink.href = park.url;
  parkCardLink.target = '_blank';

  const parkCardTitle = document.createElement('h5');
  parkCardTitle.classList.add('card-title');
  parkCardTitle.textContent = park.fullName;

  parkCardLink.appendChild(parkCardTitle);

  const parkCardSubTitle = document.createElement('h6');
  parkCardSubTitle.classList.add('card-subtitle', 'text-muted');
  parkCardSubTitle.textContent = park.designation;

  parkCardHeader.appendChild(parkCardLink);
  parkCardHeader.appendChild(parkCardSubTitle);
  parkCard.appendChild(parkCardHeader);

  const parkCardBody = document.createElement('div');
  parkCardBody.classList.add('card-body');

  const parkCardText = document.createElement('p');
  parkCardText.classList.add('card-text');
  parkCardText.textContent = park.description;

  parkCardBody.appendChild(parkCardText);
  parkCard.appendChild(parkCardBody);

  const cardColumn = createCardColumn();
  cardColumn.appendChild(parkCard);

  return cardColumn;
};

const createCardColumn = () => {
  const column = document.createElement('div');
  column.classList.add('col-6', 'mb-4');
  return column;
};

// * Function to create the event HTML

const createEventHTML = (parkEvent: ParkEvent) => {
  const eventHTML = `
    <div class="card-header">
      <h5 class="card-title">${parkEvent.title}</h5>
      <h6 class="card-subtitle text-muted">${parkEvent.location}</h6>
    </div>
    <div class="card-body">
      <p> For more information, visit the event website: <a href="${parkEvent.infourl}" target="_blank">${parkEvent.infourl}</a></p>
      <p class="card-text">${parkEvent.description}</p>
      <p class="card-text">Start Date: ${parkEvent.datestart}</p>
      <p class="card-text">End Date: ${parkEvent.dateend}</p>
    </div>
  `;

  return eventHTML;
};

// * Functions to create previous search buttons

const buildHistoryListItem = (state: State) => {
  const newBtn = createHistoryButton(state.name);
  const deleteBtn = createDeleteButton();
  deleteBtn.dataset.state = JSON.stringify(state);
  const historyDiv = createHistoryDiv();
  historyDiv.append(newBtn, deleteBtn);
  return historyDiv;
};

const createHistoryDiv = () => {
  const div = document.createElement('div');
  div.classList.add('display-flex', 'gap-2', 'col-12', 'm-1');
  return div;
};

const createHistoryButton = (state: string) => {
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-controls', 'today forecast');
  btn.classList.add('history-btn', 'btn', 'btn-secondary', 'col-10');
  btn.textContent = state;

  return btn;
};

const createDeleteButton = () => {
  const delBtnEl = document.createElement('button');
  delBtnEl.setAttribute('type', 'button');
  delBtnEl.classList.add(
    'fas',
    'fa-trash-alt',
    'delete-city',
    'btn',
    'btn-danger',
    'col-2'
  );

  delBtnEl.addEventListener('click', handleDeleteHistoryClick);
  return delBtnEl;
};

/*

Event Handlers

*/

const handleSearchFormSubmit = async (event: Event) => {
  event.preventDefault();

  const state = searchInput.value.trim();
  if (!state) {
    return;
  }

  const parks = await getParksByState(state);
  const events = await getEventsByState(state);
  renderParks(parks);
  if (events.message === 'No events found') {
    eventsContainer.innerHTML = '<h3 class="text-center">No events found</h3>';
    return;
  }
  renderEvent(events);

  searchInput.value = '';
  getAndRenderHistory();
};

const handleSearchHistoryClick = async (event: any) => {
  if (event.target.matches('.history-btn')) {
    const state = event.target.textContent;
    const parks = await getParksByState(state);
    const events = await getEventsByState(state);
    renderParks(parks);
    if (events.message === 'No events found') {
      eventsContainer.innerHTML =
        '<h3 class="text-center">No events found</h3>';
      return;
    }
    renderEvent(events);

    searchInput.value = '';
    getAndRenderHistory();
  }
};

const handleDeleteHistoryClick = (event: any) => {
  event.stopPropagation();
  const stateId = JSON.parse(event.target.getAttribute('data-state')).id;
  console.log(stateId);
  deledStateFromHistory(stateId).then(getAndRenderHistory);
};

/*

Initial Render

*/

searchForm.addEventListener('submit', handleSearchFormSubmit);
searchHistoryContainer.addEventListener('click', handleSearchHistoryClick);
getAndRenderHistory();
