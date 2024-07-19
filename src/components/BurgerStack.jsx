
const BurgerStack = (props) => {

    return (
        <ul>
            {props.ingredients.map((ingredient, idx) => {
                return (
                    <div key={idx}>
                        <li style={{backgroundColor: `${ingredient.color}`}} >{ingredient.name}
                        <button onClick={() => props.removeFromBurger(ingredient, idx)} type='submit'>X</button>
                        </li>
                    </div>
                )
            })}
        </ul>
    )
  }
  export default BurgerStack;