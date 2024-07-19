
const IngredientList = (props) => {

    return (
        <ul>
            {props.ingredients.map((ingredient, idx) => {
                return (
                    <div key={idx}>
                        <li key={idx} style={{color: `${ingredient.color}`}}>{ingredient.name}</li>
                        <button onClick={() => props.addToBurger(ingredient)} type='submit'>+</button>
                    </div>
                )
            })}
        </ul>
    )
  }
  export default IngredientList;