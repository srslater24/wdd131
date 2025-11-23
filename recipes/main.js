import recipes from './recipes.mjs';

function randomNumber(num) {
    return Math.floor(Math.random() * num);
};

function getRandomRecipe(recipe) {
    const listLength = recipe.length;
    const number = randomNumber(listLength);
    return recipes[number];
};

function tagsTemplate(tags) {
    let tagString = "";
    tags.forEach(tag => {
        tag = `<li>${tag}</li>`;
        tagString += tag;
    });
    return tagString;
};

function ratingTemplate(rating) {
    let html = `<span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${rating} out of 5 stars"
                >`;
    for (let i=0; i<5; i++) {
        if (i < Math.floor(rating))
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        else
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    };
    html += `</span>`;
    return html;
};

function recipeTemplate(recipe) {
    return `<section class="recipe">
            <img class="recipe_img" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe_info">
                <ul class="tags">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <h2 class="recipe_title">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="desc">${recipe.description}</p>
            </div>
        </section>`
};

function renderRecipes(recipeList) {
    const main = document.querySelector('main');
    const html = recipeList.map(recipeTemplate);
    main.innerHTML = html.join("");
};

function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes);
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
};
init();

function sortFunction(a,b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
 // a must be equal to b
 return 0;
}

function filterFunction(list, query) {
    function searchCallback(item){
        return (
            item.name.toLowerCase().includes(query.toLowerCase()) || // || = OR, && = AND
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.find((tag)=> tag.toLowerCase().includes(query.toLowerCase()))
        );
    }
    const filtered = list.filter(searchCallback);
    const sorted = filtered.sort(sortFunction);
    return sorted;
}

function searchHandler(event) {
    event.preventDefault()
    const searchBar = document.querySelector("#search-bar");
    let searchValue = searchBar.value.toLowerCase();
    let sortedRecipes = filterFunction(recipes, searchValue)
    renderRecipes(sortedRecipes)
}

document.querySelector("#search-button").addEventListener("click", searchHandler);