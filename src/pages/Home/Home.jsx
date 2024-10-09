import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero-banner" className="bannerImage" />
        <div className="heroCaption">
          <img src={hero_title} alt="hero-title" className="captionImage" />
          <p>
            Discovering his ties to a secret ancient order,a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="heroBtns">
            <button className="btn">
              <img src={play_icon} alt="play-icon" />
              Play
            </button>

            <button className="btn darkBtn">
              <img src={info_icon} alt="info-icon" />
              More Info
            </button>
          </div>

          <TitleCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
