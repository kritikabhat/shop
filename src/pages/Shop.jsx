/**
 * @returns page listing of items to purchase
 */
import ItemCard from "../helper/ItemCard"

const Shop = ({ handleDeleteCartState, handleDecreaseCartState, 
    handleIncreaseCartState, handleAddToCartState, 
    productsObjArray, cart, flipIsVisible }) => {

  return (
  <>
    <section className="shopArea">
      {
        productsObjArray.map((obj) => {
          return (
          <ItemCard handleDeleteCartState={handleDeleteCartState} 
            handleDecreaseCartState={handleDecreaseCartState} 
            handleIncreaseCartState={handleIncreaseCartState} 
            handleAddToCartState={handleAddToCartState} obj={obj} 
            cart={cart} key={obj.id} flipIsVisible={flipIsVisible} />
          )
        })
      }
    </section>
  </>
  )
}
export default Shop
