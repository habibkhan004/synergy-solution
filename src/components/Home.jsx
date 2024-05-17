import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import Slider from "./Slider";
import Mission from "./Mission";
import Team from "./Team.jsx";

let Home = ({ tab, onTabChange }) => {
  return (
    <>
      <Slider></Slider>
      <HomeServices tab={tab} onTabChange={onTabChange}></HomeServices>
      <HomeProjects tab={tab} onTabChange={onTabChange}></HomeProjects>
      <Mission></Mission>
      <Team></Team>
    </>
  );
};

export default Home;
