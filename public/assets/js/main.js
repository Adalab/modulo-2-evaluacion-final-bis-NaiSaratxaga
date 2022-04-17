'use strict';

const url = `https://randomuser.me/api/?results=10`;
const resultListElement = document.querySelector('.js_list');
const results = [];

function paintHTML(contacts) {
  for (const contact of contacts) {
    const li = `<li>
    <div class="image">
        <img src="${contact.picture.medium}" alt="contact picture" title="contact picture"/> 
      </div>
      <div class="name">
        ${contact.name.first} ${contact.name.last} 
      </div>
      <div class="city">
        ${contact.location.city} 
      </div>
      <div class="userName">
        ${contact.login.username} 
      </div>
    </li>`;
    resultListElement.innerHTML += li;
  }
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    results = data.results;
    paintHTML(results);
  });

//# sourceMappingURL=main.js.map
