import alreadyChecked from "./utils/alreadyChecked"
import limitNotReached from "./utils/limitNotReached"
import notSelected from "./utils/notSelected"
import checkingButLimitReached from "./utils/checkButLimitReached"

const toggleRecipesChecklist = (
  ingredientsChecklist,
  selectedRecipe
) => {
  const newChecklist = ingredientsChecklist.map(recipe => {
    const checkedRecipes = ingredientsChecklist.filter(recipe => recipe.checked)
    const allowMoreRecipeChecks = checkedRecipes.length < 2

    const recipeNotSelected = notSelected(recipe, selectedRecipe)
    const recipeIsAlreadyChecked = alreadyChecked(recipe)
    const recipeLimitNotReached = limitNotReached(allowMoreRecipeChecks)
    const checkingRecipeButLimitReached = checkingButLimitReached(
      recipe,
      allowMoreRecipeChecks
    )

    if (recipeNotSelected || checkingRecipeButLimitReached) {
      return recipe
    }

    if (recipeLimitNotReached || recipeIsAlreadyChecked) {
      recipe.checked = !recipe.checked
    }

    return recipe
  })

  return newChecklist
}

export default toggleRecipesChecklist