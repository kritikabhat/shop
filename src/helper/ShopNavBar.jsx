import { Link } from 'react-router'

/**
 * @returns Nav bar for each page
 */

import StorefrontIcon from '@mui/icons-material/Storefront'
import WindowIcon from '@mui/icons-material/Window';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton'
import Badge, { badgeClasses } from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`
function ShopNavBar({ cart }) {

  return (
    <>
      <nav className='navBar'>
        
        <Link to="home" >
          <WindowIcon sx={{color: 'white'}} className='navLinks' style={{borderRadius: "50%", padding:"0.5rem"}} />
        </Link>
        <Link to="shop">
          <StorefrontIcon sx={{color: 'white'}} className='navLinks' style={{borderRadius: "50%", padding:"0.5rem"}} />
        </Link>
        <Link to="cart">
          <IconButton className='navLinks' sx={{color: 'white'}}>
            <ShoppingCartIcon fontSize="medium" />
            <CartBadge badgeContent={cart.length} color="primary" overlap="circular" />
          </IconButton>
        </Link>
      </nav>
    </>
  )
}

export default ShopNavBar
