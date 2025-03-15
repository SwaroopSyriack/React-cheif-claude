

export default function IngredientShow(props) {
    
    const addIngredient = props.ingredientState.map((ingredient) => (
            <li key = {ingredient} > {ingredient}</li>
    ))

    return(
       <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{addIngredient}</ul>
                {props.ingredientState.length >=4 ? <div className="get-recipe-container">
                    <div  ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggle}>{props.show ? "Hide the Recipe" : "Get a Recipe"}</button>
                </div> : null} 
            </section>
    )
}