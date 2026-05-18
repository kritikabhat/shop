/**
 * Copy layout from pokemon game
 * 
 * get item lists from https://fakestoreapi.com/
 * 
 * @returns page listing of items to purchase
 */
import ItemCard from "../helper/ItemCard"


const Shop = ({ productsObjArray }) => {
  return (
  <>
    <section className="shopArea">
      {
        productsObjArray.map((obj) => {
          return (
          <ItemCard obj={obj} key={obj.id}/>
          )
        })
      }
    </section>
  </>
  )
}
export default Shop
