import { useParams, useOutletContext } from "react-router"
import Shop from '../pages/Shop.jsx'
import Cart from '../pages/Cart.jsx'
import Home from '../pages/Home.jsx'
import ErrorPage from "../helper/ErrorPage.jsx"

export default function PageRoutes() {
    const { name } = useParams()
    const [productsObjArray, setProductsObjArray, cart, setCart] = useOutletContext()

    return (<>
    <section>
        {
        name === "shop" ? (<Shop productsObjArray={productsObjArray} cart={cart} setCart={setCart} />)
        : name === "cart" ? (<Cart />)
        : name === "home" ? (<Home />)
        : <ErrorPage />
        }
    </section>
    </>)
}