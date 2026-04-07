import "./Banner.css";
import Video from "../../assets/videos/Banner-Desk-com.mp4";
import Logo from "../../assets/svg/Logo";
const Banner = () => {
  return (
    <div className="video-section">
      <div className="video-main">
        <video autoPlay muted loop playsInline>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="logo-icon">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Banner;
