/**
 * Btns should +/- the amount
 * if amount is 0, item should be removed from cart
 * the amount thing should be a text or input. if input can edit it
 * 
 * one state [{item1, 2}, {item2, 4}] to keep the items globally
 * 
 * @returns shopping cart container
 */

const Cart = ({ cart }) => {

  const handleCartDelete = (e) => {
  }

  return (
      <section>
        <ul>
          {
            cart.map((obj) => {
              return (
                <li key={obj.title} className="cartItem">
                  <div>{obj.title}</div>
                  <div>{obj.total}</div>
                  <button className="addDeleteBtn" type="button" >+</button>
                  <button className="addDeleteBtn" type="button" >-</button>
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