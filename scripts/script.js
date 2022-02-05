// 'use strict';
document.getElementById('toggle').addEventListener('click', toggleClass);

function toggleClass() {
  let toggleAble = document.querySelector('.second-list');
  toggleAble.classList.toggle('active');
}
