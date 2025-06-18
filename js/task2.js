const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];


const listTask2 = document.querySelector("#ingredients")

const items = ingredients.map(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.className = "task2__item"
    itemEl.textContent = ingredient;

    return itemEl
});

listTask2.append(...items);


// ingredients.forEach(item => {
//     const li = document.createElement('li');
//     li.className = "task2__item"
//     li.textContent = item;
//     listTask2.appendChild(li);
// });