import { Card } from "react-bootstrap";
import IStoreItemProps from "./i-store-item-props";
import { formatCurrency } from "../../utilities/format-currency";

const StoreItem = (props: IStoreItemProps) => {
  const { vm } = props;
  return (
    <Card>
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
        <span>button</span>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
