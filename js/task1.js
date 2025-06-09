function numberOfCategories(nameCategory){
    const category = document.querySelector(`#${nameCategory}`)
    console.log(`Категорія: ${nameCategory} \nКількість елементів: ${category.children.length}`);
}

numberOfCategories("animals-list")