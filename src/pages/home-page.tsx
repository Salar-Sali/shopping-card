import Row from "react-bootstrap/esm/Row";
import HomePageLeftSide from "../components/home-page/left-side/home-page-left-side";
import HomePageRightSide from "../components/home-page/right-side/home-page-right-side";
import HomePageSocialMediaIcons from "../components/home-page/social-media-icons/home-page-social-media-icons";
import { useTranslation } from "react-i18next";
import { LANGS } from "../bootstrap/i18n/init-i18n";

const HomePage = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  return (
    // home page wrapper
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Merriweather",
      }}
    >
      {/* right and left wrapper */}
      <Row
        md={2}
        xs={1}
        className="g-2 w-100 h-100"
        dir={isArabic ? "rtl" : ""}
      >
        <HomePageLeftSide />
        <HomePageRightSide />
      </Row>
      {/* social media icons */}
      <HomePageSocialMediaIcons />
    </div>
  );
};

export default HomePage;
