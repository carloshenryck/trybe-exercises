const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const container = document.querySelector('#jokeContainer');

    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => container.innerHTML = data.joke);
}

window.onload = () => fetchJoke();