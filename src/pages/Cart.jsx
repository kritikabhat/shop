/**
 * 
 * @returns shopping cart container
 */

const Cart = ({ cart, handleDeleteCartState, handleIncreaseCartState, 
              handleDecreaseCartState }) => {

  const handleCartDelete = (e) => {
    const id = e.target.parentNode.id
    handleDeleteCartState(id)
  }

  const handleIncrease = (e) => {
    const id = e.target.parentNode.id
    handleIncreaseCartState(id)
  }

  const handleDecrease = (e) => {
    const id = e.target.parentNode.id
    const updatedItem = cart.filter((item) => (item.id.toString() === id))[0]
    if (updatedItem.total === 1) {
      handleDeleteCartState(id)
    } else {
      updatedItem.total -= 1
    }
    handleDecreaseCartState(id, updatedItem)
  }

  return (
      <section>
        <ul>
          {
            cart.map((obj) => {
              return (
                <li key={obj.title} className="cartItem" id={obj.id}>
                  <div>{obj.title}</div>
                  <div>{obj.total}</div>
                  <button onClick={handleIncrease} className="addDeleteBtn" type="button" >+</button>
                  <button onClick={handleDecrease} className="addDeleteBtn" type="button" >-</button>
                  <button type="button" onClick={handleCartDelete}>D</button>
                </li>
              )
            })
          }
        </ul>
      </section>
  )
}
export default Cart