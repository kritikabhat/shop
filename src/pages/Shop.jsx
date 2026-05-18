/**
 * Copy layout from pokemon game
 * 
 * get item lists from https://fakestoreapi.com/
 * 
 * @returns page listing of items to purchase
 */
import { useState } from "react"
import ItemCard from "../helper/ItemCard"

const Shop = ({ productsObjArray, cart, setCart }) => {

  return (
  <>
    <section className="shopArea">
      {
        productsObjArray.map((obj) => {
          return (
          <ItemCard obj={obj} productsObjArray={productsObjArray} cart={cart} setCart={setCart} key={obj.id}/>
          )
        })
      }
    </section>
  </>
  )
}
export default Shop
