
const BurgerStack = (props) => {

    return (
        <ul>
            {props.ingredients.map((ingredient, idx) => {
                return (
                    <div key={idx}>
                        <li style={{color: `${ingredient.color}`}} >{ingredient.name}</li>
                        <button onClick={() => props.removeFromBurger(ingredient, idx)} type='submit'>X</button>
                    </div>
                )
            })}
        </ul>
    )
  }
  export default BurgerStack;