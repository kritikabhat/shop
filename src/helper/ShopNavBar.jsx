import { Link } from 'react-router'

/**
 * @returns Nav bar for each page
 */

function ShopNavBar() {

  return (
    <>
      <nav>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
    </>
  )
}

export default ShopNavBar
