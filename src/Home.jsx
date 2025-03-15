import React from "react"
import IngredientShow from "./components/IngredientShow"
import RecipeShow from "./components/RecipeShow"

export default function Home() {

    const [ingredients , Setingredient] =React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [showrecipe , Setshowrecipe] = React.useState(false)
    const recipeSection = React.useRef(null)

   React.useEffect(()=> {
        if(showrecipe !== false && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[showrecipe]
)

  

    function handleSubmit(formdata) {
        const getingredient = formdata.get("ingredient")
        Setingredient(prevIngredient=> [...prevIngredient, getingredient])
    }

    function getRecipe() {
        Setshowrecipe(prevShowrecipe => !prevShowrecipe) 
    }
       

    

    return(
        <>
         <main>
            <form action = {handleSubmit} className="add-ingredient-form">
                 <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name = "ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
        {ingredients.length > 0 ? <IngredientShow  ref={recipeSection} toggle={getRecipe}  ingredientState = {ingredients} show = {showrecipe}/> : null}
        {showrecipe ? <RecipeShow /> : null}
        
        </>
    )

}