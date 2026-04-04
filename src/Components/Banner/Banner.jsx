import "./Banner.css";
import Video from "../../assets/videos/Banner-Desk-com.mp4";
import img from "../../assets/images/grass.webp";
// hjhkj
const Banner = () => {
  return (
    <div className="video-section">
      <div className="video-main">
        <video autoPlay muted loop playsInline>
          <source src={Video} type="video/mp4" />
        </video>
        <div></div>
        <img src={img} alt="img" srcset="" />
      </div>
    </div>
  );
};

export default Banner;
