import Row from "react-bootstrap/esm/Row";
import HomePageLeftSide from "../components/home-page/left-side/home-page-left-side";
import HomePageRightSide from "../components/home-page/right-side/home-page-right-side";
import HomePageSocialMediaIcons from "../components/home-page/social-media-icons/home-page-social-media-icons";

const HomePage = () => {
  return (
    // home page wrapper
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* right and left wrapper */}
      <Row md={2} xs={1} className="g-3 w-100 h-75">
        <HomePageLeftSide />
        <HomePageRightSide />
      </Row>
      {/* social media icons */}
      <HomePageSocialMediaIcons />
    </div>
  );
};

export default HomePage;
