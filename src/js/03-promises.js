import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    }
    else {
      reject({ position, delay });
    }
    }, delay);
  });
}


function onSubmit(e) {
  e.preventDefault();

  const delay = Number(form.delay.value);
  const amount = Number(form.amount.value);
  const step = Number(form.step.value);
  let startDelay = delay;
  let newPosition;

  if (startDelay <= 0) {
    return;
  }

  for (let position = 0; position < amount; position += 1) {
    newPosition = position + 1;


    createPromise(newPosition, startDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      });
    startDelay += step;
  }
}


  



