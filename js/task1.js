const categories = document.querySelectorAll(".item")

console.log(`У списку: ${categories.length} категорії`);

categories.forEach((category) => {
    const titleElement = category.querySelector("h2").textContent;
    const itemElement = category.querySelectorAll("li").length;
    console.log(`Ктегорія: ${titleElement} має кількість: ${itemElement} елементів`);
})