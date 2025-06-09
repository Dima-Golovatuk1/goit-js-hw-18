let counterValue = 0;

const scoreboard = document.querySelector('#value');
const decrementBtn = document.querySelector('#decrement-btn__task4');
const incrementBtn = document.querySelector('#increment-btn__task4');


function increment() {
    counterValue += 1;
    scoreboard.textContent = counterValue;
    console.log(counterValue);
}


function decrement() {
    counterValue -= 1;
    scoreboard.textContent = counterValue;
    console.log(counterValue);
}


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
