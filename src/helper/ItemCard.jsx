/**
 * Put these methods to helper later if possible
 * @returns Card for each item on sale
 */
import Rating from '@mui/material/Rating';

const ItemCard = ({ handleDeleteCartState, handleDecreaseCartState, 
      handleIncreaseCartState, handleAddToCartState, obj, cart,
      flipIsVisible }) => {

  const handleAddToCart = (e) => {
    const id = e.target.parentNode.id
    flipIsVisible(id)
    handleAddToCartState(id)
  }

  const handleIncrease = (e) => {
    const id = e.target.parentNode.parentNode.id
    handleIncreaseCartState(id)
  }

  const handleDecrease = (e) => {
    const id = e.target.parentNode.parentNode.id
    const updatedItem = cart.filter((item) => (item.id.toString() === id))[0]
    if (updatedItem.total === 1) {
      flipIsVisible(id)
      handleDeleteCartState(id)
    } else {
      updatedItem.total -= 1
    }
    handleDecreaseCartState(id, updatedItem)
  }

  return (
    <div className="itemCard" key={obj.id} id={obj.id}>
      <Rating name="half-rating-read" defaultValue={obj.rating.rate} precision={0.5} readOnly />
      <div className="imgDiv" >
        <img src={obj.image} alt={`Image of ${obj.title}`} />
      </div>
      <div className="itemName">{obj.title}</div>
      {
      obj.isVisible ?  (<button onClick={handleAddToCart} 
          className="addToCartBtn" type="button">Add to Cart</button>)
          : (<div className="updateItemTotalBtnDiv">
            <button onClick={handleDecrease} className="addDeleteBtn"
                type="button" >-</button>
            <div className="total">
            { cart.filter((item) => (item.id === obj.id))[0]?.total }
            </div>
            <button onClick={handleIncrease} className="addDeleteBtn" 
                type="button" >+</button>
          </div>)
      }
    </div>
  )
}
export default ItemCard