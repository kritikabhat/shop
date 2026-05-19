import { Outlet } from "react-router"
import { useEffect, useState } from 'react'
import ShopNavBar from '../helper/ShopNavBar.jsx'

function Root() {
  const [loading, setLoading] = useState(false)
  const [productsObjArray, setProductsObjArray] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) 
          throw new Error(`Response status: ${response.status}`)
        const responseJSON = await response.json()

        const newArray = responseJSON.map((item) => {
          return { ...item, isVisible: true }
        })

        // setProductsObjArray(responseJSON)
        setProductsObjArray(newArray)

      } catch {
        console.log(error)
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()

  }, [])

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }

  return (
    <>
      <header>
        <ShopNavBar cart={cart} />
      </header>
      <Outlet context={[productsObjArray, setProductsObjArray, cart, setCart]} />
    </>
  )
}

export default Root