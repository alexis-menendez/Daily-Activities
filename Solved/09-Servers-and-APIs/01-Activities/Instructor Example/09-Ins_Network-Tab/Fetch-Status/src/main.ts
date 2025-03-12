import './style.css';

const requestURL = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
const responseText = document.getElementById('response-text') as HTMLDivElement;

const getAPI = async (url: string): Promise<Response> => {
  const response = await fetch(url);
  console.log(response);
  if (response.status === 200) {
    responseText.textContent = `Current Response Status: ${response.status.toString()}`;
  }
  return await response.json();
};

getAPI(requestURL);
