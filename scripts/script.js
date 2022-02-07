// 'use strict';
document.getElementById('toggle').addEventListener('click', toggleClass);

function toggleClass() {
  let toggleAble = document.querySelector('.second-list');
  toggleAble.classList.toggle('active');
}

// var acc = document.getElementsByClassName('list-section');
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function () {
//
//     this.classList.toggle('active');

//     var panel = this.nextElementSibling;
//     if (panel.style.display === 'none') {
//       panel.style.display = 'flex';
//     } else {
//       panel.style.display = 'none';
//     }
//   });
// }
