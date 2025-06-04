import './style.css';

fetch('https://api.github.com/gists/public?since=2023-06-01&per_page=100')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
