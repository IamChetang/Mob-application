// 'use strict';
document.getElementById('toggle1').addEventListener('click', toggleClass);
document.getElementById('toggle2').addEventListener('click', toggleClass);
document.getElementById('toggle3').addEventListener('click', toggleClass);
document.getElementById('toggle4').addEventListener('click', toggleClass);

function toggleClass() {
  let toggleAble = document.querySelector('.second-list');
  toggleAble.classList.toggle('active');
}
