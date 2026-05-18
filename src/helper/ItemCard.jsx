/**
 * Put these methods to helper later if possible
 * @returns Card for each item on sale
 */

const ItemCard = ({ obj, productsObjArray, cart, setCart }) => {

  const handleAddToCart = (e) => {
    const updateItemTotalBtnDiv = e.target.parentNode.getElementsByClassName("updateItemTotalBtnDiv")[0]
    updateItemTotalBtnDiv.style.display = "block"

    const addToCartBtn = e.target.parentNode.getElementsByClassName("addToCartBtn")[0]
    addToCartBtn.style.display = "none"

    const id = e.target.parentNode.id
    const newItem = productsObjArray.filter((item) => (item.id.toString() === id))[0]
    const cartItem = {
      id: newItem.id,
      title: newItem.title,
      price: newItem.price,
      total: 1
    }
    setCart(cart => [...cart, cartItem])
  }

  const handleIncrease = (e) => {
    const id = e.target.parentNode.parentNode.id
    const updatedItem = cart.filter((item) => (item.id.toString() === id))[0]
    updatedItem.total += 1
    
    setCart(cart => cart.map((item) => 
      item.id.toString() === id ? { ...item, total: updatedItem.total } : item
    ))

  }

  const handleDecrease = (e) => {
    const id = e.target.parentNode.parentNode.id
    const updatedItem = cart.filter((item) => (item.id.toString() === id))[0]
    if (updatedItem.total === 1) {

      const updateItemTotalBtnDiv = e.target.parentNode.parentNode.getElementsByClassName("updateItemTotalBtnDiv")[0]
      updateItemTotalBtnDiv.style.display = "none"

      const addToCartBtn = e.target.parentNode.parentNode.getElementsByClassName("addToCartBtn")[0]
      addToCartBtn.style.display = "block"

    } else {
      updatedItem.total -= 1
      console.log(updatedItem)
    }
    
    setCart(cart => cart.map((item) => 
      item.id.toString() === id ? { ...item, total: updatedItem.total } : item
    ))

  
  }

  return (
    <div className="itemCard" key={obj.id} id={obj.id}>
      <div className="itemRating">{obj.rating.rate}</div>
      <div className="imgDiv" >
        <img src={obj.image} alt={`Image of ${obj.title}`} />
      </div>
      <div className="itemName">{obj.title}</div>
      <button onClick={handleAddToCart} className="addToCartBtn" type="button">Add to Cart</button>
      <div className="updateItemTotalBtnDiv" style={{display: "none"}}>
        <button onClick={handleIncrease} className="addDeleteBtn" type="button" >+</button>
        <div className="total">
          { cart.filter((item) => (item.id === obj.id))[0]?.total }
        </div>
        <button onClick={handleDecrease} className="addDeleteBtn" type="button" >-</button>
      </div>
    </div>
  )
}
export default ItemCard