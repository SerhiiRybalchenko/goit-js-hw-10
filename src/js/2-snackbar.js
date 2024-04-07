import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delayInput = form.querySelector('[name="delay"]');
  const delay = parseInt(delayInput.value);

  const stateInput = form.querySelector('[name="state"]:checked');
  const state = stateInput.value;

  const createPromise = (delay, state) => {
    return new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => {
          resolve(delay);
        }, delay);
      } else {
        setTimeout(() => {
          reject(delay);
        }, delay);
      }
    });
  };

  createPromise(delay, state)
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59A10D',
        messageColor: '#FFFFFF',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
      });
    });

  form.reset();
});
