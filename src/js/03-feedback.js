import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveMsg);

throttle(function saveMsg(event) {
  event.preventDefault();

  const dataInput = {
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  };

  console.log(dataInput);
  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
}, 500);

if (JSON.parse(localStorage.getItem('dataInput')) !== '') {
  const formElement = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.elements.email.value = '' || formElement.email;
  form.elements.message.value = '' || formElement.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  form.elements.email.value = '';
  form.elements.message.value = '';
});
