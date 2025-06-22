const userName = document.querySelector('#name-input');
const greet = document.querySelector('#name-output');

userName.addEventListener('input', event => {
  greet.textContent =
    event.target.value.trim() !== '' ? event.target.value.trim() : 'Anonymous';
});
