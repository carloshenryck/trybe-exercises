const quantity = document.querySelector('#peoplesQuantity');
const peopleBox = document.querySelector('#names');

function addAnimation() {
  const callback = (elements) => {
    elements.forEach(ele => {
      if(ele.isIntersecting && !ele.target.classList.contains('show')) {
        ele.target.classList.add('show');
      } else {
        ele.target.classList.remove('show');
      }
    })
  };
  const observer = new IntersectionObserver(callback);
  const cards = document.querySelectorAll('.name');
  
  cards.forEach(card => observer.observe(card));
}

async function fetchPeoples() {
  const data = await fetch('http://api.open-notify.org/astros.json').then(response => response.json());
  const numberOfPeople = data.number;
  const persons = data.people;

  quantity.innerHTML = `<span id='number'>${numberOfPeople}</span> <br> peoples`
  persons.forEach(person => {
    const p = document.createElement('p');
    p.innerHTML += person.name;
    p.classList.add('name');
    peopleBox.appendChild(p);
  })

  addAnimation();
}

fetchPeoples();