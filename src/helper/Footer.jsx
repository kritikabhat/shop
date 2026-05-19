/**
 * @returns Footer
 */

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

  return (<>
        <footer>
        <div className="footer">
          <div className="row">
            <a href="#"><i><FacebookIcon /></i></a>
            <a href="#"><i><InstagramIcon /></i></a>
            <a href="#"><i><XIcon /></i></a>
            <a href="#"><i><YouTubeIcon /></i></a>
            <a href="#"><i><WhatsAppIcon /></i></a>
          </div>
          <div className="row">
            <ul>
              <li><a href="#">Have questions or feedback?</a></li>
              <li><a href="#">Contact me</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li><a href="https://fakestoreapi.com/">FakeStoreAPI</a></li>
              <li><a href="https://unsplash.com/illustrations/delivery-person-pushing-a-cart-with-boxes-Z-NuwWXtyqg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Illustration by</a>
              <a href="https://unsplash.com/@artgho/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Alghozy</a></li>
              <li><a href="https://mui.com/">Material UI</a></li>
              <li><a href="https://mui.com/material-ui/material-icons/">Material Icons</a></li>
            </ul>
          </div>
          <div className="row">
          Footer cites external UI elements used || Footer design by: <a href="https://codepen.io/alvarotrigo">alvarotrigo</a>
          </div>
        </div>
      </footer>
      </>)
}
export default Footer