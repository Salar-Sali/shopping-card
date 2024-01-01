import { Button, Card } from "react-bootstrap";
import IStoreItemProps from "./i-store-item-props";
import { formatCurrency } from "../../utilities/format-currency";
import { useTranslation } from "react-i18next";
import langKey from "../../bootstrap/i18n/langKey";
import { useShoppingCartContext } from "../../context/shopping-cart-context/shopping-cart-context";

const StoreItem = (props: IStoreItemProps) => {
  const { vm } = props;
  const { t } = useTranslation();

  const {
    getCartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    resetCartQuantity,
  } = useShoppingCartContext();
  const quantity = getCartQuantity(vm.id);
  return (
    <Card className="h-100">
      <Card.Img
        src={`${vm.imgUrl}`}
        variant="top"
        height="200px"
        alt={vm.name}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-2">{vm.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(vm.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(vm.id)}
            >
              {t(langKey.store.addToBasket)}
            </Button>
          ) : (
            // contains (+,-,and quatity)(remove)
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              {/* (+,-,and quatity) */}
              <div className="d-flex justify-content-center align-items-center">
                <Button onClick={() => decreaseCartQuantity(vm.id)}>-</Button>
                <div className="mx-2">
                  <span className="fs-3">{quantity}</span>
                  {t(langKey.store.itemsInTheBasket)}
                </div>
                <Button onClick={() => increaseCartQuantity(vm.id)}>+</Button>
              </div>
              {/* remove button */}
              <Button
                className="btn btn-danger"
                size="sm"
                onClick={() => resetCartQuantity(vm.id)}
              >
                {t(langKey.store.remove)}
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
