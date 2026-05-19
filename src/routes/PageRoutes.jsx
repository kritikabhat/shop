import { useParams, useOutletContext } from "react-router"
import { useState } from 'react'
import Shop from '../pages/Shop.jsx'
import Cart from '../pages/Cart.jsx'
import Home from '../pages/Home.jsx'
import ErrorPage from "../helper/ErrorPage.jsx"

export default function PageRoutes() {
  const { name } = useParams()
  const [productsObjArray, setProductsObjArray, cart, setCart] = useOutletContext()

  const flipIsVisible = (id) => {
    setProductsObjArray(item => productsObjArray.map((item) => 
      item.id.toString() === id ? { ...item, isVisible: !item.isVisible } : item
    ))
  }

  const handleAddToCartState = (id) => {
    const newItem = productsObjArray.filter((item) => (item.id.toString() === id))[0]
    const cartItem = {
      id: newItem.id,
      title: newItem.title,
      price: newItem.price,
      image: newItem.image,
      total: 1
    }
    setCart(cart => [...cart, cartItem])
  }

  const handleIncreaseCartState = (id) => {
    const updatedItem = cart.filter((item) => (item.id.toString() === id))[0]
    updatedItem.total += 1
    
    setCart(cart => cart.map((item) => 
      item.id.toString() === id ? { ...item, total: updatedItem.total } : item
    ))
  }
  
  const handleDecreaseCartState = (id, updatedItem) => {
    setCart(cart => cart.map((item) => 
      item.id.toString() === id ? { ...item, total: updatedItem.total } : item
    )) 
  }

  const handleDeleteCartState = (id) => {
    const updatedCart = cart.filter((item) => (item.id.toString() !== id))
    setCart(updatedCart)
  }

  return (<>
    <section>
      {
        name === "shop" ? (<Shop handleDeleteCartState={handleDeleteCartState} 
                          handleDecreaseCartState={handleDecreaseCartState} 
                          handleIncreaseCartState={handleIncreaseCartState} 
                          handleAddToCartState={handleAddToCartState} 
                          productsObjArray={productsObjArray} 
                          cart={cart} flipIsVisible={flipIsVisible} />)
        : name === "cart" ? (<Cart cart={cart} 
                          handleDeleteCartState={handleDeleteCartState}
                          handleIncreaseCartState={handleIncreaseCartState}
                          handleDecreaseCartState={handleDecreaseCartState} />)
        : name === "home" ? (<Home />)
        : <ErrorPage />
      }
    </section>
  </>)
}