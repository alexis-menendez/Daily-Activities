import './style.css';

const questionForm: HTMLInputElement = document.getElementById(
  'question-form'
) as HTMLInputElement;
const questionInput: HTMLInputElement = document.getElementById(
  'questionText'
) as HTMLInputElement;
const questionsContainer = document.getElementById('question-container');

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
  cardHeaderEl.innerHTML = `Question:</br>${data.question}`;

  // Create card body
  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p><b>Prompt</b>:</p><p>${data.prompt}</p><p><b>Response</b>:</p><p><pre><code>${data.response}</code></pre></p>`;

  // Append the header and body to the card element
  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);

  // Append the card element to the questions container in the DOM
  questionsContainer?.appendChild(cardEl);
};

// Post a new question to the page
const postQuestion = (question: any) =>
  fetch('api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  })
    .then((response) => response.json())
    .then((data) => {
      // const jsonString = JSON.stringify(data, null, 2);
      // alert(jsonString);
      createCard(data);

      // Clear form fields
      questionInput.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// Function to handle when a user submits the feedback form
const handleFormSubmit = (e: any) => {
  e.preventDefault();

  // Get the value of the question and save it to a variable
  const questionContent = questionInput.value;

  // Create an object with the question
  const newQuestion = {
    question: questionContent
  };

  // Make a fetch POST request to the server
  postQuestion(newQuestion);
};

// Listen for when the form is submitted
questionForm.addEventListener('submit', handleFormSubmit);
