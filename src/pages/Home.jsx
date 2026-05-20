/**
 * @returns landing page
 */
import { useNavigate } from "react-router";
import mainImage from '../assets/alghozy-Z-NuwWXtyqg-unsplash.png'
import Footer from "../helper/Footer";

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
      <Footer />
    </section>
  </>
  )
}
export default Home