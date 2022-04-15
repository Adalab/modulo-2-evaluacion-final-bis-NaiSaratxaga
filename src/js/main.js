'use strict';

const url = `https://randomuser.me/api/?results=10`;

const list = document.querySelector('.js_list');

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
    list.innerHTML += li;
  }
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const allResult = data.results;
    paintHTML(allResult);
  });
