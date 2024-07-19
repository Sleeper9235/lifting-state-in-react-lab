
const IngredientList = (props) => {

    return (
        <ul>
            {props.ingredients.map((ingredient, idx) => {
                return (
                    <div key={idx}>
                        <li key={idx} style={{backgroundColor: `${ingredient.color}`}}>{ingredient.name}
                        <button onClick={() => props.addToBurger(ingredient)} type='submit'>+</button>
                        </li>
                    </div>
                )
            })}
        </ul>
    )
  }
  export default IngredientList;