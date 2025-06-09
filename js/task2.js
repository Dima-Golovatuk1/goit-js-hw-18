const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];


const listTask2 = document.querySelector("#ingredients")

ingredients.forEach(item => {
    listTask2.insertAdjacentHTML("beforeend", `<li class="task2__item">${item}</li>`);
});

// ingredients.forEach(item => {
//     const li = document.createElement('li');
//     li.className = "task2__item"
//     li.textContent = item;
//     listTask2.appendChild(li);
// });