import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

function saveMsg(event) {
  const dataInput = {
    email: form.email.value,
    message: form.message.value,
  };

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
  const dataInput = {
    email: form.email.value,
    message: form.message.value,
  };

  console.log(dataInput);

  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
});
