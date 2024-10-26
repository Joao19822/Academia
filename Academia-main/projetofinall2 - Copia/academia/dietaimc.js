// var url_base = "https://academia-12627-default-rtdb.firebaseio.com/dieta.json";

// function getDietType(imc) {
//     if (imc < 18.5) {
//         return 'high-calorie';
//     } else if (imc >= 18.5 && imc <= 24.9) {
//         return 'balanced';
//     } else if (imc >= 25 && imc <= 29.9) {
//         return 'low-carb';
//     } else if (imc >= 30) {
//         return 'low-calorie';
//     }
// }

// function fetchDietRecipes(imc) {
//     const dietType = getDietType(imc);
//     const apiKey = '78d132e0e5394082b32081a7de432094';

//     fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${dietType}&number=5&apiKey=${apiKey}`)
//         .then(response => response.json())
//         .then(data => {
//             displayRecipes(data.results);
//         })
//         .catch(error => {
//             console.error("Erro ao buscar receitas:", error);
//         });
// }

// function displayRecipes(recipes) {
//     const recipeContainer = document.getElementById('recipe-container');
//     recipeContainer.innerHTML = '';

//     recipes.forEach(recipe => {
//         const recipeElement = document.createElement('div');
//         recipeElement.innerHTML = `<h3>${recipe.title}</h3>
//             <img src="${recipe.image}" alt="${recipe.title}" />
//             <p><a href="${recipe.sourceUrl}" target="_blank">Ver receita</a></p>`;
//         recipeContainer.appendChild(recipeElement);
//     });
// }

// function showDietOptions() {
//     const imc = calculateIMC();
//     fetchDietRecipes(imc);
// }

// function dietarapi() {
//     fetch(url_base, {
//         method: 'GET',
//     })
//         .then(response => response.json())
//         .then(data => {
//             const spoonacularUrl = `https://api.spoonacular.com/recipes/complexSearch?diet=vegan&number=5&apiKey=78d132e0e5394082b32081a7de432094`;

//             return fetch(spoonacularUrl, {
//                 method: 'GET',
//             });
//         })
//         .then(response => response.json())
//         .then(apiData => {
//             fetch(url_base, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(apiData)
//             })
//                 .then(() => console.log('Dados da API foram salvos com sucesso.'))
//                 .catch(error => console.error('Erro ao salvar dados da API:', error));
//         })
//         .catch(error => console.error('Erro na requisição:', error));
// }

// document.getElementById('btn_gerar').addEventListener('click', (e) => {
//     e.preventDefault();
//     dietarapi();
// });