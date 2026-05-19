/**
 * 
 * @returns landing page
 */
import { useNavigate } from "react-router";
import mainImage from '../assets/alghozy-Z-NuwWXtyqg-unsplash.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Home = () => {
  let navigate = useNavigate();

  return (
  <>
    <section className="homeArea">
      <div className="middleContainer">
        <header className="welcomeArea">
          <div className='textDiv'>
            <h1>Limited Time Offer! Up to 50% OFF!</h1>
            <p>Don't Wait - Limited Stock at Unbeatable Prices!</p>
            <button onClick={() => navigate("/shop")} className="shopBtn" 
                type="button">Shop Now!</button>
          </div>
        </header>
        <div className="mainImgDiv">
          <img src={mainImage} alt="a man delivering shopping boxes" />
        </div>
      </div>
      <footer>
        <div class="footer">
          <div class="row">
            <a href="#"><i><FacebookIcon /></i></a>
            <a href="#"><i><InstagramIcon /></i></a>
            <a href="#"><i><XIcon /></i></a>
            <a href="#"><i><YouTubeIcon /></i></a>
            <a href="#"><i><WhatsAppIcon /></i></a>
          </div>
          <div class="row">
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div class="row">
            <ul>
              <li><a href="https://fakestoreapi.com/">FakeStoreAPI</a></li>
              <li><a href="https://unsplash.com/illustrations/delivery-person-pushing-a-cart-with-boxes-Z-NuwWXtyqg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Illustration by <a href="https://unsplash.com/@artgho/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Alghozy</a></a></li>
              <li><a href="https://mui.com/">Material UI</a></li>
              <li><a href="https://mui.com/material-ui/material-icons/">Material Icons</a></li>
            </ul>
          </div>
          <div class="row">
          Footer cites external UI elements used || Footer design by: <a href="https://codepen.io/alvarotrigo">alvarotrigo</a>
          </div>
        </div>
      </footer>

    </section>
  </>
  )
}
export default Home