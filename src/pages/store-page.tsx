import { Col, Row } from "react-bootstrap";
import StoreItems from "../data/items.json";
import StoreItem from "../components/store-item/store-item";
import langKey from "../bootstrap/i18n/langKey";
import { useTranslation } from "react-i18next";
import { LANGS } from "../bootstrap/i18n/init-i18n";

const StorePage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  return (
    <div className="mb-3">
      <h1 className={`${isArabic ? "text-end" : ""}`}>
        {t(langKey.navbar.store)}
      </h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreItem vm={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StorePage;
