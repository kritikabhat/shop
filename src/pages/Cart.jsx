/**
 * @returns shopping cart container
 */

import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "../helper/Footer";

const Cart = ({ cart, handleDeleteCartState, handleIncreaseCartState, 
              handleDecreaseCartState }) => {

  const handleCartDelete = (e) => {
    console.log(e.target.parentNode.parentNode.parentNode)
    const id = e.target.parentNode.parentNode.parentNode.id
    handleDeleteCartState(id)
  }

  const handleIncrease = (e) => {
    const id = e.target.parentNode.parentNode.id
    handleIncreaseCartState(id)
  }

  const handleDecrease = (e) => {
    const id = e.target.parentNode.parentNode.id
    const updatedItem = cart.filter((item) => (item.id.toString() === id))[0]
    if (updatedItem.total === 1) {
      handleDeleteCartState(id)
    } else {
      updatedItem.total -= 1
    }
    handleDecreaseCartState(id, updatedItem)
  }

  return (
      <section className="cartArea">
        <div className='middleContainerCart'>
          <h2>Shopping Cart</h2>
          <ul>
            {
              cart.map((obj) => {
                return (
                  <li key={obj.title} className="cartItem" id={obj.id}>
                    <div className='detailsCartDiv'>
                    <div className="cartImgDiv">
                      <img src={obj.image} alt={`Image of ${obj.title}`} />
                    </div>

                      <div>{obj.title}</div>
                      <button onClick={handleDecrease} className="cartBtn" type="button" >-</button>
                      <div>{obj.total}</div>
                      <button onClick={handleIncrease} className="cartBtn" type="button" >+</button>
                    </div>
                    <div className='cartDeleteBtnDiv'>
                      <button onClick={handleCartDelete} className="cartDeleteBtn" type="button">
                        <DeleteIcon fontSize='20px' disabled />
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          {
            cart.length > 0 && (<div className='checkoutBtnDiv'>
            <button type="button" className='shopBtn'>Checkout</button>
            </div>)
          }
        </div>
      <Footer />
      </section>
  )
}
export default Cart