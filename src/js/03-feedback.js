import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

function saveMsg(event) {
  event.preventDefault();
  const dataInput = {
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  };
  console.log(dataInput);

  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
}

form.addEventListener('input', throttle(saveMsg, 500));

if (localStorage.getItem('feedback-form-state') !== null) {
  const formElement = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.email.value = formElement.email || '';
  form.message.value = formElement.message || '';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
});
