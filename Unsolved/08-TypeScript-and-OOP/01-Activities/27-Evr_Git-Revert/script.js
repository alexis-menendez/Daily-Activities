// Initial Commit
const formEl = $('#skills-form');
const nameInputEl = $('#skill-name');
const dateInputEl = $('#datepicker');
const skillsListEl = $('#skills-list');

const printSkills = (name, date) => {
  const listEl = $('<li>');
  const listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const nameInput = nameInputEl.val();
  const dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
