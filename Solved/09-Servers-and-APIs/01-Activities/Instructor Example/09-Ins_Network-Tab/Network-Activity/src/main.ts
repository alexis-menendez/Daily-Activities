import './style.css';

const requestUrl = 'https://api.github.com/orgs/nodejs/repos';
const badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';

const request = async () => {
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data);
};

const badRequest = async () => {
  const response = await fetch(badRequestUrl);
  const data = await response.json();
  console.log(data);
};

request();
badRequest();
