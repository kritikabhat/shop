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

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
})

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
        <Link to="home">
          <WindowIcon color='primary' />
        </Link>
        <Link to="shop">
          <StorefrontIcon color='primary'/>
        </Link>
        <Link to="cart">
          <IconButton>
            <ShoppingCartIcon fontSize="medium" color='primary'/>
            <CartBadge badgeContent={cart.length} color="primary" overlap="circular" />
          </IconButton>
        </Link>
      </nav>
    </>
  )
}

export default ShopNavBar
