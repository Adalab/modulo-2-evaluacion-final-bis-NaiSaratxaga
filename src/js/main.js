'use strict';

const url = `https://randomuser.me/api/?results=10`;
const usersListElement = document.querySelector('.js_list');
const buttonSave = document.querySelector('.js_buttonSave');
const buttonRecover = document.querySelector('.js_buttonRecover');

let users = [];

function paintHTML(users) {
  usersListElement.innerHTML = ''; // quitar elementos antiguos y poner nuevos//
  for (const user of users) {
    const friendClassName = user.isFriend ? 'isFriend' : '';
    const li = `<li class="js_listUser ${friendClassName}" id="${user.login.uuid}">
      <div class="image" >
        <img src="${user.picture.medium}" alt="contact picture" title="contact picture"/> 
      </div>
      <div class="name">
        ${user.name.first} ${user.name.last} 
      </div>
      <div class="city">
        ${user.location.city} 
      </div>
      <div class="userName">
        ${user.login.username} 
      </div>
    </li>`;
    usersListElement.innerHTML += li;
    subscribe();
  }
}

function subscribe() {
  const listElements = document.querySelectorAll('.js_listUser');
  listElements.forEach((listElement) => {
    listElement.addEventListener('click', handleClickUser);
  });
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    users = data.results;
    paintHTML(users);
  });

//-----PUNTO 2----//
//en el objeto del usuario clickado dentro del array, añadir una propiedad *//

//tengo que marcar al usuario del listado como amigo, isFriend : true//
//si es mi amigo se pinta de rosa, si no lo es no lo pinto de rosa.

function handleClickUser(event) {
  event.preventDefault();
  const currentTarget = event.currentTarget;
  const userIdToMarkAsFriend = currentTarget.id;
  // Obtener el objeto de los user con ese id
  const userToMarkAsFriend = users.find((user) => {
    return user.login.uuid === userIdToMarkAsFriend;
  });
  // incluir en ese objeto la propiedad isFriend : true
  userToMarkAsFriend.isFriend = true;
  // meterle la clase isFriend al element apuntado como current target
  currentTarget.classList.add('isFriend');
}

//-----PUNTO 3----//
/* guardar/recuperar de local Local Storage / GET Y SET*/

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

function loadUsers() {
  const usersString = localStorage.getItem('users');
  users = JSON.parse(usersString);
  paintHTML(users);
}

buttonSave.addEventListener('click', saveUsers);
buttonRecover.addEventListener('click', loadUsers);
