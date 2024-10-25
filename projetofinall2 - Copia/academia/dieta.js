fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegan&number=5&apiKey=78d132e0e5394082b32081a7de432094`)
.then(response => response.json())
.then (data => {
    console.log(data);

    data.results.forEach(recipe => {
        console.log(`Receita: ${recipe.title}`);
    });
})

.catch(error => {
    console.error("Erro ao buscar receitas:", error);
});

