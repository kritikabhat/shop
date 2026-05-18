/**
 * Btns should +/- the amount
 * if amount is 0, item should be removed from cart
 * the amount thing should be a text or input. if input can edit it
 * 
 * one state [{item1, 2}, {item2, 4}] to keep the items globally
 * 
 * @returns shopping cart container
 */

const Cart = () => {
  return (
    <>
      <section>Cart Contents:
        <ul>
          <li>
            <span>Item 1</span>
            <button>+</button>
            
            <button>-</button>
          </li>
        </ul>
      </section></>
  )
}
export default Cart