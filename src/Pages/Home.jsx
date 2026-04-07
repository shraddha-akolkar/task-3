import Banner from "../Components/Banner/Banner";
import Overview from "../Components/Overview/Overview";
import Slider from "../Components/Slider/Slider";
import About from "../Components/About/About";
import Project from "../Components/Project/Project";
import Get from "../Components/Get/Get";
import Terms from "../Components/Terms/Terms";
import Construction from "../Components/Construction/Construction";
import Realty from "../Components/Realty/Realty";
import Philosophy from "../Components/Philosophy/Philosophy";
import Enquire from "../Components/Enquire/Enquire";
import Dream from "../Components/Dream/Dream";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Overview />
      <Slider />
      <About />
      <Project />
      <Get />
      <Terms />
      <Construction />
      <Realty />
      <Philosophy />
      <Enquire />
      <Dream />
    </div>
  );
};

export default Home;
