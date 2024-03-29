import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";
import { routes } from "../../../utilities/config";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import langKey from "../../../bootstrap/i18n/langKey";
import HomePageDescription from "../description/home-page-description";
import { LANGS } from "../../../bootstrap/i18n/init-i18n";

const HomePageLeftSide = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "36px" }}>
        {t(langKey.homePage.slogan)}
      </h2>
      <h4 style={{ textAlign: "center", fontSize: "26px" }}>
        {t(langKey.homePage.with)}
        <span className="text-danger fw-bold">
          {t(langKey.homePage.yopalStore)}
        </span>
      </h4>

      <HomePageDescription />

      <Nav.Link as={NavLink} end to={routes.STORE}>
        <Button
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {t(langKey.homePage.shopNow)}
          {isArabic ? (
            <svg
              width="1rem"
              height="1rem"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 
              4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          ) : (
            <svg
              width="1rem"
              height="1rem"
              fill="currentColor"
              className="bi bi-arrow-right "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 
              4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          )}
        </Button>
      </Nav.Link>
    </Col>
  );
};

export default HomePageLeftSide;
