const recipeAdder = (id) => {
  const favoriteRecipes =
    JSON.parse(localStorage.getItem('favoriteRecipes')) || []
  const alreadySaved = favoriteRecipes.find((item) => item === id)
  if (!alreadySaved) {
    favoriteRecipes.push(id)
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))
    return true
  } else {
    return false
  }
}
const favoriteRecipeLoader = async () => {
  const loadedRecipes = await fetch(
    'https://b7a10-chef-recipe-hunter-server-side-a4arpon-a4arpon.vercel.app/'
  ).then((res) => res.json())
  const savedFavoriteRecipes =
    JSON.parse(localStorage.getItem('favoriteRecipes')) || []
  const favoriteRecipes = loadedRecipes.filter((recipe) =>
    savedFavoriteRecipes.find(
      (savedFavoriteRecipes) => savedFavoriteRecipes === recipe.id
    )
  )
  return favoriteRecipes
}
export { recipeAdder, favoriteRecipeLoader }
