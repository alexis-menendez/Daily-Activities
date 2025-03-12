import './style.css';

const translationForm: HTMLInputElement = document.getElementById(
  'translation-form'
) as HTMLInputElement;
const translationInput: HTMLInputElement = document.getElementById(
  'translationText'
) as HTMLInputElement;
const translationsContainer = document.getElementById('translation-container');

const createCard = (data: any) => {
  // Create card
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3');

  // Create card header
  const cardHeaderEl = document.createElement('h4');
  cardHeaderEl.classList.add(
    'card-header',
    'bg-primary',
    'text-light',
    'p-2',
    'm-0'
  );
  cardHeaderEl.innerHTML = `Text:</br>${data.text}`;

  // Create card body
  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p><b>Response</b>:</p><p><pre><code>${data.response}</code></pre></p>`;

  // Append the header and body to the card element
  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);

  // Append the card element to the translations container in the DOM
  translationsContainer?.appendChild(cardEl);
};

// Post a new translation to the page
const postTranslation = (text: any) =>
  fetch('api/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  })
    .then((response) => response.json())
    .then((data) => {
      // const jsonString = JSON.stringify(data, null, 2);
      // alert(jsonString);
      createCard(data);

      // Clear form fields
      translationInput.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// Function to handle when a user submits the feedback form
const handleFormSubmit = (e: any) => {
  e.preventDefault();

  // Get the value of the translation and save it to a variable
  const translationContent = translationInput.value;

  // Create an object with the translation
  const newTranslation = {
    text: translationContent
  };

  // Make a fetch POST request to the server
  postTranslation(newTranslation);
};

// Listen for when the form is submitted
translationForm.addEventListener('submit', handleFormSubmit);
