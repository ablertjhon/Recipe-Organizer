// script.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/recipes')
        .then(response => response.json())
        .then(recipes => {
            const recipeContainer = document.getElementById('recipe-container');
            recipes.forEach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe');
                recipeElement.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <p>${recipe.ingredients}</p>
                    <p>${recipe.instructions}</p>
                `;
                recipeContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
});
