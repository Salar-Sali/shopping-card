import { Button, Card } from "react-bootstrap";
import IStoreItemProps from "./i-store-item-props";
import { formatCurrency } from "../../utilities/format-currency";
import { useTranslation } from "react-i18next";
import langKey from "../../bootstrap/i18n/langKey";

const StoreItem = (props: IStoreItemProps) => {
  const { vm } = props;
  const {t} = useTranslation()
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        src={vm.imgUrl}
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-2">{vm.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(vm.price)}</span>
        </Card.Title>
        <div className="mt-auto">{quantity===0? (<Button className="w-100">{t(langKey.store.addToBasket)}</Button>):(<div>options</div>)}</div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
