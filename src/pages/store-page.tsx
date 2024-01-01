import { Col, Row } from "react-bootstrap";
import StoreItems from "../data/items.json";
import StoreItem from "../components/store-item/store-item";
import langKey from "../bootstrap/i18n/langKey";
import { useTranslation } from "react-i18next";

const StorePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t(langKey.navbar.store)}</h1>
      {/* for medium screen: 2 cols, for extra small: 1 col, large screen: 3 cols */}
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
