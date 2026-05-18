/**
 * 
 * @returns Card for each item on sale
 */

const handleClickItem = () => {
  // this is useless, delete it if it interferes with the Btn onclicks
}

const ItemCard = ({ obj, productsObjArray, cart, setCart }) => {

  const handleAddToCart = (e) => {
    // If in helper, need to pass e, productsObjArray, cart, setCart

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

  return (
    <div className="itemCard" key={obj.id} id={obj.id}>
      <div className="itemRating">{obj.rating.rate}</div>
      <div className="imgDiv" >
        <img src={obj.image} alt={`Image of ${obj.title}`} />
      </div>
      <div className="itemName">{obj.title}</div>
      <button onClick={handleAddToCart} className="addToCartBtn" type="button">Add to Cart</button>
      <div className="updateItemTotalBtnDiv" style={{display: "none"}}>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
    </div>
  )
}
export default ItemCard