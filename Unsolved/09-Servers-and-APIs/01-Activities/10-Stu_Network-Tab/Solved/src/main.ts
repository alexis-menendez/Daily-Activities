import './style.css';
const badRequestUrl = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

const getRequest = async (): Promise<void> => {
  const response = await fetch(badRequestUrl);
  console.log('Response:', response);
  if (response.status === 404 || response.status === 403) {
    document.location.replace(redirectUrl);
  } else {
    return response.json();
  }
};

if (!window.location.href.includes('404')) {
  getRequest();
}
